import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleDollarSignIcon } from "lucide-react";
import Link from "next/link";
import DishIcons from "./dish/dish-icons";
import DishPrice from "./dish/dish-price";

type RestaurantMenuProps = {
  categories: Category[];
  restaurantId: string;
};

function RestaurantMenu({ categories, restaurantId }: RestaurantMenuProps) {
  return (
    <Accordion type="multiple" className="mt-4 w-full md:mt-6 lg:mt-8 xl:mt-10">
      {categories.map((category) => {
        const hasPromo = category.dishes.some((dish) =>
          dish.sizes.some(
            (size) => size.promoPrice !== undefined && size.promoPrice !== null,
          ),
        );

        return (
          <AccordionItem key={category.id} value={category.id}>
            <AccordionTrigger>
              <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2">
                <span className="flex items-center gap-2 text-base font-bold text-neutral-900 md:text-lg lg:text-xl">
                  {category.name}
                  {hasPromo && (
                    <CircleDollarSignIcon
                      size={18}
                      className="text-green-500"
                      aria-label="Categoria com promoções"
                    />
                  )}
                </span>

                {category.description && (
                  <p className="text-xs font-semibold text-pretty text-neutral-500 md:text-sm lg:text-base">
                    {category.description}
                  </p>
                )}
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2">
                {category.dishes.map((dish) => (
                  <Link
                    key={dish.id}
                    href={`/restaurantes/${restaurantId}/produtos/${dish.id}`}
                    className="flex items-start justify-between rounded px-2 py-1 text-start transition hover:bg-neutral-50 md:px-3 md:py-2 lg:px-4 lg:py-3"
                  >
                    <div className="flex flex-col gap-0.5 md:gap-1">
                      <span className="inline-flex items-center gap-0.5 text-sm font-semibold text-pretty text-neutral-900 md:text-base">
                        {dish.name}
                        <DishIcons
                          isSpicy={dish.isSpicy}
                          isVegetarian={dish.isVegetarian}
                        />
                      </span>

                      {dish.description && (
                        <span className="line-clamp-2 text-xs text-neutral-500 md:text-sm">
                          {dish.description}
                        </span>
                      )}
                    </div>

                    <div className="flex min-w-[90px] flex-col items-end md:min-w-[110px] lg:min-w-[130px]">
                      <DishPrice sizes={dish.sizes} />
                    </div>
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export default RestaurantMenu;
