"use client";

import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { Mail, Lock, User, UserCheck, X } from "lucide-react";

interface AuthModalProps {
  type: "login" | "signup";
  onClose: () => void;
}

export default function AuthModal({ type, onClose }: AuthModalProps) {
  const { login, register } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer", //default role customer
  });
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (type === "login") {
        await login(form.email, form.password);
      } else {
        await register(form.name, form.email, form.password, form.role);
      }
      onClose(); 
    } catch (err) {
      setError("Authentication failed. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 shadow-lg rounded-lg w-96 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 text-gray-500 hover:text-red-500"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-primary mb-4">
          {type === "login" ? "Sign In" : "Sign Up"}
        </h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field for Signup */}
          {type === "signup" && (
            <div className="flex items-center border rounded px-3 py-2">
              <User className="text-gray-500 mr-2" size={18} />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full focus:outline-none"
                required
              />
            </div>
          )}

          {/* Email Field */}
          <div className="flex items-center border rounded px-3 py-2">
            <Mail className="text-gray-500 mr-2" size={18} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full focus:outline-none"
              required
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center border rounded px-3 py-2">
            <Lock className="text-gray-500 mr-2" size={18} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full focus:outline-none"
              required
            />
          </div>

          {/* Role Selection Dropdown */}
          {type === "signup" && (
            <div className="flex items-center border rounded px-3 py-2">
              <UserCheck className="text-gray-500 mr-2" size={18} />
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full focus:outline-none"
                required
              >
                <option value="customer">Customer</option>
                <option value="seller">Seller</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded"
          >
            {type === "login" ? "Sign In" : "Sign Up"}
          </button>
        </form>

        {/* Links */}
        {type === "login" ? (
          <p className="text-sm mt-2">
            Forgot your password?{" "}
            <a
              href="/auth/forgot-password"
              className="text-secondary hover:underline"
            >
              Reset here
            </a>
          </p>
        ) : (
          <p className="text-sm mt-2">
            Already have an account?{" "}
            <button
              onClick={onClose}
              className="text-secondary hover:underline"
            >
              Sign In
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
