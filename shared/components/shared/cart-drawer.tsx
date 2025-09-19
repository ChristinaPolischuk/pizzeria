"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import Link from "next/link";

import { getCartItemDetails } from "@/shared/lib";
import { CartDrawerItem } from "./";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { useCartStore } from "@/shared/store";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  // const [totalAmount, fetchCartItems, items] = useCartStore((state) => [
  //   state.totalAmount,
  //   state.fetchCartItems,
  //   state.items,
  // ]);

  // React.useEffect(() => {
  //   fetchCartItems();
  // }, []);

  const totalAmount = useCartStore((state) => state.totalAmount);
  const items = useCartStore((state) => state.items);
  const updateItemQuantity = useCartStore((state) => state.updateItemQuantity);
  const removeCartItem = useCartStore((state) => state.removeCartItem);
  const fetchCartItems = useCartStore((state) => state.fetchCartItems);

  React.useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#f4f1ee]">
        <SheetHeader>
          <SheetTitle>
            Im Warenkorb{" "}
            <span className="font-bold">{items.length} Artikel</span>
          </SheetTitle>
        </SheetHeader>

        <div className="-mx-6 mt-5 overflow-auto flex-1">
          {items.map((item) => (
            <div key={item.id} className="mb-2">
              <CartDrawerItem
                id={item.id}
                imageUrl={item.imageUrl}
                details={
                  item.pizzaSize && item.pizzaType
                    ? getCartItemDetails(
                        item.ingredients,
                        item.pizzaType as PizzaType,
                        item.pizzaSize as PizzaSize
                      )
                    : ""
                }
                disabled={item.disabled}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                onClickCountButton={(type) =>
                  onClickCountButton(item.id, item.quantity, type)
                }
                onClickRemove={() => removeCartItem(item.id)}
              />
            </div>
          ))}
        </div>

        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Gesamt:
                <span className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"></span>
              </span>
              <span className="font-bold text-lg">{totalAmount} &euro;</span>
            </div>
            <Link href="/api/cart">
              <Button
                // onClick={() => setRedirecting(true)}
                // loading={loading || redirecting}
                type="submit"
                className="w-full h-12 text-base"
              >
                Zur Kasse
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
