"use client";

import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useParams } from "next/navigation";
import { products } from "@/app/data/products";
import { sellers } from "@/app/data/sellers";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="text-center text-red-500 text-xl">Product Not Found</div>
    );
  }

  const seller = sellers.find((s) => s.name === product.seller.name);

  return (
    <div>
      <Header />
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2 h-96">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>

          <div className="md:w-1/2 p-4">
            <h1 className="text-3xl font-bold text-primary-dark">
              {product.name}
            </h1>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-secondary-dark font-bold mt-4 text-lg">
              Price: KSh {product.price.toFixed(2)}
            </p>
            {product.discount && (
              <p className="text-red-500 text-sm line-through">
                Original Price: KSh{" "}
                {(product.price / (1 - product.discount / 100)).toFixed(2)}
              </p>
            )}
            <p className="mt-2 text-gray-600">
              Stock Available: {product.stock}
            </p>

            {/* Seller Information */}
            <div className="mt-6 p-4 border border-gray-300 rounded-lg">
              <h2 className="text-xl font-semibold text-primary-dark">
                Seller Information
              </h2>
              <p className="mt-1 text-gray-700 font-semibold">{seller?.name}</p>
              <p className="text-gray-500">{seller?.location}</p>
              <p className="text-gray-500">Contact: {seller?.contact}</p>
              <p className="mt-2 font-bold text-yellow-500">
                ⭐ {seller?.rating} / 5
              </p>
            </div>

            <button className="mt-6 bg-secondary-light text-white px-4 py-2 rounded hover:bg-secondary-dark">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
