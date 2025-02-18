import Link from "next/link";

const categories = [
  { id: 1, name: "Vegetables", slug: "vegetables" },
  { id: 2, name: "Fruits", slug: "fruits" },
  { id: 3, name: "Livestock", slug: "livestock" },
  { id: 4, name: "Grains & Cereals", slug: "grains-cereals" },
  { id: 5, name: "Eggs", slug: "eggs" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-primary-dark text-white p-4">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="mb-2">
            <Link
              href={`/category/${category.slug}`}
              className="hover:text-secondary-light"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
