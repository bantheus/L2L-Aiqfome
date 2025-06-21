import { formatCurrency } from "@/lib/format-currency";
import type { CartItemDetails } from "@/store/cart-store";

type ProductDetailProps = {
  item: {
    details: CartItemDetails;
    quantity: number;
    total: number;
    name: string;
    id: string;
  };
  restaurant: Restaurant;
};

function ProductDetail({ item, restaurant }: ProductDetailProps) {
  const allAccompaniments: Accompaniment[] =
    restaurant?.categories.flatMap((cat: Category) =>
      cat.dishes.flatMap((dish: Dish) => dish.accompaniments || []),
    ) || [];
  const allExtras: Extra[] =
    restaurant?.categories.flatMap((cat: Category) =>
      cat.dishes.flatMap((dish: Dish) => dish.extras || []),
    ) || [];
  const allDrinks: Dish[] =
    restaurant?.categories
      .filter((cat: Category) => cat.name.toLowerCase().includes("bebida"))
      .flatMap((cat: Category) => cat.dishes) || [];

  return (
    <div className="text-muted-foreground mt-1 flex flex-col gap-1 text-xs md:mt-2 md:gap-2 md:text-sm lg:mt-3 lg:gap-3 lg:text-base xl:mt-4 xl:gap-4 xl:text-lg">
      {item.details.size && (
        <div className="flex flex-col gap-1 md:gap-2">
          <span className="font-bold">• tamanho</span>
          <span className="ml-2 font-semibold">{item.details.size}</span>
        </div>
      )}
      {item.details.accompaniments &&
        item.details.accompaniments.length > 0 && (
          <div className="flex flex-col gap-1 md:gap-2">
            <span className="font-bold">• acompanhamentos</span>
            {item.details.accompaniments.map((aId: string) => {
              const acc = allAccompaniments.find((acc) => acc.id === aId);
              return (
                <div
                  key={aId}
                  className="flex items-center justify-between gap-3 md:gap-4"
                >
                  {acc ? (
                    <>
                      <span className="ml-2 lowercase">{acc.name}</span>
                      {acc.price > 0 && (
                        <span className="font-bold text-teal-500">
                          {" "}
                          +{formatCurrency(acc.price)}
                        </span>
                      )}
                    </>
                  ) : (
                    aId
                  )}
                </div>
              );
            })}
          </div>
        )}
      {item.details.extras && item.details.extras.length > 0 && (
        <div className="flex flex-col gap-1 md:gap-2">
          <span className="font-bold">• mais alguma coisa?</span>
          {item.details.extras.map((eId: string) => {
            const extra = allExtras.find((ex) => ex.id === eId);
            return (
              <div
                key={eId}
                className="flex items-center justify-between gap-3 md:gap-4"
              >
                {extra ? (
                  <>
                    <span className="ml-2 lowercase">{extra.name}</span>
                    {extra.price > 0 && (
                      <span className="font-bold text-teal-500">
                        {" "}
                        +{formatCurrency(extra.price)}
                      </span>
                    )}
                  </>
                ) : (
                  eId
                )}
              </div>
            );
          })}
        </div>
      )}
      {item.details.drinks && Object.keys(item.details.drinks).length > 0 && (
        <div className="flex flex-col gap-1 md:gap-2">
          <span className="font-bold">• bebidas</span>
          {Object.entries(item.details.drinks).map(([drinkId, qty]) => {
            const drink = allDrinks.find((d) => d.id === drinkId);
            const drinkPrice = drink?.sizes?.[0]?.price ?? 0;
            return qty > 0 && drink ? (
              <div
                key={drinkId}
                className="flex items-center justify-between gap-3 md:gap-4"
              >
                <span className="ml-2 lowercase">
                  {drink.name} {qty > 1 ? `x${qty}` : ""}
                </span>
                {drinkPrice > 0 && (
                  <span className="font-bold text-teal-500">
                    +{formatCurrency(drinkPrice * Number(qty))}
                  </span>
                )}
              </div>
            ) : null;
          })}
        </div>
      )}
      {item.details.observation && (
        <div className="mt-1 rounded bg-neutral-50 p-1.5 text-xs text-neutral-700 md:mt-2 md:p-2 md:text-sm lg:mt-3 lg:p-3 lg:text-base">
          <span className="font-bold">observação:</span>{" "}
          <span className="font-semibold">{item.details.observation}</span>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
