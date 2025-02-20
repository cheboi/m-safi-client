import { products } from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function DealsPage() {
  const deals = products.filter(
    (product) => product.discount && product.discount >= 20
  );

  return (
    <div className="min-h-screen bg-primary-light">
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-primary-dark mb-6">
          🔥 Today's Deals
        </h1>
        {deals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No deals available at the moment.
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}
