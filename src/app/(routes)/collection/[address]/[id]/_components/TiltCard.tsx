"use client"

import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ThirdwebNftMedia } from "@thirdweb-dev/react";
import { useNftContext } from "./nft-provider";
import Image from "next/image";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { nft } = useNftContext();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative m-auto h-[60svh] w-[inherit] rounded-xl bg-[#000000] dark:bg-[#ffffff]"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-3 grid place-content-center rounded-xl bg-[#ffffff] from-violet-700 to-violet-300 shadow-lg dark:bg-gradient-to-br"
      >
        {nft &&
          (nft.metadata.image ? (
            <ThirdwebNftMedia
              metadata={nft.metadata}
              width="485px"
              height="485px"
              style={{
                minWidth: "320px",
                maxWidth: "320px",
                minHeight: "320px",
                maxHeight: "320px",
                borderRadius: "12px",
              }}
            />
          ) : (
            <Image
              src="/assets/placeholder/nft_placeholder.svg"
              width={500}
              height={500}
              alt="image of an NFT"
            />
          ))}
      </div>
    </motion.div>
  );
};

export default TiltCard;
