"use client";

import { HeroUIProvider } from "@heroui/react";
import ReactLenis from "lenis/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReactLenis
        root
        options={{
          smoothWheel: true,
          lerp: 0.08,
          wheelMultiplier: 1,
          touchMultiplier: 1.5,
        }}
      >
        <HeroUIProvider>{children}</HeroUIProvider>
      </ReactLenis>
    </>
  );
}
