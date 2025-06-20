"use client";

import { Form, FormField } from "@/components/ui/form";
import { useProductFormLogic } from "@/hooks/useProductFormLogic";
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
};

function ProdutoForm({ dish, drinks, isDrink }: ProdutoFormProps) {
  const { form, drinkQuantities, handleDrinkChange, total } =
    useProductFormLogic(dish, drinks);

  const showSeparator = !isDrink;

  function onSubmit() {
    alert("Produto adicionado ao pedido!\n");
  }

  return (
    <main className="mx-auto max-w-lg bg-white p-0">
      <ProductHeader
        imageUrl={dish.imageUrl}
        name={dish.name}
        description={dish.description}
        sizes={dish.sizes}
      />

      <ProductSummary
        total={total}
        isValid={form.formState.isValid}
        isSubmitting={form.formState.isSubmitting}
      />

      <Form {...form}>
        <form
          className="mt-6 flex flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
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
