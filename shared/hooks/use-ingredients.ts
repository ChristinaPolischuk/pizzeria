// "use client";

// import React from "react";
// import { Ingredient } from "@prisma/client";

// export const useIngredients = () => {
//   const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
//   const [loading, setLoading] = React.useState(true);

//   React.useEffect(() => {
//     async function fetchIngredients() {
//       try {
//         setLoading(true);
//         const res = await fetch("/api/ingredients");
//         const data = await res.json();
//         setIngredients(data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchIngredients();
//   }, []);

//   return { ingredients, loading };
// };

"use client";

import React from "react";

// Тип ингредиента (лучше описать явно, чтобы не тянуть "@prisma/client" в клиентский бандл)
export interface Ingredient {
  id: number;
  name: string;
  // Добавьте другие поля, если они есть
}

export const useIngredients = () => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const res = await fetch("/api/ingredients");
        if (!res.ok) throw new Error("Failed to fetch ingredients");
        const data = await res.json();
        setIngredients(data);
      } catch (error) {
        console.error(error);
        setIngredients([]); // безопасно устанавливаем []
      } finally {
        setLoading(false);
      }
    }
    fetchIngredients();
  }, []);

  return { ingredients, loading };
};
