"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Lock, ShieldCheck, Trash, Eye, EyeOff } from "lucide-react";

export default function AccountSecurity() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const updatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Updating password...");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-3xl mx-auto bg-white p-6 shadow-md rounded-lg">
          <h1 className="text-3xl font-semibold text-primary-dark mb-6">
            <Lock className="inline-block mr-2" size={28} />
            Account & Security
          </h1>

          {/* UpdatePassword Form */}
          <form onSubmit={updatePassword} className="mb-6">
            <h2 className="text-xl font-bold text-secondary-dark mb-4">
              Change Password
            </h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-2 border rounded"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">
                New Password
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">
                Confirm New Password
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-primary-dark text-white px-4 py-2 rounded w-full"
            >
              Update Password
            </button>
          </form>

          {/* Two-Factor Auth*/}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-secondary-dark mb-2">
              <ShieldCheck className="inline-block mr-2" size={24} />
              Two-Factor Authentication (2FA)
            </h2>
            <p className="text-gray-600 mb-2">
              Enhance your security by enabling 2FA. You will need a code sent
              to your email or phone when logging in.
            </p>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="mr-2"
                checked={twoFactorEnabled}
                onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
              />
              Enable 2FA
            </label>
          </div>

          {/* Account Delete*/}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-red-600 mb-2">
              <Trash className="inline-block mr-2" size={24} />
              Delete Account
            </h2>
            <p className="text-gray-600 mb-2">
              Warning: Deleting your account is irreversible. All your data will
              be lost.
            </p>
            <button className="bg-red-600 text-white px-4 py-2 rounded w-full hover:bg-red-800">
              Request Account Deletion
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
