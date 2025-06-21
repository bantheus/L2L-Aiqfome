import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/format-currency";
import { PlusCircle, Trash2 } from "lucide-react";

interface ProductSummaryBarProps {
  total: number;
  isValid: boolean;
  isSubmitting: boolean;
  quantity: number;
  setQuantity: (q: number) => void;
  added: boolean;
  setAdded: (a: boolean) => void;
  onIncrement: () => void;
  onDecrement: () => void;
}

function ProductSummary({
  total,
  isValid,
  isSubmitting,
  quantity,
  setQuantity,
  added,
  setAdded,
  onIncrement,
  onDecrement,
}: ProductSummaryBarProps) {
  const handleIncrement = () => {
    setQuantity(quantity + 1);
    onIncrement();
  };
  const handleRemove = () => {
    if (quantity === 1) {
      setAdded(false);
      onDecrement();
    } else {
      setQuantity(quantity - 1);
      onDecrement();
    }
  };

  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex flex-col gap-1.5">
        <span className="font-bold text-neutral-700">quantos?</span>
        <span className="text-sm text-neutral-500">
          total:{" "}
          <span className="text-sm font-bold text-neutral-700">
            {formatCurrency(total * quantity)}
          </span>
        </span>
      </div>
      {!added ? (
        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="bg-neutral-500"
        >
          adicionar
        </Button>
      ) : (
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleRemove}
            className="text-teal-400"
            style={{ border: "none", background: "none" }}
          >
            <Trash2 size={26} />
          </button>
          <span className="font-bold text-neutral-700">{quantity}</span>
          <button type="button" onClick={handleIncrement}>
            <PlusCircle size={26} className="text-teal-400" />
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductSummary;
