import Link from "next/link";

export default function SubHeader() {
  return (
    <div className="bg-primary-light text-gray-800 p-2 shadow-md">
      <div className="container mx-auto flex justify-center space-x-6 text-sm font-semibold">
        <Link href="/deals" className="hover:text-primary-dark">
          Today&apos;s Deals
        </Link>
        <Link href="#" className="hover:text-primary-dark">
          Customer Service
        </Link>
        <Link href="#" className="hover:text-primary-dark">
          Registry
        </Link>
        <Link href="#" className="hover:text-primary-dark">
          Sell
        </Link>
      </div>
    </div>
  );
}
