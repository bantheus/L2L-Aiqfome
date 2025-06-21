import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItemDetails = {
  size?: string;
  accompaniments?: string[];
  cutlery?: string;
  drinks?: Record<string, number>;
  extras?: string[];
  observation?: string;
};

export type CartItem = {
  id: string;
  name: string;
  imageUrl: string;
  quantity: number;
  total: number;
  details: CartItemDetails;
  restaurantId: string;
};

export type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  clear: () => void;
  getTotal: () => number;
  getItem: (id: string) => CartItem | undefined;
  getCount: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? {
                      ...i,
                      quantity: i.quantity + item.quantity,
                      total: i.total + item.total,
                    }
                  : i,
              ),
            };
          }
          return { items: [...state.items, item] };
        }),
      removeItem: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      increment: (id) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        })),
      decrement: (id) =>
        set((state) => ({
          items: state.items
            .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
            .filter((i) => i.quantity > 0),
        })),
      clear: () => set({ items: [] }),
      getTotal: () => get().items.reduce((sum, i) => sum + i.total, 0),
      getItem: (id) => get().items.find((i) => i.id === id),
      getCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({ items: state.items }),
    },
  ),
);
