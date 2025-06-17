"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import type { ButtonHTMLAttributes } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: string;
  alt: string;
  width?: number;
  height?: number;
};

function IconButton({
  icon,
  alt,
  width,
  height,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full transition hover:opacity-80 focus:ring-2 focus:ring-white focus:outline-none",
        className,
      )}
      {...props}
    >
      <Image
        src={icon}
        alt={alt}
        width={width || 24}
        height={height || 24}
        className="object-contain"
      />
    </button>
  );
}

export default IconButton;
