import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GemiShop",
    short_name: "GemiShop",
    description:
      "GemiShop gündəlik məhsullar kataloquna baxın və İdarə Paneli bölməsində məhsulları idarə edin.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a1929",
    theme_color: "#0a1929",
    icons: [
      {
        src: "/gemishop-logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/gemishop-logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/gemishop-logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
