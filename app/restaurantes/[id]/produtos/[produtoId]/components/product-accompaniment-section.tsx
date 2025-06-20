import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem } from "@/components/ui/form";
import { formatCurrency } from "@/lib/format-currency";
import SectionHeader from "./section-header";

interface ProductAccompanimentSectionProps {
  accompaniments: Accompaniment[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
}

function ProductAccompanimentsSection({
  accompaniments,
  field,
}: ProductAccompanimentSectionProps) {
  return (
    <section className="px-4">
      <SectionHeader
        title="acompanhamentos"
        choiceLabel="escolha de 1 a 2"
        required
      />
      <div className="mt-4 flex flex-col gap-4">
        {accompaniments.map((acc) => (
          <FormItem key={acc.id} className="flex flex-row items-center gap-2">
            <FormControl>
              <Checkbox
                checked={field.value?.includes(acc.id)}
                className="border-neutral-400"
                onCheckedChange={(checked) => {
                  const newValue = field.value || [];
                  if (checked) {
                    if (newValue.length < 2) {
                      field.onChange([...newValue, acc.id]);
                    }
                  } else {
                    field.onChange(
                      newValue.filter((id: string) => id !== acc.id),
                    );
                  }
                }}
                disabled={
                  !field.value?.includes(acc.id) &&
                  (field.value?.length ?? 0) >= 2
                }
              />
            </FormControl>
            <div className="flex w-full items-center justify-between">
              <span className="text-sm text-neutral-500 lowercase">
                {acc.name}
              </span>
              <span className="text-primary text-sm font-bold">
                {acc.price > 0 ? formatCurrency(acc.price) : null}
              </span>
            </div>
          </FormItem>
        ))}
      </div>
    </section>
  );
}

export default ProductAccompanimentsSection;
