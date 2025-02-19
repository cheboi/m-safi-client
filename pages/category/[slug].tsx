import { useRouter } from "next/router";
import { products } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Ensure slug is a string before filtering
  const categoryProducts = products.filter(
    (product) => product.category.toLowerCase().replace(/ & /g, "-") === slug
  );

  return (
    <div className="min-h-screen bg-primary-light">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <h1 className="text-4xl font-bold text-primary-dark mb-8 capitalize">
            {slug}
          </h1>
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No products found for this category.
            </p>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}
