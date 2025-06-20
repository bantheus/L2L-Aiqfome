import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/format-currency";
import { PlusCircle, Trash2 } from "lucide-react";
import { useState } from "react";

interface ProductSummaryBarProps {
  total: number;
  isValid: boolean;
  isSubmitting: boolean;
}

function ProductSummary({
  total,
  isValid,
  isSubmitting,
}: ProductSummaryBarProps) {
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    setAdded(true);
    setQuantity(1);
  };

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleRemove = () => {
    if (quantity === 1) {
      setAdded(false);
    } else {
      setQuantity((q) => q - 1);
    }
  };

  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex flex-col gap-1.5">
        <span className="font-bold text-neutral-700">quantos?</span>
        <span className="text-sm text-neutral-500">
          total:{" "}
          <span className="text-sm font-bold text-neutral-700">
            {formatCurrency(total)}
          </span>
        </span>
      </div>
      {!added ? (
        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="bg-neutral-500"
          onClick={handleAdd}
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
