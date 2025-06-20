import { ChevronRightIcon, HeartIcon, Share2Icon } from "lucide-react";
import Image from "next/image";

interface RestaurantTitleProps {
  restaurantData: Restaurant;
  onShare?: () => void;
  onFavorite?: () => void;
  isFavorite?: boolean;
  onMoreInfos?: () => void;
}

function RestaurantTitle({
  restaurantData,
  onShare,
  onFavorite,
  isFavorite = false,
  onMoreInfos,
}: RestaurantTitleProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Image
          src={restaurantData.logoUrl}
          alt={`Restaurante ${restaurantData.name}`}
          width={36}
          height={36}
          quality={100}
          className="rounded-md bg-white object-contain"
          priority
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
          >
            <Share2Icon size={22} />
          </button>

          <button
            aria-label={
              isFavorite ? "Remover dos favoritos" : "Favoritar restaurante"
            }
            onClick={onFavorite}
            type="button"
            className={`transition hover:text-red-500 active:scale-95 ${isFavorite ? "text-red-500" : ""}`}
          >
            <HeartIcon
              size={22}
              fill={isFavorite ? "currentColor" : "none"}
              className="transition"
            />
          </button>
        </div>

        <button
          className="flex items-center gap-1 text-xs font-bold text-teal-400 hover:underline"
          aria-label="Mais informações do restaurante"
          onClick={onMoreInfos}
          type="button"
        >
          mais infos <ChevronRightIcon size={12} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}

export default RestaurantTitle;
