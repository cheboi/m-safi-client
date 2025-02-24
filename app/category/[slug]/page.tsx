"use client";

import { useParams } from "next/navigation";
import { products } from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard";
import Header from "@/app/components/Header";
import SubHeader from "@/app/components/SubHeader";
import Footer from "@/app/components/Footer";
import Sidebar from "@/app/components/Sidebar";

export default function CategoryPage() {
  const { slug } = useParams();

  const categoryProducts = products.filter(
    (product) => product.category.toLowerCase() === slug
  );

  return (
    <div className="min-h-screen bg-primary-light">
      <Header />
      <SubHeader />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <h1 className="text-4xl font-bold text-primary-dark mb-8 capitalize">
            {slug}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categoryProducts.length > 0 ? (
              categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-gray-500">
                No products found in this category.
              </p>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
