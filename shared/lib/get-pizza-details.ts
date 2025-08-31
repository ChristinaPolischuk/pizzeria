import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaSize, PizzaType, mapPizzaType } from "../constants/pizza";
import { calcTotalPizzaPrice } from "./calc-total-pizza-price";

export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const totalPrice = calcTotalPizzaPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );
  const textDetails = `${size} cm, ${mapPizzaType[type]}e Pizza`;

  return { totalPrice, textDetails };
};
