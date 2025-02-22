"use client";

import { createContext, useState, useContext } from "react";

interface Address {
  name: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  country: string;
}

interface CheckoutContextType {
  address: Address | null;
  setAddress: (address: Address) => void;
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(
  undefined
);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [address, setAddress] = useState<Address | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  return (
    <CheckoutContext.Provider
      value={{ address, setAddress, paymentMethod, setPaymentMethod }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }
  return context;
}
