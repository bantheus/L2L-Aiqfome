import { formatCurrency } from "@/lib/format-currency";
import SectionHeader from "./section-header";

type Drink = {
  id: string;
  name: string;
  sizes: { price: number; promoPrice?: number }[];
};

interface DrinksSectionProps {
  drinks: Drink[];
  drinkQuantities: { [id: string]: number };
  onDrinkChange: (id: string, delta: number) => void;
}

function ProductDrinkSection({
  drinks,
  drinkQuantities,
  onDrinkChange,
}: DrinksSectionProps) {
  return (
    <section className="px-4">
      <SectionHeader
        title="vai querer bebida?"
        choiceLabel="escolha quantos quiser"
        required={false}
      />
      <div className="mt-4 flex flex-col gap-4">
        {drinks.map((drink) => (
          <div key={drink.id} className="flex items-center gap-2">
            <button
              type="button"
              className="flex size-6 items-center justify-center rounded-full bg-neutral-100 text-lg font-bold text-neutral-400"
              onClick={() => onDrinkChange(drink.id, -1)}
              disabled={drinkQuantities[drink.id] === 0}
            >
              –
            </button>
            <span className="w-4 text-center text-sm font-bold text-neutral-700">
              {drinkQuantities[drink.id] || 0}
            </span>
            <button
              type="button"
              className="flex size-6 items-center justify-center rounded-full border border-teal-400 text-lg font-bold text-teal-400"
              onClick={() => onDrinkChange(drink.id, 1)}
            >
              +
            </button>
            <span className="ml-1 text-sm font-semibold text-neutral-500 lowercase">
              {drink.name}
            </span>
            <span className="text-primary ml-auto text-sm font-bold">
              +
              {formatCurrency(
                drink.sizes[0].promoPrice ?? drink.sizes[0].price,
              )}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductDrinkSection;
