// import React from "react";
// import qs from "qs";
// import { useRouter } from "next/navigation";
// import { Filters } from "./use-filters";

// export const useQueryFilters = (filters: Filters) => {
//   const router = useRouter();

//   React.useEffect(() => {
//     const params = {
//       ...filters.prices,
//       pizzaTypes: Array.from(filters.pizzaTypes),
//       sizes: Array.from(filters.sizes),
//       ingredients: Array.from(filters.selectedIngredients),
//     };
//     const query = qs.stringify(params, { arrayFormat: "comma" });

//     router.push(`?${query}`, { scroll: false });
//   }, [filters, router]);
// };

import React from "react";
import qs from "qs";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Filters } from "./use-filters";

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    const params = {
      ...filters.prices,
      pizzaTypes: Array.from(filters.pizzaTypes),
      sizes: Array.from(filters.sizes),
      ingredients: Array.from(filters.selectedIngredients),
    };
    const query = qs.stringify(params, {
      arrayFormat: "comma",
      skipNulls: true,
    });
    const currentQuery = searchParams.toString();

    // Вызывать push только если query отличается от текущего
    if (query !== currentQuery) {
      router.push(`${pathname}?${query}`, { scroll: false });
    }
  }, [filters, router, pathname, searchParams]);
};
