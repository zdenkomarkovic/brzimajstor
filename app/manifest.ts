import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} – majstor 0-24`,
    short_name: "HausMajstor",
    description:
      "Hitne majstorske intervencije u Beogradu 0-24: vodoinstalater, električar, odgušenje kanalizacije i servis grejanja.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#12314f",
    lang: "sr-RS",
    icons: [
      { src: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
