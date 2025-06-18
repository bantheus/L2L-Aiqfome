"use client";

import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
  "aria-label": string;
};

function IconButton({ icon, className, ...props }: IconButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full transition hover:opacity-80 focus:ring-2 focus:ring-white focus:outline-none",
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  );
}

export default IconButton;
