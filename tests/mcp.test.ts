import { describe, expect, it } from "vitest";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { createServer } from "@/mcp/server";

async function connect() {
  const server = createServer();
  const client = new Client({ name: "test", version: "0.0.0" });
  const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();
  await Promise.all([server.connect(serverTransport), client.connect(clientTransport)]);
  return client;
}

describe("ratesnap MCP server", () => {
  it("exposes the full tool registry (4 pure-math FX tools)", async () => {
    const client = await connect();
    const { tools } = await client.listTools();
    expect(tools.length).toBe(4);
    const names = new Set(tools.map((t) => t.name));
    for (const expected of ["fx_convert", "cross_rate", "net_after_margin", "round_currency"]) {
      expect(names.has(expected), expected).toBe(true);
    }
    await client.close();
  });

  it("fx_convert multiplies with the caller-supplied rate and never fetches", async () => {
    const client = await connect();
    const r = await client.callTool({ name: "fx_convert", arguments: { amount: 100, rate: 0.85, decimals: 2, from: "USD", to: "EUR" } });
    expect((r as any).isError).toBeUndefined();
    const parsed = JSON.parse((r.content as any)[0].text);
    expect(parsed.result).toBe(85);
    expect(parsed.note).toContain("supplied by the caller");
    await client.close();
  });

  it("cross_rate chains two legs into a third rate", async () => {
    const client = await connect();
    const r = await client.callTool({ name: "cross_rate", arguments: { a_to_b: 0.9, b_to_c: 0.85 } });
    const parsed = JSON.parse((r.content as any)[0].text);
    expect(parsed.cross).toBeCloseTo(0.765, 10);
    expect(parsed.formula).toBe("A→C = A→B × B→C");
    await client.close();
  });

  it("net_after_margin shows gross, margin cost and net", async () => {
    const client = await connect();
    const r = await client.callTool({ name: "net_after_margin", arguments: { amount: 1000, rate: 0.9, margin_pct: 2 } });
    const parsed = JSON.parse((r.content as any)[0].text);
    expect(parsed.net).toBe(882);
    expect(parsed.gross).toBe(900);
    expect(parsed.margin_cost).toBe(18);
    await client.close();
  });

  it("round_currency uses the ISO minor-unit table and exact half-up rounding", async () => {
    const client = await connect();
    const jpy = await client.callTool({ name: "round_currency", arguments: { value: 1234.567, currency: "JPY" } });
    expect(JSON.parse((jpy.content as any)[0].text).rounded).toBe(1235);
    const bhd = await client.callTool({ name: "round_currency", arguments: { value: 1.23456, currency: "BHD" } });
    expect(JSON.parse((bhd.content as any)[0].text).rounded).toBe(1.235);
    // 浮点陷阱:2.345 的二进制是 2.34499…,朴素 Math.round 给 2.34,这里必须是 2.35
    const tricky = await client.callTool({ name: "round_currency", arguments: { value: 2.345, decimals: 2 } });
    expect(JSON.parse((tricky.content as any)[0].text).rounded).toBe(2.35);
    const usd = await client.callTool({ name: "round_currency", arguments: { value: 2.345, currency: "USD" } });
    expect(JSON.parse((usd.content as any)[0].text).rounded).toBe(2.35);
    await client.close();
  });

  it("handles invalid input at two layers: schema (protocol error) and logic (isError)", async () => {
    const client = await connect();
    // 逻辑层:1e308 × 2 溢出为 Infinity——两端都是合法有限数、通过 zod,
    // 但结果非有限 → handler isError(诚实报错,不输出假结果;
    // JSON.stringify(Infinity/NaN) 会变 null,必须用 isError 表达)
    const overflow = await client.callTool({ name: "net_after_margin", arguments: { amount: 1e308, rate: 2, margin_pct: 2 } });
    expect((overflow as any).isError).toBe(true);
    expect((overflow.content as any)[0].text).toContain("calculation failed");
    // schema 层:rate=0 被 zod .positive() 拒绝 → SDK 捕获后返回 isError 结果(不 throw)
    const schemaBad = await client.callTool({ name: "fx_convert", arguments: { amount: 100, rate: 0 } });
    expect((schemaBad as any).isError).toBe(true);
    expect((schemaBad.content as any)[0].text).toContain("-32602");
    // schema 层:margin_pct 150 被 zod .max(100) 拒绝 → 同样走 -32602
    const badMargin = await client.callTool({ name: "net_after_margin", arguments: { amount: 1000, rate: 0.9, margin_pct: 150 } });
    expect((badMargin as any).isError).toBe(true);
    expect((badMargin.content as any)[0].text).toContain("-32602");
    // schema 层:负 rate 被 zod 拒绝
    const negLeg = await client.callTool({ name: "cross_rate", arguments: { a_to_b: -1, b_to_c: 0.85 } });
    expect((negLeg as any).isError).toBe(true);
    expect((negLeg.content as any)[0].text).toContain("-32602");
    await client.close();
  });
});
