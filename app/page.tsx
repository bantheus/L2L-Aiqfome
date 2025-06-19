import PromotionalBanner from "@/components/banners/promotional-banner";
import RestaurantList from "@/components/restaurant/restaurant-list";
import SearchInput from "@/components/search/search-input";
import { getRestaurants } from "@/mock/mock";
import { getPromotionalBannerData } from "@/mock/promotional-banner";

export default function Home() {
  const bannerData = getPromotionalBannerData();
  const allRestaurants = getRestaurants();
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

      <div className="my-6">
        <RestaurantList title="fechados" restaurants={closedRestaurants} />
      </div>
    </>
  );
}
