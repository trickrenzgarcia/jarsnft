"use client"

import dynamic from 'next/dynamic';
import React from 'react'

export default function SwitchModeClient() {
  const SwitchMode = dynamic(() => import("./SwitchMode"));

  return <SwitchMode />;
}
