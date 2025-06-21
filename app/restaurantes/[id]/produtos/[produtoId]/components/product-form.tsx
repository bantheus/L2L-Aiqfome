"use client";

import Separator from "@/components/separator";
import { Form, FormField } from "@/components/ui/form";
import { useProductFormLogic } from "@/hooks/useProductFormLogic";
import { useCartStore, type CartItemDetails } from "@/store/cart-store";
import { useState } from "react";
import ProductAccompanimentsSection from "./product-accompaniment-section";
import ProductCutlerySection from "./product-cutlery-section";
import ProductDrinkSection from "./product-drink-section";
import ProductExtraSection from "./product-extra-section";
import ProductHeader from "./product-header";
import ProductObservationSection from "./product-observation-section";
import ProductSizeSection from "./product-size-sectiont";
import ProductSummary from "./product-summary";

type ProdutoFormProps = {
  dish: Dish;
  drinks: Dish[];
  isDrink?: boolean;
  restaurantId: string;
};

function ProdutoForm({
  dish,
  drinks,
  isDrink,
  restaurantId,
}: ProdutoFormProps) {
  const { form, drinkQuantities, handleDrinkChange, total } =
    useProductFormLogic(dish, drinks);
  const addItem = useCartStore((s) => s.addItem);
  const increment = useCartStore((s) => s.increment);
  const decrement = useCartStore((s) => s.decrement);

  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  function getCartItemId(dish: Dish, values: CartItemDetails) {
    const size = values.size || "";
    const extras = (values.extras || []).sort().join("-");
    const accompaniments = (values.accompaniments || []).sort().join("-");
    return [dish.id, size, extras, accompaniments].filter(Boolean).join("|");
  }

  function onSubmit(values: CartItemDetails) {
    const cartItemId = getCartItemId(dish, values);
    addItem({
      id: cartItemId,
      name: dish.name,
      imageUrl: dish.imageUrl,
      quantity,
      total: total * quantity,
      details: values,
      restaurantId,
    });
    setAdded(true);
  }

  return (
    <main className="mx-auto flex max-w-lg flex-col gap-4 p-0 md:max-w-3xl md:gap-8 md:px-6 md:py-10 lg:max-w-4xl xl:max-w-5xl">
      {/* Header */}
      <ProductHeader
        imageUrl={dish.imageUrl}
        name={dish.name}
        description={dish.description}
        sizes={dish.sizes}
      />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 md:gap-8"
        >
          {/* Resumo */}
          <div className="md:rounded-2xl md:border md:border-neutral-100 md:bg-neutral-50 md:p-6 md:shadow-sm">
            <ProductSummary
              total={total}
              isValid={form.formState.isValid}
              isSubmitting={form.formState.isSubmitting}
              quantity={quantity}
              setQuantity={setQuantity}
              added={added}
              setAdded={setAdded}
              onIncrement={() => increment(dish.id)}
              onDecrement={() => decrement(dish.id)}
            />
          </div>

          <div className="md:hidden">
            <Separator />
          </div>

          {/* Tamanho */}
          {dish.sizes.length > 1 && (
            <div className="md:rounded-2xl md:border md:border-neutral-100 md:bg-white md:p-6 md:shadow-sm">
              <FormField
                control={form.control}
                name="size"
                render={({ field }) => (
                  <ProductSizeSection sizes={dish.sizes} field={field} />
                )}
              />
            </div>
          )}

          {dish.sizes.length > 1 && (
            <div className="md:hidden">
              <Separator />
            </div>
          )}

          {/* Acompanhamentos */}
          {dish.accompaniments.length > 0 && (
            <div className="md:rounded-2xl md:border md:border-neutral-100 md:bg-white md:p-6 md:shadow-sm">
              <FormField
                control={form.control}
                name="accompaniments"
                render={({ field }) => (
                  <ProductAccompanimentsSection
                    accompaniments={dish.accompaniments}
                    field={field}
                  />
                )}
              />
            </div>
          )}

          {dish.accompaniments.length > 0 && (
            <div className="md:hidden">
              <Separator />
            </div>
          )}

          {/* Bebidas */}
          {!isDrink && drinks.length > 0 && (
            <div className="md:rounded-2xl md:border md:border-neutral-100 md:bg-white md:p-6 md:shadow-sm">
              <ProductDrinkSection
                drinks={drinks}
                drinkQuantities={drinkQuantities}
                onDrinkChange={handleDrinkChange}
              />
            </div>
          )}

          {!isDrink && drinks.length > 0 && (
            <div className="md:hidden">
              <Separator />
            </div>
          )}

          {/* Talheres */}
          {dish.cutlery.length > 0 && (
            <div className="md:rounded-2xl md:border md:border-neutral-100 md:bg-white md:p-6 md:shadow-sm">
              <FormField
                control={form.control}
                name="cutlery"
                render={({ field }) => (
                  <ProductCutlerySection
                    cutleryList={dish.cutlery}
                    field={field}
                  />
                )}
              />
            </div>
          )}

          {dish.cutlery.length > 0 && (
            <div className="md:hidden">
              <Separator />
            </div>
          )}

          {/* Extras */}
          {dish.extras.length > 0 && (
            <div className="md:rounded-2xl md:border md:border-neutral-100 md:bg-white md:p-6 md:shadow-sm">
              <FormField
                control={form.control}
                name="extras"
                render={({ field }) => (
                  <ProductExtraSection extras={dish.extras} field={field} />
                )}
              />
            </div>
          )}

          {dish.extras.length > 0 && (
            <div className="md:hidden">
              <Separator />
            </div>
          )}

          {/* Observações */}
          <div className="md:rounded-2xl md:border md:border-neutral-100 md:bg-white md:p-6 md:shadow-sm">
            <FormField
              control={form.control}
              name="observation"
              render={({ field }) => (
                <ProductObservationSection field={field} />
              )}
            />
          </div>
        </form>
      </Form>
    </main>
  );
}

export default ProdutoForm;
