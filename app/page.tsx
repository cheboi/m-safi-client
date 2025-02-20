import { products } from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Sidebar from "@/app/components/Sidebar";
import FeaturedProducts from "@/app/components/FeaturedProducts";

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
