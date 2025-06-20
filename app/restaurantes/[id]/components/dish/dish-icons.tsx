import { FlameIcon, LeafIcon } from "lucide-react";

interface DishIconsProps {
  isSpicy?: boolean;
  isVegetarian?: boolean;
}

function DishIcons({ isSpicy, isVegetarian }: DishIconsProps) {
  return (
    <>
      {isSpicy && (
        <FlameIcon
          size={14}
          className="fill-orange-400 text-orange-500"
          aria-label="Picante"
        />
      )}
      {isVegetarian && (
        <LeafIcon
          size={14}
          className="fill-green-400 text-green-600"
          aria-label="Vegetariano"
        />
      )}
    </>
  );
}

export default DishIcons;
