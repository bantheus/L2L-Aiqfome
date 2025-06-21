import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/format-currency";
import { BikeIcon, ChevronRightIcon, StarIcon } from "lucide-react";

interface RestaurantInfosProps {
  restaurantData: Restaurant;
}

function DeliveryFee({ fee }: { fee: number }) {
  return (
    <span className="text-sm font-bold">
      {fee === 0 ? "grátis" : formatCurrency(fee)}
    </span>
  );
}

function RestaurantInfos({ restaurantData }: RestaurantInfosProps) {
  const {
    deliveryFee,
    deliveryTime,
    distance,
    freeDeliveryAbove,
    rating,
    isOpen,
    closingTime,
    minOrder,
  } = restaurantData;

  return (
    <section
      className="flex flex-col gap-1 md:gap-2 lg:gap-2.5 xl:gap-3 2xl:gap-4"
      aria-label="Informações do restaurante"
    >
      <div className="flex items-center gap-1.5 md:gap-2 lg:gap-3">
        <div
          className="text-primary flex items-center gap-1 md:gap-1.5 lg:gap-2"
          title="Taxa de entrega"
        >
          <BikeIcon size={20} aria-hidden />
          <DeliveryFee fee={deliveryFee} />
          <ChevronRightIcon size={12} aria-hidden />
        </div>

        <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-500 md:gap-2 lg:gap-3">
          <span className="text-neutral-400" aria-hidden>
            •
          </span>
          <span className="md:text-sm">{`hoje, ${deliveryTime}`}</span>
          <span className="text-neutral-400" aria-hidden>
            •
          </span>
          <span className="md:text-sm">{distance}km</span>
        </div>
      </div>

      {freeDeliveryAbove > 0 && (
        <Badge
          className="bg-teal-50 px-2 py-1.5 font-bold text-teal-600 md:px-3 md:py-1.5 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5"
          aria-label={`Entrega grátis acima de ${formatCurrency(freeDeliveryAbove)}`}
        >
          entrega grátis acima de {formatCurrency(freeDeliveryAbove)}
        </Badge>
      )}

      <div className="flex items-center gap-1.5 md:gap-2 lg:gap-3">
        <div
          className="flex items-center gap-1 md:gap-1.5 lg:gap-2"
          title="Avaliação"
        >
          <StarIcon
            size={16}
            className="fill-yellow-500 text-yellow-500"
            aria-hidden
          />
          <span className="flex items-center text-xs font-bold text-neutral-500 md:text-sm">
            {rating} de 5 <ChevronRightIcon size={12} aria-hidden />
          </span>
        </div>

        <span className="text-xs text-neutral-400 md:text-sm" aria-hidden>
          •
        </span>

        <span
          className={`text-xs font-bold md:text-sm ${isOpen ? "text-green-500" : "text-red-500"} `}
        >
          {isOpen ? `fecha às ${closingTime}` : "fechado"}
        </span>
      </div>

      <p className="text-xs font-bold text-neutral-500 md:text-sm">
        pedido mínimo: {formatCurrency(minOrder)}
      </p>
    </section>
  );
}

export default RestaurantInfos;
