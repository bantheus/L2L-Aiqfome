import { Badge } from "@/components/ui/badge";
import { FormLabel } from "@/components/ui/form";

interface SectionHeaderProps {
  title: string;
  choiceLabel?: string;
  required?: boolean;
}

function SectionHeader({ title, choiceLabel, required }: SectionHeaderProps) {
  return (
    <div className="mb-1 flex items-center justify-between md:mb-4 md:gap-4">
      <div className="flex flex-col gap-0.5 md:gap-1">
        <FormLabel className="font-bold text-neutral-900 md:text-lg md:leading-snug">
          {title}
        </FormLabel>
        {choiceLabel && (
          <span className="text-xs font-bold text-neutral-500 md:text-sm md:font-semibold md:text-neutral-600">
            {choiceLabel}
          </span>
        )}
      </div>
      {required && (
        <Badge className="rounded-sm bg-neutral-700 px-1 py-1.5 text-xs font-bold md:rounded-md md:px-3 md:py-2 md:text-sm md:font-semibold">
          obrigatório
        </Badge>
      )}
    </div>
  );
}

export default SectionHeader;
