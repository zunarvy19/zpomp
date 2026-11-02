"use client";

import Image, { type ImageLoaderProps, type ImageProps } from "next/image";

// Variants are generated before build; the static export needs no image server.
function staticLoader({ src, width }: ImageLoaderProps) {
  const size = width <= 640 ? 640 : width <= 960 ? 960 : 1280;
  return `${src.replace(/\.[^.]+$/, "")}-${size}.webp`;
}

export default function ResponsiveImage({ alt, ...props }: ImageProps) {
  return <Image {...props} alt={alt} loader={staticLoader} unoptimized={false} />;
}
