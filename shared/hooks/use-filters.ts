// import React from "react";
// import { useSet } from "react-use";
// import { useSearchParams } from "next/navigation";

// interface PriceProps {
//   priceFrom?: number;
//   priceTo?: number;
// }

// interface QueryFilters extends PriceProps {
//   pizzaTypes: string;
//   sizes: string;
//   ingredients: string;
// }

// export interface Filters {
//   sizes: Set<string>;
//   pizzaTypes: Set<string>;
//   selectedIngredients: Set<string>;
//   prices: PriceProps;
// }

// interface ReturnProps extends Filters {
//   setPrices: (name: keyof PriceProps, value: number) => void;
//   setPizzaTypes: (value: string) => void;
//   setSizes: (value: string) => void;
//   setSelectedIngredients: (value: string) => void;
// }

// export const useFilters = (): ReturnProps => {
//   const searchParams = useSearchParams() as unknown as Map<
//     keyof QueryFilters,
//     string
//   >;

//   // Фильтр ингредиентов пиццы
//   const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
//     new Set<string>(searchParams.get("ingredients")?.split(","))
//   );

//   // Фильтр размеров пиццы
//   const [sizes, { toggle: toggleSizes }] = useSet(
//     new Set<string>(
//       searchParams.has("sizes") ? searchParams.get("sizes")?.split(",") : []
//     )
//   );

//   // Фильтр типов пиццы
//   const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
//     new Set<string>(
//       searchParams.has("pizzaTypes")
//         ? searchParams.get("pizzaTypes")?.split(",")
//         : []
//     )
//   );

//   // Фильтр стоимости
//   const [prices, setPrices] = React.useState<PriceProps>({
//     priceFrom: Number(searchParams.get("priceFrom")) || undefined,
//     priceTo: Number(searchParams.get("priceTo")) || undefined,
//   });

//   const updatePrice = (name: keyof PriceProps, value: number) => {
//     setPrices((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return {
//     sizes,
//     pizzaTypes,
//     selectedIngredients,
//     prices,
//     setPrices: updatePrice,
//     setPizzaTypes: togglePizzaTypes,
//     setSizes: toggleSizes,
//     setSelectedIngredients: toggleIngredients,
//   };
// };

import React from "react";
import { useSet } from "react-use";
import { useSearchParams } from "next/navigation";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export interface Filters {
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  selectedIngredients: Set<string>;
  prices: PriceProps;
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setPizzaTypes: (value: string) => void;
  setSizes: (value: string) => void;
  setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  // useSearchParams возвращает ReadonlyURLSearchParams, а НЕ Map!
  const searchParams = useSearchParams();

  // Utility для безопасного split
  function safeSplit(str: string | null | undefined) {
    if (!str) return [];
    return str.split(",").filter(Boolean);
  }

  // Фильтр ингредиентов пиццы
  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(safeSplit(searchParams.get("ingredients")))
  );

  // Фильтр размеров пиццы
  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(safeSplit(searchParams.get("sizes")))
  );

  // Фильтр типов пиццы
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(safeSplit(searchParams.get("pizzaTypes")))
  );

  // Фильтр стоимости
  const [prices, setPrices] = React.useState<PriceProps>({
    priceFrom: searchParams.get("priceFrom")
      ? Number(searchParams.get("priceFrom"))
      : undefined,
    priceTo: searchParams.get("priceTo")
      ? Number(searchParams.get("priceTo"))
      : undefined,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    sizes,
    pizzaTypes,
    selectedIngredients,
    prices,
    setPrices: updatePrice,
    setPizzaTypes: togglePizzaTypes,
    setSizes: toggleSizes,
    setSelectedIngredients: toggleIngredients,
  };
};
