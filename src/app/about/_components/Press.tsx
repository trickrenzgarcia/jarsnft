"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const press = [
  "/assets/Company/Figma.svg",
  "/assets/Company/Docker.svg",
  "/assets/Company/Discord.svg",
  "/assets/Company/Coinbase.svg",
  "/assets/Company/Shopify.svg",
  "/assets/Company/Stripe.svg",
  "/assets/Company/PayPal.svg",
  "/assets/Company/Tesla.svg",
];

export const Press: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleResize = () => {
      setContainerWidth(container.offsetWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number;

    const animateScroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      setScrollPosition((elapsed / 10) % containerWidth);
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [containerWidth]);

  return (
    <section id="press">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-sm font-semibold text-gray-500">
            TRUSTED BY LEADING TEAMS
          </h3>
          <div
            className="relative mt-6 overflow-hidden"
            style={{ whiteSpace: "nowrap" }}
            ref={containerRef}
          >
            <div
              className="grid grid-cols-2 place-items-center gap-2 md:gap-4 lg:grid-cols-4 xl:gap-x-6 2xl:grid-cols-8"
              style={{
                display: "flex",
                transform: `translateX(-${scrollPosition}px)`,
              }}
            >
              {press.map((logo, idx) => (
                <Image
                  key={idx}
                  src={logo}
                  width={60}
                  height={50}
                  className="h-10 w-40 px-2 dark:brightness-0 dark:invert"
                  alt={`logo-${logo}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
