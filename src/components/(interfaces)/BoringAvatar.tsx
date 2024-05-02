"use client"

import Avatar, { AvatarProps } from "boring-avatars";

export default function BoringAvatar({ size, name, variant = "beam"}: AvatarProps) {
  return (
    <Avatar 
      size={size}
      name={name} 
      variant={variant}
      colors={['#5CACC4', '#8CD19D', '#CEE879', '#FCB653', '#FF5254']}
    />
  )
}
