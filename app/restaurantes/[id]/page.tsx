import NotFound from "@/components/not-found";
import { getRestaurantById } from "@/mock/mock";
import RestaurantInfos from "./components/restaurant-infos";
import RestaurantMenu from "./components/restaurant-menu";
import RestaurantTitle from "./components/restaurant-title";

export default async function RestaurantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
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
