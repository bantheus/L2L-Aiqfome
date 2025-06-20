import { formatCurrency } from "@/lib/format-currency";
import { getLowestPrice } from "@/lib/get-lowest-price";
import { CircleDollarSignIcon } from "lucide-react";

interface DishPriceProps {
  sizes: { price: number; promoPrice?: number | null }[];
}

function DishPrice({ sizes }: DishPriceProps) {
  if (sizes.length === 1) {
    const size = sizes[0];
    if (size.promoPrice) {
      return (
        <div className="flex flex-col items-end">
          <span className="text-xs font-bold text-neutral-400 line-through">
            {formatCurrency(size.price)}
          </span>
          <span className="flex items-center gap-0.5 text-sm font-bold text-green-600">
            <CircleDollarSignIcon size={14} className="text-green-600" />
            {formatCurrency(size.promoPrice)}
          </span>
        </div>
      );
    }
    return (
      <span className="text-primary text-sm font-bold">
        {formatCurrency(size.price)}
      </span>
    );
  }

  const lowest = getLowestPrice(sizes);
  return (
    <span className="flex flex-col items-end gap-0.5">
      <span className="text-xs font-bold text-neutral-500">a partir de</span>
      <span className="text-primary text-sm font-bold">
        {formatCurrency(lowest)}
      </span>
    </span>
  );
}

export default DishPrice;
