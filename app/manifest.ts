import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RateSnap — currency tools in your browser",
    short_name: "RateSnap",
    description:
      "Free currency tools that run in your browser: precision converter, conversion tables, cross rates and FX margin math. Rates from open.er-api.com, cached on your device.",
    start_url: "/en",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
