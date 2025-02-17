import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-primary-dark">
          {product.name}
        </h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-secondary-dark font-bold mt-2">${product.price}</p>
        <button className="mt-4 bg-secondary-light text-white px-4 py-2 rounded hover:bg-secondary-dark">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
