"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/cart");
    }
  }, [cart, router]);

  const handleCheckout = () => {
    alert("Order placed successfully!");
    clearCart();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-primary-light">
      <Header />
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <p className="text-gray-500">Complete your purchase below.</p>
      <button
        className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
        onClick={handleCheckout}
      >
        Confirm Order
      </button>
    </div>
    <Footer />
    </div>
  );
}
