"use client";

import { useCheckout } from "@/app/context/CheckoutContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CreditCard, Smartphone } from "lucide-react";
import { FaPaypal } from "react-icons/fa";

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
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    mpesaNumber: "",
    paypalEmail: "",
  });
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

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Shipping Address */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-3">Shipping Address</h3>
          <form>
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
          </form>
        </div>

        {/*Payment Method */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-3">Payment Method</h3>

          {/* Payment Selection */}
          <div className="space-y-3">
            <button
              className={`w-full flex items-center p-3 border rounded ${
                payment === "credit_card" ? "bg-blue-100" : ""
              }`}
              onClick={() => setPayment("credit_card")}
            >
              <CreditCard className="mr-2 text-blue-600" size={24} />
              Credit Card
            </button>

            <button
              className="w-full flex items-center p-3 border rounded"
              onClick={() => setPayment("paypal")}
            >
              <FaPaypal className="mr-2 text-blue-600" size={24} />
              PayPal
            </button>

            <button
              className={`w-full flex items-center p-3 border rounded ${
                payment === "mobile_money" ? "bg-blue-100" : ""
              }`}
              onClick={() => setPayment("mobile_money")}
            >
              <Smartphone className="mr-2 text-blue-600" size={24} />
              Mobile Money (M-Pesa, Airtel)
            </button>
          </div>

          {/* Payment Details Input */}
          <div className="mt-4">
            {payment === "credit_card" && (
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  Credit Card Details
                </h4>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full p-2 border mb-2"
                  onChange={(e) =>
                    setPaymentDetails({
                      ...paymentDetails,
                      cardNumber: e.target.value,
                    })
                  }
                  required
                />
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Expiry (MM/YY)"
                    className="w-1/2 p-2 border mb-2"
                    onChange={(e) =>
                      setPaymentDetails({
                        ...paymentDetails,
                        expiry: e.target.value,
                      })
                    }
                    required
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-1/2 p-2 border mb-2"
                    onChange={(e) =>
                      setPaymentDetails({
                        ...paymentDetails,
                        cvv: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </div>
            )}

            {payment === "paypal" && (
              <div>
                <h4 className="text-lg font-semibold mb-2">PayPal Email</h4>
                <input
                  type="email"
                  placeholder="PayPal Email"
                  className="w-full p-2 border mb-2"
                  onChange={(e) =>
                    setPaymentDetails({
                      ...paymentDetails,
                      paypalEmail: e.target.value,
                    })
                  }
                  required
                />
              </div>
            )}

            {payment === "mobile_money" && (
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  Mobile Money Number
                </h4>
                <input
                  type="text"
                  placeholder="Mobile Number (M-Pesa, Airtel)"
                  className="w-full p-2 border mb-2"
                  onChange={(e) =>
                    setPaymentDetails({
                      ...paymentDetails,
                      mpesaNumber: e.target.value,
                    })
                  }
                  required
                />
              </div>
            )}
          </div>

          <button
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded w-full"
            onClick={handleAddressSubmit}
          >
            Proceed to Confirmation
          </button>
        </div>
      </div>
    </div>
  );
}
