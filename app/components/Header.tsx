"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import SubHeader from "./SubHeader";

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
              <Link href="/cart" className="hover:text-secondary-light">
                Cart ({cart.length})
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <SubHeader /> 
    </>
  );
}
