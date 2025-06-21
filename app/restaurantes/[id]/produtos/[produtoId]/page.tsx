import NotFound from "@/components/not-found";
import { getRestaurantById } from "@/mock/mock";
import type { Metadata } from "next";
import Link from "next/link";
import ProdutoForm from "./components/product-form";

type Params = Promise<{ id: string; produtoId: string }>;

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const params = props.params;
  const { id } = await params;

  const { produtoId } = await params;
  const restaurantData = getRestaurantById(id);
  if (!restaurantData) {
    return {
      title: "Restaurante não encontrado",
      description: "O restaurante que você está procurando não existe.",
    };
  }
  const allCategories = restaurantData.categories;
  const allDishes = allCategories.flatMap((cat) => cat.dishes);
  const dish = allDishes.find((d) => d.id === produtoId);
  if (!dish) {
    return {
      title: "Produto não encontrado",
      description: "O produto que você está procurando não existe.",
    };
  }
  return {
    title: dish.name,
    description: `Detalhes do produto ${dish.name} do restaurante ${restaurantData.name}`,
    openGraph: {
      title: dish.name,
      description: `Detalhes do produto ${dish.name} do restaurante ${restaurantData.name}`,
      images: [
        {
          url: dish.imageUrl,
          alt: dish.name,
        },
      ],
    },
  };
}

async function ProdutoPage(props: { params: Params }) {
  const params = props.params;
  const id = (await params).id;
  const produtoId = (await params).produtoId;
  const restaurant = getRestaurantById(id);
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
  const dish = allDishes.find((d) => d.id === produtoId);
  if (!dish) {
    return (
      <div className="container mx-auto flex h-full items-center justify-center">
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
        restaurantId={id}
      />
      <div className="container mx-auto w-full p-4 md:flex md:justify-center md:p-6">
        <Link
          href="/carrinho"
          className="bg-primary hover:bg-primary/90 block w-full rounded-md py-3 text-center font-bold text-white md:max-w-xs md:rounded-xl md:text-lg md:shadow-md md:transition-colors md:duration-300"
        >
          ver ticket
        </Link>
      </div>
    </>
  );
}

export default ProdutoPage;
