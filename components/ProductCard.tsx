import { Product } from "@/data/products";
import { getDiscountedPrice } from "@/utils/price";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountedPrice = getDiscountedPrice(product.price, product.discount);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
      <img
        src={product.image}
        alt={product.name}
        className="w-1/2 h-48 object-cover"
      />
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-semibold text-primary-dark">
          {product.name}
        </h2>
        <p className="text-gray-600">{product.description}</p>
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
        <button className="mt-4 bg-secondary-light text-white px-4 py-2 rounded hover:bg-secondary-dark">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
