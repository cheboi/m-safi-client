"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { id: 1, name: "Vegetables", slug: "vegetables" },
  { id: 2, name: "Fruits", slug: "fruits" },
  { id: 3, name: "Livestock", slug: "livestock" },
  { id: 4, name: "Grains & Cereals", slug: "grains-cereals" },
  { id: 5, name: "Eggs", slug: "eggs" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-primary-dark text-white p-6 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => {
          const isActive = pathname === `/category/${category.slug}`;

          return (
            <li key={category.id}>
              <Link
                href={`/category/${category.slug}`}
                className={`block py-2 px-3 rounded transition-all duration-200 ${
                  isActive
                    ? "bg-secondary-light text-black font-bold"
                    : "hover:bg-secondary-light hover:text-black"
                }`}
              >
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
