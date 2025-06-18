"use client";

import { MapPinIcon } from "lucide-react";
import Image from "next/image";

interface LocationButtonProps {
  address: string;
}

function LocationButton({ address }: LocationButtonProps) {
  return (
    <button
      aria-label="Selecionar local de entrega"
      className="flex items-center gap-2 rounded-md transition hover:opacity-80 focus:ring-2 focus:ring-white focus:outline-none"
    >
      <MapPinIcon size={20} />
      <div className="flex flex-col text-left">
        <span className="text-light text-xs font-medium">Entregando em</span>
        <span className="flex items-center gap-1 font-bold">
          {address}
          <Image
            src="/icons/chevron-right-icon.svg"
            alt=""
            width={16}
            height={16}
            className="object-contain"
          />
        </span>
      </div>
    </button>
  );
}

export default LocationButton;
