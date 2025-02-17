import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary-dark text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">M-Safi</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-secondary-light">
                Home
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-secondary-light">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
