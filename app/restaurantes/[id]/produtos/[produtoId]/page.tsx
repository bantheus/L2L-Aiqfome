import NotFound from "@/components/not-found";
import { getRestaurantById } from "@/mock/mock";
import Link from "next/link";
import ProdutoForm from "./components/product-form";

type PageProps = {
  params: { id: string; produtoId: string };
};

function ProdutoPage({ params }: PageProps) {
  const restaurant = getRestaurantById(params.id);
  if (!restaurant) {
    return (
      <div className="flex h-full items-center justify-center">
        <NotFound
          resourceName="Restaurante"
          backButtonLabel="Voltar para o início"
          backButtonHref="/"
        />
      </div>
    );
  }

  const allCategories = restaurant.categories;
  const allDishes = allCategories.flatMap((cat) => cat.dishes);
  const dish = allDishes.find((d) => d.id === params.produtoId);
  if (!dish) {
    return (
      <div className="flex h-full items-center justify-center">
        <NotFound
          resourceName="Produto"
          backButtonLabel="Voltar para o início"
          backButtonHref="/"
        />
      </div>
    );
  }

  const drinksCategory = allCategories.find((cat) =>
    cat.name.toLowerCase().includes("bebida"),
  );
  const drinks = drinksCategory?.dishes ?? [];
  const isDrink = !!drinks.find((d) => d.id === dish.id);

  return (
    <>
      <ProdutoForm
        dish={dish}
        drinks={drinks}
        isDrink={isDrink}
        restaurantId={params.id}
      />
      <div className="w-full p-4">
        <Link
          href="/carrinho"
          className="bg-primary hover:bg-primary/90 block w-full rounded-md py-3 text-center font-bold text-white"
        >
          ver ticket
        </Link>
      </div>
    </>
  );
}

export default ProdutoPage;
