import Image from "next/image";
import Link from "next/link";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

function RestaurantItem({ restaurant }: RestaurantItemProps) {
  return (
    <Link
      href={`/restaurantes/${restaurant.id}`}
      prefetch={false}
      aria-label={`Ir para o restaurante ${restaurant.name}`}
      className={`flex min-h-[72px] w-full items-stretch ${restaurant.isOpen ? "" : "opacity-60"}`}
    >
      <div className="relative min-h-[72px] min-w-[72px]">
        <Image
          src={restaurant.logoUrl}
          alt={`Imagem do restaurante ${restaurant.name}`}
          fill
          className="rounded-l-md object-cover"
        />
      </div>
      <div className="bg-muted h-full w-full rounded-r-md p-3">
        <h3 className="text-secondary-foreground line-clamp-1 font-bold">
          {restaurant.name}
        </h3>

        <div className="mt-1 flex items-center gap-2">
          {/* Restaurant delivery fee */}
          <div className="text-muted-foreground flex gap-3 text-xs">
            <div className="flex items-center gap-0.5">
              {restaurant.deliveryFee === 0 ? (
                <>
                  <Image
                    src="/icons/free-delivery-icon.svg"
                    alt="Ícone de entrega grátis"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  <span className="text-accent-foreground text-sm font-bold">
                    grátis
                  </span>
                </>
              ) : (
                <>
                  <Image
                    src="/icons/paid-delivery-icon.svg"
                    alt="Ícone de custo de entrega"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  <span className="text-primary text-sm font-bold">
                    {`R$ ${restaurant.deliveryFee?.toFixed(2).replace(".", ",")}`}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Restaurant rating */}
          <div className="flex items-center gap-0.5">
            <Image
              src="/icons/star-icon.svg"
              alt="Ícone de estrela (avaliações)"
              width={18}
              height={18}
              className="object-contain"
            />
            <span className="text-muted-foreground text-sm font-bold">
              {restaurant.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RestaurantItem;
