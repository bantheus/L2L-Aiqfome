import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/format-currency";
import type { CartItemDetails } from "@/store/cart-store";
import {
  MinusCircleIcon,
  PencilIcon,
  PlusCircleIcon,
  Trash2Icon,
} from "lucide-react";
import ProductDetail from "./product-detail";

type CartItemProps = {
  item: {
    details: CartItemDetails;
    quantity: number;
    total: number;
    name: string;
    id: string;
  };
  restaurant: Restaurant;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
  onRemove: (id: string) => void;
};

function CartItem({
  item,
  restaurant,
  onIncrement,
  onDecrement,
  onRemove,
}: CartItemProps) {
  return (
    <li className="flex flex-col gap-2 transition md:gap-4 md:rounded-xl md:bg-neutral-50 md:p-6 md:shadow lg:p-8 xl:p-10 2xl:p-12">
      <div className="flex items-start justify-between gap-2 md:gap-4">
        <div>
          <div className="text-sm font-bold text-neutral-900 md:text-base lg:text-lg">
            {item.name}
          </div>
        </div>
        <div className="text-primary text-sm font-bold md:text-base lg:text-lg">
          {formatCurrency(item.total)}
        </div>
      </div>
      <div className="flex w-full items-center justify-end gap-6 md:gap-8">
        <div className="mt-1 flex items-center gap-2 md:gap-3">
          <p className="flex items-center gap-1 text-sm font-bold text-teal-400 hover:underline md:text-base">
            <PencilIcon size={16} /> editar
          </p>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          {item.quantity === 1 ? (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onRemove(item.id)}
              className="text-teal-400"
            >
              <Trash2Icon size={24} />
            </Button>
          ) : (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onDecrement(item.id)}
              className="text-teal-400"
            >
              <MinusCircleIcon size={24} />
            </Button>
          )}
          <span className="text-sm font-bold text-neutral-700 md:text-base">
            {item.quantity}
          </span>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => onIncrement(item.id)}
            className="text-teal-400"
          >
            <PlusCircleIcon size={24} />
          </Button>
        </div>
      </div>
      <ProductDetail item={item} restaurant={restaurant} />
    </li>
  );
}

export default CartItem;
