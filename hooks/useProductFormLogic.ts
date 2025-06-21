import {
  productSchema,
  type ProductFormValues,
} from "@/app/restaurantes/[id]/produtos/[produtoId]/schemas/product-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";

export function useProductFormLogic(dish: Dish, drinks: Dish[]) {
  const defaultSize = dish.sizes[0]?.name ?? "";
  const defaultCutlery = dish.cutlery[0]?.id ?? "";

  const initialDrinkQuantities = useMemo(
    () => Object.fromEntries(drinks.map((drink) => [drink.id, 0])),
    [drinks],
  );
  const [drinkQuantities, setDrinkQuantities] = useState<
    Record<string, number>
  >(initialDrinkQuantities);

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    mode: "onChange",
    defaultValues: {
      size: defaultSize,
      accompaniments: [],
      extras: [],
      cutlery: defaultCutlery,
      drinks: {},
      observation: "",
    },
    shouldUnregister: true,
  });

  const rawAccompaniments = useWatch({
    control: form.control,
    name: "accompaniments",
  });
  const selectedAccompaniments = useMemo(
    () => rawAccompaniments || [],
    [rawAccompaniments],
  );
  const rawExtras = useWatch({ control: form.control, name: "extras" });
  const selectedExtras = useMemo(() => rawExtras || [], [rawExtras]);
  const selectedSize = useWatch({ control: form.control, name: "size" });
  const selectedCutlery = useWatch({ control: form.control, name: "cutlery" });

  const handleDrinkChange = useCallback(
    (id: string, delta: number) => {
      setDrinkQuantities((prev) => {
        const nextQty = Math.max(0, (prev[id] || 0) + delta);
        const next = { ...prev, [id]: nextQty };
        form.setValue("drinks", next, { shouldValidate: true });
        return next;
      });
    },
    [form],
  );

  const sizeObj = useMemo(
    () => dish.sizes.find((s) => s.name === selectedSize),
    [dish.sizes, selectedSize],
  );
  const basePrice = sizeObj?.promoPrice ?? sizeObj?.price ?? 0;

  const accompanimentsTotal = useMemo(
    () =>
      dish.accompaniments
        .filter((acc) => selectedAccompaniments.includes(acc.id))
        .reduce((sum, acc) => sum + (acc.price || 0), 0),
    [dish.accompaniments, selectedAccompaniments],
  );

  const extrasTotal = useMemo(
    () =>
      dish.extras
        .filter((extra) => selectedExtras.includes(extra.id))
        .reduce((sum, extra) => sum + (extra.price || 0), 0),
    [dish.extras, selectedExtras],
  );

  const cutleryTotal = useMemo(() => {
    const cutlery = dish.cutlery.find((c) => c.id === selectedCutlery);
    return cutlery?.price || 0;
  }, [dish.cutlery, selectedCutlery]);

  const drinksTotal = useMemo(
    () =>
      drinks.reduce((sum, drink) => {
        const price = drink.sizes[0]?.promoPrice ?? drink.sizes[0]?.price ?? 0;
        const qty = drinkQuantities[drink.id] || 0;
        return sum + price * qty;
      }, 0),
    [drinks, drinkQuantities],
  );

  const total = useMemo(
    () =>
      basePrice +
      accompanimentsTotal +
      extrasTotal +
      cutleryTotal +
      drinksTotal,
    [basePrice, accompanimentsTotal, extrasTotal, cutleryTotal, drinksTotal],
  );

  return {
    form,
    drinkQuantities,
    handleDrinkChange,
    total,
    selectedSize,
    selectedCutlery,
    selectedAccompaniments,
    selectedExtras,
    basePrice,
    accompanimentsTotal,
    extrasTotal,
    cutleryTotal,
    drinksTotal,
  };
}
