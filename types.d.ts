interface PromotionalBannerData {
  imageSrc: string;
  altText: string;
}

interface Restaurant {
  id: string;
  imageSrc: string;
  name: string;
  deliveryFee: number;
  deliveryTime: string;
  freeDeliveryAbove: number;
  rating: number;
  closingTime: string;
  minOrder: number;
  isOpen: boolean;
  distance: string;
}
