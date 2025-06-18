import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/format-currency";
import { BikeIcon, ChevronRightIcon, StarIcon } from "lucide-react";

interface RestaurantInfosProps {
  restaurantData: Restaurant;
}

function RestaurantInfos({ restaurantData }: RestaurantInfosProps) {
  return (
    <div
      className="flex flex-col gap-1"
      aria-label="Informações do restaurante"
    >
      <div className="flex items-center gap-1.5">
        <div
          className="text-primary flex items-center gap-1"
          title="Taxa de entrega"
        >
          <BikeIcon size={20} aria-hidden />
          <span className="text-sm font-bold">
            {restaurantData.deliveryFee === 0
              ? "grátis"
              : formatCurrency(restaurantData.deliveryFee)}
          </span>
          <ChevronRightIcon size={12} aria-hidden />
        </div>

        <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-500">
          <span className="text-neutral-400">•</span>
          <span>{`hoje, ${restaurantData.deliveryTime}`}</span>
          <span className="text-neutral-400">•</span>
          <p>{restaurantData.distance}</p>
        </div>
      </div>

      <Badge
        className="bg-teal-50 px-2 py-1.5 font-bold text-teal-600"
        aria-label={`Entrega grátis acima de ${formatCurrency(restaurantData.freeDeliveryAbove)}`}
      >
        entrega grátis acima de{" "}
        {formatCurrency(restaurantData.freeDeliveryAbove)}
      </Badge>

      <div className="flex items-center gap-1.5">
        <div className="flex items-center gap-1" title="Avaliação">
          <StarIcon
            size={16}
            className="fill-yellow-500 text-yellow-500"
            aria-hidden
          />
          <span className="text-xs font-bold text-neutral-500">
            {restaurantData.rating} de 5
          </span>
        </div>
        <span className="text-neutral-400">•</span>
        <span
          className={`text-xs font-bold ${
            restaurantData.isOpen ? "text-green-500" : "text-red-500"
          }`}
        >
          {restaurantData.isOpen
            ? `fecha às ${restaurantData.closingTime}`
            : "fechado"}
        </span>
      </div>

      <p className="text-xs font-bold text-neutral-500">
        pedido mínimo: {formatCurrency(restaurantData.minOrder)}
      </p>
    </div>
  );
}

export default RestaurantInfos;
