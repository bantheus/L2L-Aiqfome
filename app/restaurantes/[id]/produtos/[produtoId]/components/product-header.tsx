import { formatCurrency } from "@/lib/format-currency";
import { getLowestPrice } from "@/lib/get-lowest-price";
import { XIcon } from "lucide-react";
import Image from "next/image";

interface ProductImageHeaderProps {
  imageUrl: string;
  name: string;
  description?: string;
  sizes: { price: number; promoPrice?: number }[];
  showLowestPrice?: boolean;
}

function ProductHeader({
  imageUrl,
  name,
  description,
  sizes,
  showLowestPrice = true,
}: ProductImageHeaderProps) {
  return (
    <div className="flex flex-col items-center md:items-start md:rounded-2xl md:border md:border-neutral-100 md:bg-white md:p-6 md:shadow-sm">
      <div className="relative h-48 w-full md:h-64 md:overflow-hidden md:rounded-2xl md:shadow-md">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-2 right-2 cursor-pointer rounded-full bg-white p-0.5 shadow-md md:shadow-sm">
          <XIcon
            className="size-5"
            onClick={() => window.history.back()}
            aria-label="Fechar"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 p-4 md:p-0 md:pt-4">
        <h2 className="text-xl font-bold text-balance text-neutral-700 md:text-2xl">
          {name}
        </h2>

        {showLowestPrice && sizes.length > 1 && (
          <p className="text-sm font-extrabold text-neutral-500 md:text-base">
            a partir de{" "}
            <span className="text-primary text-lg md:text-xl">
              {formatCurrency(getLowestPrice(sizes))}
            </span>
          </p>
        )}

        {description && (
          <p className="text-sm/tight font-semibold text-neutral-500 md:text-base md:leading-snug">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductHeader;
