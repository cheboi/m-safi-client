"use client";

import { useCheckout } from "@/app/context/CheckoutContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { setAddress, setPaymentMethod } = useCheckout();
  const [userAddress, setUserAddress] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    country: "",
  });
  const [payment, setPayment] = useState("");
  const router = useRouter();

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAddress(userAddress);
    setPaymentMethod(payment);
    router.push("/checkout/confirmation");
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {/* Address Form */}
      <form
        onSubmit={handleAddressSubmit}
        className="bg-white p-6 rounded shadow-md"
      >
        <h3 className="text-xl font-semibold mb-3">Shipping Address</h3>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border mb-2"
          onChange={(e) =>
            setUserAddress({ ...userAddress, name: e.target.value })
          }
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-2"
          onChange={(e) =>
            setUserAddress({ ...userAddress, email: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Phone"
          className="w-full p-2 border mb-2"
          onChange={(e) =>
            setUserAddress({ ...userAddress, phone: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Street Address"
          className="w-full p-2 border mb-2"
          onChange={(e) =>
            setUserAddress({ ...userAddress, street: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="City"
          className="w-full p-2 border mb-2"
          onChange={(e) =>
            setUserAddress({ ...userAddress, city: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Country"
          className="w-full p-2 border mb-4"
          onChange={(e) =>
            setUserAddress({ ...userAddress, country: e.target.value })
          }
          required
        />

        {/* Payment Method */}
        <h3 className="text-xl font-semibold mb-3">Payment Method</h3>
        <select
          className="w-full p-2 border mb-4"
          onChange={(e) => setPayment(e.target.value)}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="credit_card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="mobile_money">Mobile Money (M-Pesa, Airtel)</option>
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Proceed to Confirmation
        </button>
      </form>
    </div>
  );
}
