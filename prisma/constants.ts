export const categories = [
  {
    name: "Pizzen",
  },
  {
    name: "Frühstück",
  },
  {
    name: "Snacks",
  },
  {
    name: "Cocktails",
  },
  {
    name: "Getränke",
  },
];

export const _ingredients = [
  {
    name: "Käserand",
    price: 3,
    imageUrl: "/products/ingredients/cheese-crust.png",
  },
  {
    name: "Cremiger Mozzarella",
    price: 6,
    imageUrl: "/products/ingredients/creamy-mozzarella.png",
  },
  {
    name: "Cheddar- und Parmesankäse",
    price: 8,
    imageUrl: "/products/ingredients/cheddar-and-parmesan.png",
  },
  {
    name: "Scharfer Jalapeño-Pfeffer",
    price: 5,
    imageUrl: "/products/ingredients/spicy-jalapeno-pepper.png",
  },
  {
    name: "Zartes Hähnchen",
    price: 10,
    imageUrl: "/products/ingredients/tender-chicken.png",
  },
  {
    name: "Champignons",
    price: 7,
    imageUrl: "/products/ingredients/mushrooms.png",
  },
  {
    name: "Schinken",
    price: 10,
    imageUrl: "/products/ingredients/ham.png",
  },
  {
    name: "Würzige Peperoni",
    price: 6,
    imageUrl: "/products/ingredients/spicy-pepperoni.png",
  },
  {
    name: "Scharfe Chorizo",
    price: 11,
    imageUrl: "/products/ingredients/spicy-chorizo.png",
  },
  {
    name: "Eingelegte Gurken",
    price: 5,
    imageUrl: "/products/ingredients/pickled-cucumbers.png",
  },
  {
    name: "Frische Tomaten",
    price: 5,
    imageUrl: "/products/ingredients/fresh-tomatoes.png",
  },
  {
    name: "Rote Zwiebeln",
    price: 4,
    imageUrl: "/products/ingredients/red-onion.png",
  },
  {
    name: "Saftige Ananas",
    price: 6,
    imageUrl: "/products/ingredients/juicy-pineapple.png",
  },
  {
    name: "Italienische Kräuter",
    price: 9,
    imageUrl: "/products/ingredients/italian-herbs.png",
  },
  {
    name: "Süße Paprika",
    price: 7,
    imageUrl: "/products/ingredients/sweet-pepper.png",
  },
  {
    name: "Feta-Würfel",
    price: 10,
    imageUrl: "/products/ingredients/feta-cubes.png",
  },
  {
    name: "Fleischbällchen",
    price: 12,
    imageUrl: "/products/ingredients/meatballs.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Omelett mit Schinken und Pilzen",
    imageUrl: "/products/breakfast/omelet-with-ham-and-mushrooms.png",
    categoryId: 2,
  },
  {
    name: "Omelett mit Pepperoni",
    imageUrl: "/products/breakfast/omelet-with-pepperoni.png",
    categoryId: 2,
  },
  {
    name: "Latte-Kaffee",
    imageUrl: "/products/breakfast/latte.webp",
    categoryId: 2,
  },
  {
    name: "Ciabatta mit Schinken und Käse",
    imageUrl: "/products/snacks/ciabatta-ham-and-cheese.webp",
    categoryId: 3,
  },
  {
    name: "Hähnchen-Nuggets",
    imageUrl: "/products/snacks/chicken-nuggets.png",
    categoryId: 3,
  },
  {
    name: "Pommes Frites mit Sauce",
    imageUrl: "/products/snacks/fries-with-sauce.webp",
    categoryId: 3,
  },
  {
    name: "Döner",
    imageUrl: "/products/snacks/shawarma.webp",
    categoryId: 3,
  },
  {
    name: "Scharfer Döner",
    imageUrl: "/products/snacks/spicy-shawarma.webp",
    categoryId: 3,
  },
  {
    name: "Pistazien-Milchshake",
    imageUrl: "/products/coctails/pistachio-milkshake.avif",
    categoryId: 4,
  },
  {
    name: "Erdbeer-Milchshake",
    imageUrl: "/products/coctails/strawberry-milkshake.avif",
    categoryId: 4,
  },
  {
    name: "Schokolade-Milchshake",
    imageUrl: "/products/coctails/chocolate-milkshake.avif",
    categoryId: 4,
  },
  {
    name: "Klassischer Milchshake",
    imageUrl: "/products/coctails/classic-milkshake.avif",
    categoryId: 4,
  },
  {
    name: "Irischer Cappuccino",
    imageUrl: "/products/drinks/irish-cappuccino.png",
    categoryId: 5,
  },
  {
    name: "Karamell-Cappuccino",
    imageUrl: "/products/drinks/caramel-cappuccino-coffee.webp",
    categoryId: 5,
  },
  {
    name: "Kokos-Latte",
    imageUrl: "/products/drinks/coconut-latte-coffee.webp",
    categoryId: 5,
  },
  {
    name: "Americano-Kaffee",
    imageUrl: "/products/drinks/americano-coffee.webp",
    categoryId: 5,
  },
  {
    name: "Latte-Kaffee",
    imageUrl: "/products/drinks/latte-coffee.webp",
    categoryId: 5,
  },
];
