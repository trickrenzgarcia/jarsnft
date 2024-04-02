"use client";

import React, { useState } from "react";

export default function useRandomColor(userId: string) {
  const [color, setColor] = useState(() => {
    const hash = Array.from(userId).reduce((hash, char) => {
      hash = (hash << 5) - hash + char.charCodeAt(0);
      return hash & hash;
    }, 0);

    const hue = Math.abs(hash % 360);

    return `hsl(${hue}, 50%, 80%)`;
  });

  // Convert the hsl string to an RGB object
  const rgb = hslToRgb(color);

  // Convert the RGB object to a hex string
  const hex = rgbToHex(rgb.r, rgb.g, rgb.b);

  return hex;
}

// Convert an HSL string to an RGB object
function hslToRgb(hsl: string) {
  const hslArray = hsl
    .replace(/hsl\((\d+), (\d+)%, (\d+)%\)/, "$1 $2% $3%")
    .split(" ");
  const h = parseInt(hslArray[0]) / 360;
  const s = parseInt(hslArray[1]) / 100;
  const l = parseInt(hslArray[2]) / 100;

  const a = 2 * l - 1;
  const f = (n: number, k: number) => (n + k / 6) % 1;

  const rgb = {
    r: Math.round(
      h * 6 < 1 ? a + s * f(h * 6, 1) : a + s * f(h * 6 - 1, 1) - s,
    ),
    g: Math.round(
      h * 6 < 2 ? a + s * f(h * 6 - 1, 2) : a + s * f(h * 6 - 2, 2) - s,
    ),
    b: Math.round(
      h * 6 < 3 ? a + s * f(h * 6 - 2, 3) : a + s * f(h * 6 - 3, 3) - s,
    ),
  };

  return rgb;
}

// Convert an RGB object to a hex string
function rgbToHex(r: number, g: number, b: number) {
  const hex = (n: number) =>
    (n < 16 ? `0${n.toString(16)}` : `${n.toString(16)}`).toUpperCase();
  return `#${hex(r)}${hex(g)}${hex(b)}`;
}
