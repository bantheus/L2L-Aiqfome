"use client";

import { ChevronRightIcon, MapPinIcon } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

interface LocationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  address: string;
}

function LocationButton({ address, ...props }: LocationButtonProps) {
  return (
    <button
      type="button"
      aria-label={`Selecionar local de entrega: ${address}`}
      className="flex items-center gap-2 rounded-md transition hover:opacity-80 focus:ring-2 focus:ring-white focus:outline-none"
      {...props}
    >
      <MapPinIcon size={20} aria-hidden="true" />
      <div className="flex flex-col text-left">
        <span className="text-light text-xs font-medium">Entregando em</span>
        <span className="flex items-center gap-1 font-bold">
          {address}
          <ChevronRightIcon size={16} aria-hidden="true" />
        </span>
      </div>
    </button>
  );
}

export default LocationButton;
