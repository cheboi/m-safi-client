import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-light">
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-primary-dark mb-8">
          Welcome to Msafi e-commerce website more datils to come
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
