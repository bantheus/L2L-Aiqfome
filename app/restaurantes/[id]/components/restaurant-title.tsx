import { ChevronRightIcon, HeartIcon, Share2Icon } from "lucide-react";
import Image from "next/image";

interface RestaurantTitleProps {
  restaurantData: {
    imageSrc: string;
    name: string;
  };
}

function RestaurantTitle({ restaurantData }: RestaurantTitleProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Image
          src={restaurantData.imageSrc}
          alt={`Restaurante ${restaurantData.name}`}
          width={36}
          height={36}
          quality={100}
          className="rounded-md object-contain"
        />
        <h1 className="text-xl font-extrabold text-neutral-900">
          {restaurantData.name}
        </h1>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-4 text-purple-900">
          <button aria-label="Compartilhar restaurante">
            <Share2Icon size={22} />
          </button>

          <button aria-label="Favoritar restaurante">
            <HeartIcon size={22} />
          </button>
        </div>

        <span className="flex items-center text-xs font-bold text-teal-400">
          mais infos <ChevronRightIcon size={12} strokeWidth={3} />
        </span>
      </div>
    </div>
  );
}

export default RestaurantTitle;
