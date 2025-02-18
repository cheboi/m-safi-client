import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  const featuredProducts = products.filter(
    (product) => product.discount && product.discount > 0
  );

  return (
    <div className="min-h-screen bg-primary-light">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <FeaturedProducts products={featuredProducts} />
          <h1 className="text-4xl font-bold text-primary-dark mb-8">
            All Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
