"use client";

import React from "react";
import "@/components/(css)/LoadingStyle.css";
import "@/components/(css)/BouncyStyle.css";

type LoadingProps = {
  animation: "wave" | "bouncy";
};

export default function Loading({ animation }: LoadingProps) {
  switch (animation) {
    case "wave":
      return <WaveLoading />;
    case "bouncy":
      return <BouncyLoading />;
  }
}

function WaveLoading() {
  return (
    <div className="loading__container">
      <h2>Loading</h2>
      <h2>Loading</h2>
    </div>
  );
}

function BouncyLoading() {
  return (
    <div className="waviy">
      <span style={{ "--i": 1 } as any}>L</span>
      <span style={{ "--i": 2 } as any}>O</span>
      <span style={{ "--i": 3 } as any}>A</span>
      <span style={{ "--i": 4 } as any}>D</span>
      <span style={{ "--i": 5 } as any}>I</span>
      <span style={{ "--i": 6 } as any}>N</span>
      <span style={{ "--i": 7 } as any}>G</span>
      <span style={{ "--i": 8 } as any}>.</span>
      <span style={{ "--i": 9 } as any}>.</span>
      <span style={{ "--i": 10 } as any}>.</span>
    </div>
  );
}
