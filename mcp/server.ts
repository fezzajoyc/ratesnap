import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { MCP_TOOLS } from "./tools";

/**
 * RateSnap MCP server(stdio):把站上汇率工具背后的纯函数逻辑
 * 暴露为 AI 可执行工具。人和 AI 用同一份经过测试的实现——
 * 汇率由调用方提供,这里只做诚实的换算数学,不假装有实时行情。
 *
 * 构建后运行:npx ratesnap-mcp(或 node mcp/dist/server.mjs)
 */

export function createServer() {
  const server = new McpServer(
    { name: "ratesnap", version: "1.0.0" },
    {
      instructions:
        "RateSnap: currency conversion tools. These executable tools run the same tested logic as the website (https://ratesnap.app). All tools are pure math: you supply the exchange rate, the tools convert, chain and round honestly — they never fetch or invent live rates. Rate direction convention: target-currency units per 1 source-currency unit. Rounding is half-up at ISO 4217 minor-unit precision (0 for JPY/KRW, 2 for most, 3 for BHD/KWD).",
    },
  );

  for (const tool of MCP_TOOLS) {
    server.registerTool(tool.name, {
      title: tool.title,
      description: tool.description,
      inputSchema: tool.schema,
    }, async (args) => {
      try {
        return tool.run(args ?? {});
      } catch (e) {
        return {
          content: [{ type: "text" as const, text: `error: ${(e as Error).message}` }],
          isError: true,
        };
      }
    });
  }
  return server;
}

export async function runStdio() {
  const server = createServer();
  await server.connect(new StdioServerTransport());
  // stdio 模式下保持进程存活;stderr 可写日志(stdout 是协议通道)
  console.error(`ratesnap MCP server: ${MCP_TOOLS.length} tools ready`);
}

if (process.argv[1] && process.argv[1].includes("server")) {
  void runStdio();
}
