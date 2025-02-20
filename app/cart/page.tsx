"use client";

import { useCart } from "@/app/context/CartContext";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="min-h-screen bg-primary-light">
      <Header />
      <main className="p-4">
        <h1 className="text-4xl font-bold text-primary-dark mb-6">
          Shopping Cart
        </h1>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-lg shadow-md flex"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={200}
                    className="w-1/3 h-32 object-cover"
                    priority
                  />
                  <div className="w-2/3 p-4">
                    <h2 className="text-xl font-semibold text-primary-dark">
                      {item.name}
                    </h2>
                    <p className="text-gray-600">Qty: {item.quantity}</p>
                    <p className="text-secondary-dark font-bold">
                      KSh {(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={clearCart}
              className="mt-6 bg-secondary-dark text-white px-6 py-2 rounded hover:bg-secondary-light"
            >
              Clear Cart
            </button>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
