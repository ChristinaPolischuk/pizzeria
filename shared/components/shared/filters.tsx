"use client";

import React from "react";
import { cn } from "@/shared/lib/utils";
import { Title } from "./title";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { Input, RangeSlider } from "../ui";
import { useIngredients, useFilters, useQueryFilters } from "@/shared/hooks";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };

  return (
    <div className={cn("", className)}>
      <Title text="Filter" size="sm" className="mb-5 font-bold" />
      {/* Obere Checkboxen */}
      <CheckboxFiltersGroup
        title="Teigart:"
        name="pizzaTypes"
        className="mt-5"
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          { text: "Dünn", value: "1" },
          { text: "Traditionell", value: "2" },
        ]}
        loading={loading}
      />
      <CheckboxFiltersGroup
        title="Größen:"
        name="sizes"
        className="mt-5"
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: "20cm", value: "20" },
          { text: "30cm", value: "30" },
          { text: "40cm", value: "40" },
        ]}
        loading={loading}
      />

      {/* Preissfilter */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Preis von … bis …</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(filters.prices.priceFrom)}
            onChange={(e) =>
              filters.setPrices("priceFrom", Number(e.target.value))
            }
          />
          <Input
            type="number"
            placeholder="1000"
            min={10}
            max={1000}
            value={String(filters.prices.priceTo)}
            onChange={(e) =>
              filters.setPrices("priceTo", Number(e.target.value))
            }
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={1}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 1000,
          ]}
          onValueChange={updatePrices}
        />
      </div>

      <CheckboxFiltersGroup
        title="Zutaten:"
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
