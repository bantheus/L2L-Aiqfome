"use client";

import Separator from "@/components/separator";
import { Button } from "@/components/ui/button";
import { getRestaurantById } from "@/mock/mock";
import { useCartStore } from "@/store/cart-store";
import Image from "next/image";
import React from "react";
import CartFooter from "./components/cart-footer";
import CartItem from "./components/cart-item";

function CarrinhoPage() {
  const items = useCartStore((s) => s.items);
  const increment = useCartStore((s) => s.increment);
  const decrement = useCartStore((s) => s.decrement);
  const removeItem = useCartStore((s) => s.removeItem);

  const total = items.reduce(
    (sum, item) => sum + item.total * item.quantity,
    0,
  );

  const restaurantId = items.length > 0 ? items[0].restaurantId : null;
  const restaurant = restaurantId ? getRestaurantById(restaurantId) : null;

  if (items.length === 0)
    return (
      <div className="flex flex-col items-center justify-center gap-6 px-4">
        <p className="text-center text-xl font-semibold text-neutral-700">
          Seu carrinho está vazio!
        </p>
        <p className="text-center text-neutral-500">
          Que tal explorar o cardápio e adicionar algo delicioso ao seu pedido?
        </p>
        <Button
          onClick={() => window.history.back()}
          className="bg-primary text-center font-bold text-white"
        >
          Voltar para restaurantes
        </Button>
      </div>
    );

  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col transition-all md:my-8 md:max-w-2xl md:rounded-xl md:bg-white md:shadow-lg lg:max-w-3xl lg:p-8 xl:max-w-4xl xl:p-12 2xl:max-w-5xl 2xl:p-16">
      {restaurant && (
        <>
          <div className="flex items-center gap-2 p-4 md:gap-4 md:p-8 lg:gap-6 lg:p-10 xl:gap-8 xl:p-12">
            <Image
              src={restaurant.logoUrl}
              alt={restaurant.name}
              width={48}
              height={48}
              quality={100}
              className="rounded"
            />
            <div className="flex flex-col gap-1 font-bold">
              <span className="text-sm text-neutral-500 md:text-base lg:text-lg">
                seus itens em
              </span>
              <span className="font-bold text-neutral-900 md:text-2xl lg:text-3xl xl:text-4xl">
                {restaurant.name}
              </span>
            </div>
          </div>

          <ul className="flex flex-1 flex-col gap-4 px-4 md:gap-6 md:px-8 lg:gap-8 lg:px-10 xl:gap-10 xl:px-12">
            {items.map((item, index) => (
              <React.Fragment key={item.id}>
                {index > 0 && <Separator />}
                <CartItem
                  item={item}
                  restaurant={restaurant}
                  onIncrement={increment}
                  onDecrement={decrement}
                  onRemove={removeItem}
                />
              </React.Fragment>
            ))}
          </ul>
        </>
      )}

      <CartFooter total={total} />
    </main>
  );
}

export default CarrinhoPage;
