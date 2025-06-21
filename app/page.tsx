import PromotionalBanner from "@/components/banners/promotional-banner";
import RestaurantList from "@/components/restaurant/restaurant-list";
import SearchInput from "@/components/search/search-input";
import { useRestaurants } from "@/hooks/useRestaurants";
import { getPromotionalBannerData } from "@/mock/promotional-banner";

export default function Home() {
  const bannerData = getPromotionalBannerData();
  const { openRestaurants, closedRestaurants } = useRestaurants();

  return (
    <main>
      <SearchInput />
      <section className="mt-px">
        <PromotionalBanner
          imageSrc={bannerData.imageSrc}
          altText={bannerData.altText}
        />
      </section>

      <section className="mt-6">
        <RestaurantList title="abertos" restaurants={openRestaurants} />
      </section>

      <section className="my-6">
        <RestaurantList title="fechados" restaurants={closedRestaurants} />
      </section>
    </main>
  );
}
