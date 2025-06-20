import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem } from "@/components/ui/form";
import { formatCurrency } from "@/lib/format-currency";
import SectionHeader from "./section-header";

interface ExtrasSectionProps {
  extras: Extra[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
}

function ProductExtraSection({ extras, field }: ExtrasSectionProps) {
  return (
    <section className="px-4">
      <SectionHeader
        title="mais alguma coisa?"
        choiceLabel="escolha até 2"
        required={false}
      />
      <div className="mt-4 flex flex-col gap-4">
        {extras.map((extra) => (
          <FormItem key={extra.id} className="flex flex-row items-center gap-2">
            <FormControl>
              <Checkbox
                checked={field.value?.includes(extra.id)}
                className="border-neutral-400"
                onCheckedChange={(checked) => {
                  const newValue = field.value || [];
                  if (checked) {
                    if (newValue.length < 2) {
                      field.onChange([...newValue, extra.id]);
                    }
                  } else {
                    field.onChange(
                      newValue.filter((id: string) => id !== extra.id),
                    );
                  }
                }}
                disabled={
                  !field.value?.includes(extra.id) &&
                  (field.value?.length ?? 0) >= 2
                }
              />
            </FormControl>
            <div className="flex w-full items-center justify-between">
              <span className="text-sm text-neutral-500 lowercase">
                {extra.name}
              </span>
              <span className="text-primary text-sm font-bold">
                {extra.price > 0 ? formatCurrency(extra.price) : null}
              </span>
            </div>
          </FormItem>
        ))}
      </div>
    </section>
  );
}

export default ProductExtraSection;
