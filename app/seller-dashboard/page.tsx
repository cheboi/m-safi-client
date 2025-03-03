"use client";

import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SellerDashboard() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user || user.role !== "seller") {
      router.push("/");
    }
  }, [user, router]);

  return <div>Seller Dashboard - Manage Your Products</div>;
}
