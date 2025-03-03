"use client";

import { createContext, useContext, useState } from "react";
import axios from "axios";

interface AuthContextProps {
  user: { name: string; role: string } | null;
  login: (email: string, password: string) => Promise<void>;
  register: (
    name: string,
    email: string,
    password: string,
    role: string
  ) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ name: string; role: string } | null>(null);

  const login = async (email: string, password: string) => {
    const { data } = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });
    setUser({ name: data.name, role: data.role });
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    role: string
  ) => {
    const { data } = await axios.post(
      "http://localhost:5000/api/auth/register",
      {
        name,
        email,
        password,
        role,
      }
    );
    setUser({ name: data.name, role: data.role });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
