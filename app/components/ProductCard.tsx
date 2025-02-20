"use client";

import Image from "next/image";

import { Product } from "@/app/data/products";
import { getDiscountedPrice } from "@/utils/price";
import { useCart } from "@/app/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const discountedPrice = getDiscountedPrice(product.price, product.discount);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className=" h-48 object-cover"
        priority
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-primary-dark">
          {product.name}
        </h2>
        <p className="text-gray-600 text-sm">{product.description}</p>

        <div className="mt-2">
          {product.discount && (
            <p className="text-sm text-gray-500 line-through">
              KSh {product.price.toFixed(2)}
            </p>
          )}
          <p className="text-secondary-dark font-bold">
            KSh {discountedPrice.toFixed(2)}
            {product.discount && (
              <span className="ml-2 text-xs bg-secondary-light text-white px-2 py-1 rounded">
                {product.discount}% off
              </span>
            )}
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-2">
          Stock: <span className="font-bold">{product.stock}</span>
        </p>
        <p className="text-sm text-gray-500">
          Seller: <span className="font-bold">{product.seller.name}</span> -{" "}
          {product.seller.location}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-secondary-light text-white px-4 py-2 rounded hover:bg-secondary-dark w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
