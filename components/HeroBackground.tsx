"use client";

import dynamic from "next/dynamic";

const FloatingLines = dynamic(() => import("@/components/FloatingLines"), {
  ssr: false,
});

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <FloatingLines
        bendRadius={5}
        bendStrength={-0.5}
        enabledWaves={["top", "middle", "bottom"]}
        interactive={true}
        lineCount={[5, 5, 5]}
        lineDistance={[5, 5, 5]}
        linesGradient={[]}
        parallax={true}
      />
    </div>
  );
}
