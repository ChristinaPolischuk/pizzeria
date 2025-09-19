"use client";

import React from "react";
import { ProductWithRelations } from "@/@types/prisma";
import { useRouter } from "next/navigation";
import { cn } from "@/shared/lib/utils";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { ProductForm } from "@/shared/components/shared";
import toast from "react-hot-toast";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <div className="overflow-y-auto max-h-[100vh] p-8">
          <ProductForm product={product} onSubmit={() => router.back()} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
