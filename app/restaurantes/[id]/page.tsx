import NotFound from "@/components/not-found";
import { getRestaurantById } from "@/mock/mock";
import type { Metadata } from "next";
import RestaurantInfos from "./components/restaurant-infos";
import RestaurantMenu from "./components/restaurant-menu";
import RestaurantTitle from "./components/restaurant-title";

type Params = Promise<{ id: string }>;

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const params = props.params;
  const { id } = await params;
  const restaurantData = getRestaurantById(id);

  if (!restaurantData) {
    return {
      title: "Restaurante não encontrado",
      description: "O restaurante que você está procurando não existe.",
    };
  }

  return {
    title: restaurantData.name,
    description: `Cardápio do restaurante ${restaurantData.name}`,
    openGraph: {
      title: restaurantData.name,
      description: `Cardápio do restaurante ${restaurantData.name}`,
      images: [
        {
          url: restaurantData.logoUrl,
          alt: restaurantData.name,
        },
      ],
    },
  };
}

export default async function RestaurantPage(props: { params: Params }) {
  const params = props.params;
  const id = (await params).id;
  const restaurantData = getRestaurantById(id);

  if (!restaurantData) {
    return (
      <div className="container mx-auto flex h-full items-center justify-center">
        <NotFound
          resourceName="Restaurante"
          backButtonLabel="Voltar para o início"
          backButtonHref="/"
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto flex flex-col gap-1.5 p-4">
      <RestaurantTitle restaurantData={restaurantData} />
      <RestaurantInfos restaurantData={restaurantData} />

      <RestaurantMenu
        categories={restaurantData.categories}
        restaurantId={restaurantData.id}
      />
    </div>
  );
}
