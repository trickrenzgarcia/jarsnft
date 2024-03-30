"use client";

import { PageNextButton } from "./_components";

export default function Page() {
  return (
    <div className="h-[2000px] w-full">
      <h1>Page Learn</h1>
      {/* Welcome page */}
      <PageNextButton title="Getting Started" href="/learn/getting-started" />
    </div>
  );
}
