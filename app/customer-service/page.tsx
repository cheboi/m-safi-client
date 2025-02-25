"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  PackageCheck,
  RefreshCw,
  Lock,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function CustomerServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How do I track my order?",
      answer:
        "Go to 'My Orders' section in your account and click on 'Track Order' for real-time updates.",
    },
    {
      id: 2,
      question: "What is your return policy?",
      answer:
        "You can return items within 7 days of delivery if they meet our return conditions.",
    },
    {
      id: 3,
      question: "How can I reset my password?",
      answer:
        "Click on 'Forgot Password' on the login page and follow the instructions to reset it.",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <header className="bg-primary-dark text-white p-6 text-center text-2xl font-bold">
          Customer Service
        </header>

        {/* Support Categories */}
        <div className="max-w-5xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">How can we help you?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Order Issues */}
            <div className="p-4 bg-gray-200 rounded-lg text-center">
              <PackageCheck size={40} className="mx-auto text-primary-dark" />
              <h3 className="mt-2 font-semibold">Order & Delivery</h3>
              <p className="text-sm">
                Track orders, delays, and missing items.
              </p>
              <Link href="/help/orders" className="text-blue-600 text-sm">
                Learn More →
              </Link>
            </div>

            {/* Returns & Refunds */}
            <div className="p-4 bg-gray-200 rounded-lg text-center">
              <RefreshCw size={40} className="mx-auto text-primary-dark" />
              <h3 className="mt-2 font-semibold">Returns & Refunds</h3>
              <p className="text-sm">Request returns and refunds.</p>
              <Link href="/help/returns-refunds" className="text-blue-600 text-sm">
                Learn More →
              </Link>
            </div>

            {/* Account & Security */}
            <div className="p-4 bg-gray-200 rounded-lg text-center">
              <Lock size={40} className="mx-auto text-primary-dark" />
              <h3 className="mt-2 font-semibold">Account & Security</h3>
              <p className="text-sm">Update passwords and account security.</p>
              <Link href="/help/account" className="text-blue-600 text-sm">
                Learn More →
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-5xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b pb-2">
                <button
                  className="w-full flex justify-between items-center text-left p-2 text-primary-dark font-semibold"
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                >
                  {faq.question}
                  <ChevronDown
                    size={20}
                    className={`${
                      openFaq === faq.id ? "rotate-180" : ""
                    } transition-transform`}
                  />
                </button>
                {openFaq === faq.id && (
                  <p className="text-sm text-gray-600 p-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-5xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Need More Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Support */}
            <div className="p-4 bg-gray-200 rounded-lg text-center">
              <Phone size={40} className="mx-auto text-primary-dark" />
              <h3 className="mt-2 font-semibold">Call Us</h3>
              <p className="text-sm">Available 24/7</p>
              <p className="font-bold">+254 720 053640</p>
            </div>

            {/* Email Support */}
            <div className="p-4 bg-gray-200 rounded-lg text-center">
              <Mail size={40} className="mx-auto text-primary-dark" />
              <h3 className="mt-2 font-semibold">Email Us</h3>
              <p className="text-sm">Get a response within 24 hours</p>
              <p className="font-bold">support@msafi.com</p>
            </div>

            {/* Live Chat */}
            <div className="p-4 bg-gray-200 rounded-lg text-center">
              <MessageCircle size={40} className="mx-auto text-primary-dark" />
              <h3 className="mt-2 font-semibold">Live Chat</h3>
              <p className="text-sm">Chat with a support agent</p>
              <button className="mt-2 px-4 py-2 bg-secondary-light text-white rounded hover:bg-secondary-dark">
                <a href="/chat"> Start Chat</a>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-5xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border rounded h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary-dark text-white p-2 rounded hover:bg-primary-light"
            >
              Submit
            </button>
          </form>
        </div>

        {/* WhatsApp Chat */}
        <div className="text-center my-6">
          <a
            href="https://wa.me/254720053640"
            target="_blank"
            className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            <MessageCircle size={20} className="mr-2" />
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
