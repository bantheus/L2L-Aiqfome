"use client";

import { ChevronRightIcon, HeartIcon, Share2Icon } from "lucide-react";
import Image from "next/image";
import type { MouseEventHandler } from "react";

interface RestaurantTitleProps {
  restaurantData: Restaurant;
  onShare?: MouseEventHandler<HTMLButtonElement>;
  onFavorite?: MouseEventHandler<HTMLButtonElement>;
  isFavorite?: boolean;
  onMoreInfos?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

function RestaurantTitle({
  restaurantData,
  onShare,
  onFavorite,
  isFavorite = false,
  onMoreInfos,
  className = "",
}: RestaurantTitleProps) {
  return (
    <section
      className={`flex flex-col gap-2 ${className}`}
      aria-label={`Restaurante ${restaurantData.name}`}
    >
      <div className="flex items-center gap-2">
        <Image
          src={restaurantData.logoUrl}
          alt={`Logo do restaurante ${restaurantData.name}`}
          width={36}
          height={36}
          quality={100}
          className="rounded-md bg-white object-contain"
          priority
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/favicon.ico";
          }}
        />
        <h1 className="text-xl/tight font-extrabold text-balance text-neutral-900">
          {restaurantData.name}
        </h1>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-4 text-purple-900">
          <button
            aria-label="Compartilhar restaurante"
            onClick={onShare}
            type="button"
            className="transition hover:text-purple-700 active:scale-95"
            tabIndex={onShare ? 0 : -1}
            disabled={!onShare}
          >
            <Share2Icon size={22} aria-hidden="true" />
          </button>

          <button
            aria-label={
              isFavorite ? "Remover dos favoritos" : "Favoritar restaurante"
            }
            onClick={onFavorite}
            type="button"
            className={`transition hover:text-red-500 active:scale-95 ${isFavorite ? "text-red-500" : ""}`}
            tabIndex={onFavorite ? 0 : -1}
            disabled={!onFavorite}
          >
            <HeartIcon
              size={22}
              fill={isFavorite ? "currentColor" : "none"}
              className="transition"
              aria-hidden="true"
            />
          </button>
        </div>

        <button
          className="flex items-center gap-1 text-xs font-bold text-teal-400 hover:underline"
          aria-label="Mais informações do restaurante"
          onClick={onMoreInfos}
          type="button"
          tabIndex={onMoreInfos ? 0 : -1}
          disabled={!onMoreInfos}
        >
          mais infos{" "}
          <ChevronRightIcon size={12} strokeWidth={3} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

export default RestaurantTitle;
