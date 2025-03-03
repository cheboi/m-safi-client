"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, MessageCircle, UserPlus, User } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import { useAuth } from "@/app/context/AuthContext";
import AuthModal from "./AuthModal";

export default function Header() {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const [modalType, setModalType] = useState<"login" | "signup" | null>(null);

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
                <Link
                  href="/cart"
                  className="hover:text-secondary-light flex items-center"
                >
                  <ShoppingCart size={20} className="mr-1" /> Cart
                  {cart.length > 0 && (
                    <span className="relative bottom-3 right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                      {cart.length}
                    </span>
                  )}
                </Link>
              </li>
              {!user ? (
                <>
                  <li>
                    <button
                      onClick={() => setModalType("login")}
                      className="hover:text-secondary-light flex items-center"
                    >
                      <User size={20} className="mr-1" /> Sign In
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => setModalType("signup")}
                      className="hover:text-secondary-light flex items-center"
                    >
                      <UserPlus size={20} className="mr-1" /> Sign Up
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={logout}
                    className="hover:text-secondary-light"
                  >
                    Sign Out
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
      {modalType && (
        <AuthModal type={modalType} onClose={() => setModalType(null)} />
      )}
    </>
  );
}
