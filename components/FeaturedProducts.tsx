"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { getDiscountedPrice } from "@/utils/price";

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className="bg-secondary-light py-8">
      <h2 className="text-3xl font-bold text-primary-dark text-center mb-6">
        Featured Products
      </h2>

      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full max-w-5xl px-4"
      >
        {filteredProducts.map((product) => {
          const discountedPrice = getDiscountedPrice(
            product.price,
            product.discount
          );

          return (
            <SwiperSlide key={product.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={250}
                  className="w-1/3 h-48 object-cover rounded-lg"
                  priority
                />
                <div className="w-1/2 p-4">
                  <h3 className="text-xl font-semibold text-primary-dark">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                  <div className="mt-2">
                    {product.discount && (
                      <p className="text-sm text-gray-500 line-through">
                        KSh {product.price.toFixed(2)}
                      </p>
                    )}
                    <p className="text-secondary-dark font-bold">
                      KSh {discountedPrice.toFixed(2)}
                      {product.discount && (
                        <span className="ml-2 text-sm bg-secondary-light text-white px-2 py-1 rounded">
                          {product.discount}% off
                        </span>
                      )}
                    </p>
                  </div>
                  <button className="mt-4 bg-primary-dark text-white px-4 py-2 rounded hover:bg-primary-light">
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
