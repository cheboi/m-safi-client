export interface Seller {
  id: number;
  name: string;
  location: string;
  contact: string;
  rating: number;
}

export const sellers: Seller[] = [
  {
    id: 1,
    name: "GreenFarm Ltd.",
    location: "Nairobi, Kenya",
    contact: "+254 712 345678",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Happy Hen Farms",
    location: "Eldoret, Kenya",
    contact: "+254 723 987654",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Safari Livestock",
    location: "Kisumu, Kenya",
    contact: "+254 711 123344",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Agro Distributors Ltd.",
    location: "Nakuru, Kenya",
    contact: "+254 720 111333",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Sunshine Fruits",
    location: "Mombasa, Kenya",
    contact: "+254 701 556677",
    rating: 4.9,
  },
];
