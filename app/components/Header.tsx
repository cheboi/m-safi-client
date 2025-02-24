"use client";

import Link from "next/link";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function Header() {
  const { cart } = useCart();

  return (
    <>
      <header className="bg-primary-dark text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">M-Safi</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-secondary-light">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/chat"
                  className="hover:text-secondary-light flex items-center"
                >
                  <MessageCircle size={20} className="mr-1" /> Chat
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-secondary-light flex items-center">
                  <ShoppingCart size={20} className="mr-1"/> Cart
                  {cart.length > 0 && (
                    <span className="absolute top-1 right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                      {cart.length}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
