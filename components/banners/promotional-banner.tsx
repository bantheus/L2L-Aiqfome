import Image from "next/image";

function PromotionalBanner({ imageSrc, altText }: PromotionalBannerData) {
  return (
    <div className="relative h-[130px] w-full md:h-[280px] lg:h-[320px] xl:h-[460px] 2xl:h-[620px]">
      <Image
        src={imageSrc}
        alt={altText}
        fill
        quality={100}
        priority
        className="object-cover"
      />
    </div>
  );
}

export default PromotionalBanner;
