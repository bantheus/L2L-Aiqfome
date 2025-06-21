import RestaurantItem from "./restaurant-item";

interface RestaurantListProps {
  title: string;
  restaurants: Restaurant[];
}

function RestaurantList({ title, restaurants }: RestaurantListProps) {
  if (restaurants.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-primary text-xl font-extrabold">{title}</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {restaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default RestaurantList;
