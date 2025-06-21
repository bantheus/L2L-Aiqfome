import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/format-currency";

function CartFooter({ total }: { total: number }) {
  return (
    <div
      className="sticky bottom-0 left-0 flex w-full items-center justify-between gap-3 rounded-t-md bg-white px-4 py-4"
      style={{ boxShadow: "0 -8px 24px -8px rgba(0,0,0,0.12)" }}
    >
      <div className="flex flex-col">
        <span className="text-sm font-bold text-neutral-900">subtotal</span>
        <span className="text-primary text-xl font-extrabold">
          {formatCurrency(total)}
        </span>
      </div>
      <Button
        size="lg"
        className="bg-primary hover:bg-primary/90 py-3.5 text-sm font-bold text-white"
      >
        ir para pagamento
      </Button>
    </div>
  );
}

export default CartFooter;
