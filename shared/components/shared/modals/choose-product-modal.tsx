"use client";

import React from "react";
import { ProductWithRelations } from "@/@types/prisma";
import { useRouter } from "next/navigation";
import { cn } from "@/shared/lib/utils";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { ChoosePizzaForm, ChooseProductForm } from "@/shared/components/shared";
import { useCartStore } from "@/shared/store";
import toast from "react-hot-toast";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);
  // const [addCartItem, loading] = useCartStore((state) => [
  //   state.addCartItem,
  //   state.loading,
  // ]);
  const addCartItem = useCartStore((state) => state.addCartItem);
  const loading = useCartStore((state) => state.loading);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCartItem({
        productItemId: itemId,
        ingredients,
      });

      toast.success(product.name + " zum Warenkorb hinzugefügt");
      router.back();
    } catch (error) {
      toast.error(
        product.name + " konnte nicht zum Warenkorb hinzugefügt werden"
      );
      console.error(error);
    }
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <div className="overflow-y-auto max-h-[100vh] p-8">
          {isPizzaForm ? (
            <ChoosePizzaForm
              imageUrl={product.imageUrl}
              name={product.name}
              ingredients={product.ingredients}
              items={product.items}
              onSubmit={onSubmit}
              loading={loading}
            />
          ) : (
            <ChooseProductForm
              imageUrl={product.imageUrl}
              name={product.name}
              onSubmit={onSubmit}
              price={firstItem.price}
              loading={loading}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
