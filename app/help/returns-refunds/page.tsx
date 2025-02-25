"use client";

import { useState, useEffect } from "react";
import { RefreshCcw, CreditCard, ShieldCheck, Mail, Phone } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import faqsData from "@/app/data/faqs.json";

export default function ReturnsRefunds() {
  const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([]);

  useEffect(() => {
    setFaqs(faqsData);
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg">
          {/* Page Title */}
          <h1 className="text-3xl font-semibold text-primary-dark mb-6">
            Returns & Refunds
          </h1>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-secondary-dark flex items-center gap-2">
              <ShieldCheck size={24} /> Our Return Policy
            </h2>
            <p className="text-gray-600 mt-2">
              If you're not satisfied with your purchase, you can return it
              within <span className="font-bold">14 days</span> of delivery.
              Items must be unused, in their original packaging, and accompanied
              by a receipt or proof of purchase.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-secondary-dark flex items-center gap-2">
              <RefreshCcw size={24} /> How to Return an Item
            </h2>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>
                Ensure the product is in its original condition and packaging.
              </li>
              <li>Contact our support team to initiate a return request.</li>
              <li>We will provide a return shipping label if applicable.</li>
              <li>Drop off the package at the nearest courier service.</li>
              <li>
                Once received and inspected, your refund will be processed
                within 5-7 business days.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-secondary-dark flex items-center gap-2">
              <CreditCard size={24} /> Refund Policy
            </h2>
            <p className="text-gray-600 mt-2">
              Refunds will be credited back to your original payment method. If
              you paid via mobile money, bank transfer, or PayPal, please allow
              up to <span className="font-bold">7-10 business days</span> for
              processing.
            </p>
          </div>

          {/* FAQs Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-secondary-dark">
              Frequently Asked Questions
            </h2>
            {faqs.map((faq, index) => (
              <div key={index} className="mt-2 border-b border-gray-300 pb-2">
                <p className="text-gray-700 font-bold">{faq.question}</p>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Contact  */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-secondary-dark flex items-center gap-2">
              <Mail size={24} /> Need Help?
            </h2>
            <p className="text-gray-600 mt-2">
              If you have any questions, feel free to contact our customer
              support team:
            </p>
            <div className="mt-2">
              <p className="text-gray-700 flex items-center gap-2">
                <Phone size={18} /> +254 720053640
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <Mail size={18} /> support@msafi.com
              </p>
            </div>
          </div>

          {/* Return Button */}
          <div className="text-center">
            <button className="bg-secondary-dark text-white px-6 py-3 rounded-md text-lg hover:bg-secondary-light">
              Request a Return
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
