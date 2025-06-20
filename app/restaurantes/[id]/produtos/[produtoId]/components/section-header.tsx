import { Badge } from "@/components/ui/badge";
import { FormLabel } from "@/components/ui/form";

interface SectionHeaderProps {
  title: string;
  choiceLabel?: string;
  required?: boolean;
}

function SectionHeader({ title, choiceLabel, required }: SectionHeaderProps) {
  return (
    <div className="mb-1 flex items-center justify-between">
      <div className="flex flex-col gap-0.5">
        <FormLabel className="font-bold text-neutral-900">{title}</FormLabel>
        {choiceLabel && (
          <span className="text-xs font-bold text-neutral-500">
            {choiceLabel}
          </span>
        )}
      </div>
      {required && (
        <Badge className="rounded-sm bg-neutral-700 px-1 py-1.5 text-xs font-bold">
          obrigatório
        </Badge>
      )}
    </div>
  );
}

export default SectionHeader;
