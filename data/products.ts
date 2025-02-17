export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: 2.5,
    image: "/images/tomatoes.jpg",
    description: "Freshly harvested tomatoes from local farms.",
  },
  {
    id: 2,
    name: "Organic Eggs",
    category: "Eggs",
    price: 4.0,
    image: "/images/eggs.jpg",
    description: "Organic eggs from free-range chickens.",
  },
  {
    id: 3,
    name: "Live Goat",
    category: "Livestock",
    price: 200.0,
    image: "/images/goat.jpg",
    description: "Healthy live goat for sale.",
  },
];
