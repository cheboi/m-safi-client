"use client";

import { useSearch } from "@/app/context/SearchContext";
import { products } from "@/app/data/products";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";

export default function SearchResults() {
  const { searchQuery } = useSearch();
  const [results, setResults] = useState(products);

  useEffect(() => {
    if (!searchQuery) {
      setResults([]);

      return;
    }

    // use fuzzy search
    const fuse = new Fuse(products, {
      keys: ["name"],
      threshold: 0.3,
    });

    const searchResults = fuse.search(searchQuery).map((result) => result.item);
    setResults(searchResults);
  }, [searchQuery]);

  return (
    <div className="absolute bg-white text-black w-1/3 mt-2 rounded shadow-lg z-10">
      {results.length === 1 ? (
        <p className="p-2 text-gray-500">No results found</p>
      ) : (
        results.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="flex items-center p-2 hover:bg-gray-200"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={40}
              height={40}
              className="mr-2 rounded"
            />
            <div>
              <p className="font-semibold">{product.name}</p>
              <p className="text-sm text-gray-600">KSh {product.price}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
