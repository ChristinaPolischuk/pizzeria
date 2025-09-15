import React from "react";
import { cn } from "@/shared/lib/utils";
import { Title } from ".";
import { Button } from "../ui";

interface Props {
  name: string;
  imageUrl: string;
  price: number;
  loading?: boolean;
  onSubmit?: VoidFunction;
  className?: string;
}

/**
 * PRODUCT choice form
 */
export const ChooseProductForm: React.FC<Props> = ({
  name,
  imageUrl,
  price,
  loading,
  onSubmit,
  className,
}) => {
  return (
    <div className={cn(className, "flex flex-1")}>
      <img
        src={imageUrl}
        alt={name}
        className="relative z-10 l-2 t-2 transition-all duration-300 w-[350px] h-[350px]"
      />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <Button
          loading={loading}
          onClick={() => onSubmit?.()}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          In den Warenkorb legen für {price} &euro;
        </Button>
      </div>
    </div>
  );
};
