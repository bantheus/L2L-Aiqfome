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
      className="flex flex-col gap-1"
      aria-label="Informações do restaurante"
    >
      <div className="flex items-center gap-1.5">
        <div
          className="text-primary flex items-center gap-1"
          title="Taxa de entrega"
        >
          <BikeIcon size={20} aria-hidden />
          <DeliveryFee fee={deliveryFee} />
          <ChevronRightIcon size={12} aria-hidden />
        </div>

        <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-500">
          <span className="text-neutral-400" aria-hidden>
            •
          </span>
          <span>{`hoje, ${deliveryTime}`}</span>
          <span className="text-neutral-400" aria-hidden>
            •
          </span>
          <span>{distance}km</span>
        </div>
      </div>

      {freeDeliveryAbove > 0 && (
        <Badge
          className="bg-teal-50 px-2 py-1.5 font-bold text-teal-600"
          aria-label={`Entrega grátis acima de ${formatCurrency(freeDeliveryAbove)}`}
        >
          entrega grátis acima de {formatCurrency(freeDeliveryAbove)}
        </Badge>
      )}

      <div className="flex items-center gap-1.5">
        <div className="flex items-center gap-1" title="Avaliação">
          <StarIcon
            size={16}
            className="fill-yellow-500 text-yellow-500"
            aria-hidden
          />
          <span className="flex items-center text-xs font-bold text-neutral-500">
            {rating} de 5 <ChevronRightIcon size={12} aria-hidden />
          </span>
        </div>
        <span className="text-xs text-neutral-400" aria-hidden>
          •
        </span>
        <span
          className={`text-xs font-bold ${
            isOpen ? "text-green-500" : "text-red-500"
          }`}
        >
          {isOpen ? `fecha às ${closingTime}` : "fechado"}
        </span>
      </div>

      <p className="text-xs font-bold text-neutral-500">
        pedido mínimo: {formatCurrency(minOrder)}
      </p>
    </section>
  );
}

export default RestaurantInfos;
