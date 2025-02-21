"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useCart } from "@/app/context/CartContext";
import { useEffect, useState } from "react";
import { products, Product } from "@/app/data/products";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const [recommended, setRecommended] = useState<Product[]>([]);

  useEffect(() => {
    if (cart.length > 0) {
      const categories = cart.map((item) => item.category);
      const filteredProducts = products.filter(
        (product) =>
          categories.includes(product.category) &&
          !cart.some((c) => c.id === product.id)
      );
      setRecommended(filteredProducts.slice(0, 3));
    }
  }, [cart]);

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-primary-light">
      <Header />
      <div className="min-h-screen p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4 mb-4"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-500">KSh {item.price.toFixed(2)}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <h2 className="text-2xl font-bold mt-4">
              Total: KSh {totalAmount.toFixed(2)}
            </h2>
            <Link href="/checkout">
              <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        )}

        {recommended.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {recommended.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-lg shadow-md"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="rounded"
                  />
                  <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                  <p className="text-gray-500">
                    KSh {product.price.toFixed(2)}
                  </p>
                  <button className="mt-2 bg-primary-dark text-white px-4 py-2 rounded hover:bg-primary-light">
                    View Product
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
