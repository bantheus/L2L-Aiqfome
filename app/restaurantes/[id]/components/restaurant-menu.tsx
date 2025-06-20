import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleDollarSignIcon } from "lucide-react";
import DishIcons from "./dish/dish-icons";
import DishPrice from "./dish/dish-price";

type RestaurantMenuProps = {
  categories: Category[];
};

function RestaurantMenu({ categories }: RestaurantMenuProps) {
  return (
    <Accordion type="multiple" className="mt-4 w-full">
      {categories.map((category) => {
        const hasPromo = category.dishes.some((dish) =>
          dish.sizes.some(
            (size) => size.promoPrice !== undefined && size.promoPrice !== null,
          ),
        );

        return (
          <AccordionItem key={category.id} value={category.id}>
            <AccordionTrigger>
              <div>
                <span className="flex items-center gap-2 text-base font-bold text-neutral-900">
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
                  <p className="text-xs font-semibold text-pretty text-neutral-500">
                    {category.description}
                  </p>
                )}
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <div className="flex flex-col gap-1">
                {category.dishes.map((dish) => (
                  <div
                    key={dish.id}
                    className="flex items-start justify-between rounded px-2 py-1 transition hover:bg-neutral-50"
                  >
                    <div className="flex flex-col">
                      <span className="inline-flex items-center gap-0.5 text-sm font-semibold text-pretty text-neutral-900">
                        {dish.name}
                        <DishIcons
                          isSpicy={dish.isSpicy}
                          isVegetarian={dish.isVegetarian}
                        />
                      </span>
                      {dish.description && (
                        <span className="line-clamp-2 text-xs text-neutral-500">
                          {dish.description}
                        </span>
                      )}
                    </div>
                    <div className="flex min-w-[90px] flex-col items-end">
                      <DishPrice sizes={dish.sizes} />
                    </div>
                  </div>
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
