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
    <div className="p-4">
      <h2 className="text-primary text-xl font-extrabold">{title}</h2>
      <div className="mt-4 flex flex-col gap-4">
        {restaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default RestaurantList;
