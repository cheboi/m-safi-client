export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  discount?: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: 240,
    discount: 10,
    image: "/images/tomatoes.jpg",
    description: "Freshly harvested tomatoes from local farms.",
  },
  {
    id: 2,
    name: "Organic Eggs",
    category: "Eggs",
    price: 390,
    discount: 20,
    image: "/images/eggs.jpg",
    description: "Organic eggs from free-range chickens.",
  },
  {
    id: 3,
    name: "Live Goat",
    category: "Livestock",
    price: 18000.0,
    image: "/images/goat.jpg",
    description: "Healthy live goat for sale.",
  },
];
