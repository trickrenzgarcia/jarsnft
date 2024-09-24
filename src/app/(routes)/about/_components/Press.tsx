"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
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
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  const handleResize = useCallback(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth / 2); // Half because we're duplicating the content
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number;

    const animateScroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const newScrollPosition = (elapsed / 10) % contentWidth;

      setScrollPosition(newScrollPosition);
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [contentWidth]);

  return (
    <section id="press">
      <div className="py-1">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-sm font-semibold text-gray-500">
            TRUSTED BY LEADING TEAMS
          </h3>
          <div className="relative mt-6 overflow-hidden">
            <div
              ref={contentRef}
              className="flex"
              style={{
                transform: `translateX(-${scrollPosition}px)`,
                whiteSpace: "nowrap",
              }}
            >
              {[...press, ...press].map((logo, idx) => (
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