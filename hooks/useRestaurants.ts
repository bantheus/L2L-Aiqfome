import { getRestaurants } from "@/mock/mock";
import { useMemo } from "react";

export function useRestaurants() {
  const allRestaurants = getRestaurants();
  const openRestaurants = useMemo(
    () => allRestaurants.filter((r) => r.isOpen),
    [allRestaurants],
  );
  const closedRestaurants = useMemo(
    () => allRestaurants.filter((r) => !r.isOpen),
    [allRestaurants],
  );
  return { allRestaurants, openRestaurants, closedRestaurants };
}
