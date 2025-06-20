import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formatCurrency } from "@/lib/format-currency";
import { CircleDollarSignIcon } from "lucide-react";
import SectionHeader from "./section-header";

interface SizeSectionProps {
  sizes: { name: string; price: number; promoPrice?: number }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
}

function ProductSizeSection({ sizes, field }: SizeSectionProps) {
  return (
    <section className="px-4">
      <SectionHeader title="qual o tamanho?" choiceLabel="escolha 1" required />
      <RadioGroup
        value={field.value}
        onValueChange={field.onChange}
        className="mt-4 flex flex-col gap-3"
      >
        {sizes.map((size) => {
          const isPromo = !!size.promoPrice;
          const isSelected = field.value === size.name;
          return (
            <Label
              key={size.name}
              className="flex cursor-pointer items-center gap-2"
            >
              <RadioGroupItem value={size.name} className="peer sr-only" />
              <span className="flex items-center">
                <span
                  className={`mr-1 flex size-4 items-center justify-center rounded-full border ${
                    isSelected ? "border-primary" : "border-neutral-400"
                  }`}
                >
                  {isSelected && (
                    <span className="bg-primary size-3 rounded-full" />
                  )}
                </span>
              </span>
              {isPromo && (
                <CircleDollarSignIcon
                  size={16}
                  className="text-green-500"
                  aria-label="Promoção ativa"
                />
              )}
              <span
                className={`text-sm ${isSelected ? "text-neutral-500" : "text-neutral-400"} mr-2`}
              >
                {size.name}
              </span>
              <span className="ml-auto flex items-center gap-2">
                {isPromo ? (
                  <>
                    <span className="text-xs font-bold text-neutral-500">
                      de {formatCurrency(size.price)} por
                    </span>
                    <span className="text-sm font-bold text-green-500">
                      {formatCurrency(size.promoPrice!)}
                    </span>
                  </>
                ) : (
                  <span className="text-primary text-sm font-bold">
                    {formatCurrency(size.price)}
                  </span>
                )}
              </span>
            </Label>
          );
        })}
      </RadioGroup>
    </section>
  );
}

export default ProductSizeSection;
