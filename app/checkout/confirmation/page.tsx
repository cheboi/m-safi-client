"use client";

import { useCheckout } from "@/app/context/CheckoutContext";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

export default function OrderConfirmation() {
  const { address, paymentMethod } = useCheckout();
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      (item.discount ? item.price * (1 - item.discount / 100) : item.price),
    0
  );

  const handlePlaceOrder = () => {
    alert("Order Placed Successfully!");
    clearCart();
    router.push("/");
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Order Confirmation</h2>

      <div className="bg-white p-6 rounded shadow-md">
        <h3 className="text-xl font-semibold mb-3">Shipping Address</h3>
        <p>
          {address?.name}, {address?.phone}
        </p>
        <p>
          {address?.street}, {address?.city}, {address?.country}
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-3">Payment Method</h3>
        <p className="capitalize">{paymentMethod.replace("_", " ")}</p>

        <h3 className="text-xl font-semibold mt-4 mb-3">Order Summary</h3>
        <ul className="mb-4">
          {cart.map((item) => (
            <li key={item.id} className="border-b py-2">
              {item.name} - KSh{" "}
              {item.discount
                ? (item.price * (1 - item.discount / 100)).toFixed(2)
                : item.price.toFixed(2)}
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-bold">
          Total: KSh {totalPrice.toFixed(2)}
        </h3>

        <button
          onClick={handlePlaceOrder}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded w-full"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
