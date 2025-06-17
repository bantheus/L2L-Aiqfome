import PromotionalBanner from "@/components/banners/promotional-banner";
import RestaurantList from "@/components/restaurant/restaurant-list";
import SearchInput from "@/components/search/search-input";
import { getPromotionalBannerData } from "@/mock/promotional-banner";
import { getRestaurantData } from "@/mock/restaurant";

export default function Home() {
  const bannerData = getPromotionalBannerData();
  const allRestaurants = getRestaurantData();
  const openRestaurants = allRestaurants.filter((r) => r.isOpen);
  const closedRestaurants = allRestaurants.filter((r) => !r.isOpen);

  return (
    <>
      <SearchInput />
      <div className="mt-px">
        <PromotionalBanner
          imageSrc={bannerData.imageSrc}
          altText={bannerData.altText}
        />
      </div>

      <div className="mt-6">
        <RestaurantList title="abertos" restaurants={openRestaurants} />
      </div>

      <div className="mt-6">
        <RestaurantList title="fechados" restaurants={closedRestaurants} />
      </div>
    </>
  );
}
