interface PromotionalBannerData {
  imageSrc: string;
  altText: string;
}

interface Restaurant {
  id: string;
  slug: string;
  name: string;
  logoUrl: string;
  deliveryFee: number;
  deliveryTime: string;
  freeDeliveryAbove: number;
  rating: number;
  closingTime: string;
  minOrder: number;
  distance: number;
  isOpen: boolean;
  categories: Category[];
}

interface Category {
  id: string;
  name: string;
  description?: string;
  dishes: Dish[];
}

interface Dish {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  sizes: Size[];
  accompaniments: Accompaniment[];
  extras: Extra[];
  cutlery: Cutlery[];
}

interface Size {
  name: string;
  price: number;
  promoPrice?: number;
}

interface Accompaniment {
  id: string;
  name: string;
  price: number;
}

interface Extra {
  id: string;
  name: string;
  price: number;
}

interface Cutlery {
  id: string;
  name: string;
  price: number;
}
