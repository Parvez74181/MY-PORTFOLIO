import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Parvez Portfolio",
    short_name: "Parvez Portfolio",
    description:
      "I’m Parvez, a full-stack web developer specializing in modern, user-friendly web design, fast and scalable web development, and custom WordPress solutions. Explore my portfolio to see high-performance projects and innovative solutions for businesses of all sizes.",
    start_url: "/",
    display: "standalone",
    background_color: "#F2F5EA",
    theme_color: "#F2F5EA",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      { src: "/favicons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/favicons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
