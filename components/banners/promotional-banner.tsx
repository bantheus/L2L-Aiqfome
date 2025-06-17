import Image from "next/image";

function PromotionalBanner({ imageSrc, altText }: PromotionalBannerData) {
  return (
    <div className="relative h-[130px] w-full">
      <Image
        src={imageSrc}
        alt={altText}
        fill
        quality={80}
        priority
        className="object-cover"
        sizes="(max-width: 640px) 100vw, 640px"
      />
    </div>
  );
}

export default PromotionalBanner;
