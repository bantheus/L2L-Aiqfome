import PromotionalBanner from "@/components/banners/promotional-banner";
import SearchInput from "@/components/search/search-input";
import { getPromotionalBannerData } from "@/mock/promotional-banner";

export default function Home() {
  const bannerData = getPromotionalBannerData();
  return (
    <>
      <SearchInput />
      <div className="mt-px">
        <PromotionalBanner
          imageSrc={bannerData.imageSrc}
          altText={bannerData.altText}
        />
      </div>
    </>
  );
}
