"use client";

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

  const showSeparator = !isDrink;

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
    <main className="mx-auto max-w-lg bg-white p-0">
      <ProductHeader
        imageUrl={dish.imageUrl}
        name={dish.name}
        description={dish.description}
        sizes={dish.sizes}
      />

      <Form {...form}>
        <form
          className="mt-6 flex flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
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

          {/* Tamanho */}
          {dish.sizes.length > 1 && (
            <>
              <div className="h-1 w-full bg-neutral-100" />
              <FormField
                control={form.control}
                name="size"
                render={({ field }) => (
                  <ProductSizeSection sizes={dish.sizes} field={field} />
                )}
              />
            </>
          )}

          {showSeparator && <div className="h-1 w-full bg-neutral-100" />}

          {/* Acompanhamentos */}
          {dish.accompaniments.length > 0 && (
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
          )}

          {showSeparator && <div className="h-1 w-full bg-neutral-100" />}

          {/* Bebidas */}
          {!isDrink && drinks.length > 0 && (
            <ProductDrinkSection
              drinks={drinks}
              drinkQuantities={drinkQuantities}
              onDrinkChange={handleDrinkChange}
            />
          )}

          {showSeparator && <div className="h-1 w-full bg-neutral-100" />}

          {/* Talheres */}
          {dish.cutlery.length > 0 && (
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
          )}

          {showSeparator && <div className="h-1 w-full bg-neutral-100" />}

          {/* Extras */}
          {dish.extras.length > 0 && (
            <FormField
              control={form.control}
              name="extras"
              render={({ field }) => (
                <ProductExtraSection extras={dish.extras} field={field} />
              )}
            />
          )}

          {showSeparator && <div className="h-1 w-full bg-neutral-100" />}

          {/* Observações */}
          <FormField
            control={form.control}
            name="observation"
            render={({ field }) => <ProductObservationSection field={field} />}
          />
        </form>
      </Form>
    </main>
  );
}

export default ProdutoForm;
