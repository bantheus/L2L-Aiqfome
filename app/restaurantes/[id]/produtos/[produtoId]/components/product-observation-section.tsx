import { FormControl, FormItem } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

interface ObservationSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
}

function ProductObservationSection({ field }: ObservationSectionProps) {
  return (
    <section className="pb-16 md:pb-0">
      <FormItem className="px-4">
        <FormControl>
          <Textarea
            className="mt-1 resize-none rounded-sm border-neutral-400 text-sm placeholder:text-sm placeholder:text-neutral-500"
            placeholder="alguma observação do item? • opcional ex: tirar algum ingrediente, ponto do prato"
            maxLength={200}
            {...field}
          />
        </FormControl>
      </FormItem>
    </section>
  );
}

export default ProductObservationSection;
