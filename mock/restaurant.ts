const RestaurantData: Restaurant[] = [
  {
    id: "1",
    imageSrc: "/restaurants/matsuri.webp",
    name: "Matsuri Concept",
    rating: 4.7,
    isOpen: true,
    deliveryFee: 0,
  },
  {
    id: "2",
    imageSrc: "/restaurants/subway.webp",
    name: "Subway - Avenida center",
    rating: 4.3,
    isOpen: true,
    deliveryFee: 6,
  },
  {
    id: "3",
    imageSrc: "/restaurants/burguerking.webp",
    name: "Burger King - Colombo",
    rating: 4.8,
    isOpen: true,
    deliveryFee: 0,
  },
  {
    id: "4",
    imageSrc: "/restaurants/mcdonalds.webp",
    name: "McDonald's - Novo Centro",
    rating: 4.5,
    isOpen: true,
    deliveryFee: 7.3,
  },
  {
    id: "5",
    imageSrc: "/restaurants/burguerking.webp",
    name: "Burger King - Colombo",
    rating: 4.2,
    isOpen: true,
    deliveryFee: 13.0,
  },
  {
    id: "6",
    imageSrc: "/restaurants/subway.webp",
    name: "Subway - Avenida center",
    rating: 4.6,
    isOpen: true,
    deliveryFee: 0,
  },
  {
    id: "7",
    imageSrc: "/restaurants/mcdonalds.webp",
    name: "McDonald's - Novo Centro",
    rating: 4.5,
    isOpen: false,
    deliveryFee: 7.3,
  },
  {
    id: "8",
    imageSrc: "/restaurants/burguerking.webp",
    name: "Burger King - Colombo",
    rating: 4.2,
    isOpen: false,
    deliveryFee: 13.0,
  },
  {
    id: "9",
    imageSrc: "/restaurants/subway.webp",
    name: "Subway - Avenida center",
    rating: 4.6,
    isOpen: false,
    deliveryFee: 0,
  },
];

export const getRestaurantData = (): Restaurant[] => {
  return RestaurantData;
};
