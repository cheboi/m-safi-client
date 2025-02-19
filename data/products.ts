export interface Product {
  id: number;
  name: string;
  category: string;
  subcategory?: string;
  price: number;
  discount?: number;
  image: string;
  stock: number;
  description: string;
  seller: {
    name: string;
    location: string;
    contact: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Organic Tomatoes",
    category: "Vegetables",
    subcategory: "Fresh Produce",
    price: 250,
    discount: 10,
    image: "/images/tomatoes.jpg",
    stock: 150,
    description:
      "Freshly harvested organic tomatoes. Perfect for salads, sauces, and cooking. No pesticides used.",
    seller: {
      name: "GreenFarm Ltd.",
      location: "Nairobi, Kenya",
      contact: "+254 712 345678",
    },
  },
  {
    id: 2,
    name: "Free-Range Organic Eggs",
    category: "Eggs",
    subcategory: "Dairy & Eggs",
    price: 400,
    discount: 15,
    image: "/images/eggs.jpg",
    stock: 200,
    description:
      "Farm-fresh organic eggs from free-range hens. High in protein and omega-3s.",
    seller: {
      name: "Happy Hen Farms",
      location: "Eldoret, Kenya",
      contact: "+254 723 987654",
    },
  },
  {
    id: 3,
    name: "Live Boer Goat",
    category: "Livestock",
    subcategory: "Goats",
    price: 20000,
    image: "/images/goat.jpg",
    stock: 10,
    description:
      "Healthy live Boer goat for farming or meat production. Vaccinated and well-fed.",
    seller: {
      name: "Safari Livestock",
      location: "Kisumu, Kenya",
      contact: "+254 711 xxx344",
    },
  },
  {
    id: 4,
    name: "Yellow Maize (50kg Bag)",
    category: "Grains & Cereals",
    subcategory: "Cereals",
    price: 2800,
    discount: 5,
    image: "/images/maize.jpg",
    stock: 500,
    description:
      "High-quality yellow maize. Ideal for animal feed and human consumption.",
    seller: {
      name: "Agro Distributors Ltd.",
      location: "Nakuru, Kenya",
      contact: "+254 720 xxxx33",
    },
  },
  {
    id: 5,
    name: "Sweet Mangoes (1kg)",
    category: "Fruits",
    subcategory: "Tropical Fruits",
    price: 350,
    image: "/images/mangoes.jpg",
    stock: 300,
    description:
      "Delicious, juicy, and sweet mangoes from local farms. Perfect for smoothies, juices, or snacks.",
    seller: {
      name: "Sunshine Fruits",
      location: "Mombasa, Kenya",
      contact: "+254 701 556677",
    },
  },
];
