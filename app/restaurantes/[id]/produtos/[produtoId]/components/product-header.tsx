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
    <div className="flex flex-col items-center">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-2 right-2 cursor-pointer rounded-full bg-white p-0.5 shadow-md">
          <XIcon
            className="size-5"
            onClick={() => window.history.back()}
            aria-label="Fechar"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5 p-4">
        <h2 className="text-xl font-bold text-balance text-neutral-700">
          {name}
        </h2>
        {showLowestPrice && sizes.length > 1 && (
          <p className="text-sm font-extrabold text-neutral-500">
            a partir de{" "}
            <span className="text-primary text-lg">
              {formatCurrency(getLowestPrice(sizes))}
            </span>
          </p>
        )}
        {description && (
          <p className="text-sm/tight font-semibold text-neutral-500">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductHeader;
