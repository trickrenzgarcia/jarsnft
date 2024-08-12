"use client";

import { useEffect, useState } from "react";
import OptimisticCounter from "./_components/OptimisticCounter";

export default async function TestLikesLogic() {
  // I want the latest LIKE value from the server in SSR PAGES.
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const fetchLikes = async () => {
      const res = await fetch("http://localhost:3000/api/likes", {
        cache: "no-cache",
        next: {
          tags: ["likes"],
        },
      });
      setLikes(await res.json());
    };

    fetchLikes();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">LIKE (LIVE VALUE) NO DELAY DEMO using useOptimistic Hook</h1>
      <OptimisticCounter likes={likes} />
    </div>
  );
}
