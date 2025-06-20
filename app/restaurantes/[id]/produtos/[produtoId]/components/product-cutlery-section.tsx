import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formatCurrency } from "@/lib/format-currency";
import SectionHeader from "./section-header";

interface CutlerySectionProps {
  cutleryList: Cutlery[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
}

function ProductCutlerySection({ cutleryList, field }: CutlerySectionProps) {
  return (
    <section className="px-4">
      <SectionHeader
        title="precisa de talher?"
        choiceLabel="escolha até 1"
        required
      />
      <RadioGroup
        value={field.value}
        onValueChange={field.onChange}
        className="mt-4 flex flex-col gap-3"
      >
        {cutleryList.map((cutlery) => {
          const isSelected = field.value === cutlery.id;
          return (
            <Label
              key={cutlery.id}
              className="flex cursor-pointer items-center gap-2"
            >
              <RadioGroupItem value={cutlery.id} className="peer sr-only" />
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
              <span
                className={`text-sm lowercase ${isSelected ? "text-neutral-500" : "text-neutral-400"} mr-2`}
              >
                {cutlery.name}
              </span>
              <span className="text-primary ml-auto text-sm font-bold">
                {cutlery.price > 0 ? `+${formatCurrency(cutlery.price)}` : ""}
              </span>
            </Label>
          );
        })}
      </RadioGroup>
    </section>
  );
}

export default ProductCutlerySection;
