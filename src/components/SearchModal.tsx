// "use client";
// import { useState, useEffect } from "react";
// import { X } from "lucide-react";
// import Link from "next/link";

// export default function SearchModal({ isOpen, onClose }: any) {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

// //   
// useEffect(() => {
//   if (!query.trim()) {
//     setResults([]);
//     return;
//   }

//   const timer = setTimeout(() => {
//     setLoading(true);
//     fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?search=${encodeURIComponent(query)}`)
//       .then(async (r) => {
//         if (!r.ok) throw new Error("Failed to fetch");
//         const data = await r.json();
//         setResults(Array.isArray(data) ? data : data.products || []);
//       })
//       .catch(() => setResults([]))
//       .finally(() => setLoading(false));
//   }, 400);

//   return () => clearTimeout(timer);
// }, [query]);


//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center p-6 animate-fadeIn"
//       onClick={onClose}
//     >
//       {/* Close button */}
//       <button
//         onClick={onClose}
//         className="absolute top-6 right-6 text-gray-600 hover:text-black"
//       >
//         <X className="w-6 h-6" />
//       </button>

//       {/* Search Input */}
//       <div
//         className="w-full max-w-3xl border-b border-gray-300 flex items-center gap-3 pb-2"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <input
//           autoFocus
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search for products, styles, or categories..."
//           className="flex-1 bg-transparent outline-none text-lg placeholder-gray-400"
//         />
//       </div>

//       {/* Results */}
//       <div
//         className="mt-8 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Suggestions */}
//         <div>
//           <h4 className="text-xs font-semibold text-gray-500 mb-3">
//             SUGGESTIONS
//           </h4>
//           <ul className="space-y-2">
//             {query && (
//               <>
//                 <li className="capitalize text-gray-700 hover:text-[var(--color-burgundy)]">
//                   {query}
//                 </li>
//                 <li className="capitalize text-gray-700 hover:text-[var(--color-burgundy)]">
//                   {query} styles
//                 </li>
//                 <li className="capitalize text-gray-700 hover:text-[var(--color-burgundy)]">
//                   {query} collection
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>

//         {/* Product Matches */}
//         <div>
//           <h4 className="text-xs font-semibold text-gray-500 mb-3">
//             PRODUCTS
//           </h4>
//           {loading ? (
//             <p className="text-sm text-gray-400">Searching...</p>
//           ) : results.length > 0 ? (
//             <ul className="space-y-3 overflow-scoll">
//               {results.slice(0, 4).map((p) => (
//                 <li key={p._id}>
//                   <Link
//                     href={`/product/${p._id}`}
//                     className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded"
//                     onClick={onClose}
//                   >
//                     <img
//                       src={p.images?.[0] || "/placeholder.jpg"}
//                       alt={p.name}
//                       className="w-16 h-16 object-cover rounded"
//                     />
//                     <div>
//                       <p className="text-sm font-medium text-gray-800">
//                         {p.name}
//                       </p>
//                       <p className="text-xs text-gray-500">
//                         ₦{p.price.toLocaleString()}
//                       </p>
//                     </div>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           ) : query ? (
//             <p className="text-sm text-gray-400">
//               No results found for “{query}”
//             </p>
//           ) : (
//             <p className="text-sm text-gray-400">Start typing to search</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  price: number;
  images?: string[];
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // 🔍 Fetch products by search query (debounced)
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(true);
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products?search=${encodeURIComponent(
          query
        )}`
      )
        .then(async (r) => {
          if (!r.ok) throw new Error("Failed to fetch");
          const data = await r.json();
          setResults(Array.isArray(data) ? data : data.products || []);
        })
        .catch(() => setResults([]))
        .finally(() => setLoading(false));
    }, 400); // ⏳ debounce 400ms

    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center p-6 animate-fadeIn"
      onClick={onClose}
    >
      {/* ❌ Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-gray-600 hover:text-black"
      >
        <X className="w-6 h-6" />
      </button>

      {/* 🔎 Search Input */}
      <div
        className="w-full max-w-3xl border-b border-gray-300 flex items-center gap-3 pb-2"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          autoFocus
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products, styles, or categories..."
          className="flex-1 bg-transparent outline-none text-lg placeholder-gray-400"
        />
      </div>

      {/* 🧩 Results Section */}
      <div
        className="mt-8 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 💡 Suggestions */}
        <div>
          <h4 className="text-xs font-semibold text-gray-500 mb-3">
            SUGGESTIONS
          </h4>
          <ul className="space-y-2">
            {query && (
              <>
                <li className="capitalize text-gray-700 hover:text-[var(--color-burgundy)] cursor-pointer">
                  {query}
                </li>
                <li className="capitalize text-gray-700 hover:text-[var(--color-burgundy)] cursor-pointer">
                  {query} styles
                </li>
                <li className="capitalize text-gray-700 hover:text-[var(--color-burgundy)] cursor-pointer">
                  {query} collection
                </li>
              </>
            )}
          </ul>
        </div>

        {/* 🛍️ Product Matches */}
        <div>
          <h4 className="text-xs font-semibold text-gray-500 mb-3">PRODUCTS</h4>

          {loading ? (
            <p className="text-sm text-gray-400">Searching...</p>
          ) : results.length > 0 ? (
            <ul className="space-y-3 overflow-scroll max-h-[400px] pr-2">
              {results.slice(0, 6).map((p) => (
                <li key={p._id}>
                  <Link
                    href={`/product/${p._id}`}
                    className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded"
                    onClick={onClose}
                  >
                    <Image
                      src={p.images?.[0] || "/placeholder.jpg"}
                      alt={p.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {p.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        ₦{p.price.toLocaleString()}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : query ? (
            <p className="text-sm text-gray-400">
              No results found for “{query}”
            </p>
          ) : (
            <p className="text-sm text-gray-400">Start typing to search</p>
          )}
        </div>
      </div>
    </div>
  );
}
