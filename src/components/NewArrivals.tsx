// "use client";

// import { useEffect, useState } from "react";
// import ProductCard from "@/components/ProductCard";

// export default function NewArrivals() {
//   const [products, setProducts] = useState<any[]>([]);

//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?isNew=true`)
//       .then((res) => res.json())
//       .then(setProducts)
//       .catch((err) => console.error("Failed to fetch new arrivals:", err));
//   }, []);

//   return (
//     <section className="py-16 px-6 bg-[var(--color-neutral)]">
//       <h2
//         className="text-center text-2xl md:text-3xl font-semibold mb-10"
//         style={{ fontFamily: "var(--font-handwriting)" }}
//       >
//         NEW ARRIVALS
//       </h2>

//       {products.length > 0 ? (
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {products.map((p) => (
//             <ProductCard key={p._id} product={p} />
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-500 mt-10">
//           No new arrivals available.
//         </p>
//       )}
//       <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
// <span>Page {page} of {totalPages}</span>
// <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>

//     </section>
//   );
// }
// "use client";
// import { useEffect, useState } from "react";
// import ProductCard from "@/components/ProductCard";

// export default function NewArrivals() {
//   const [products, setProducts] = useState<any[]>([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const fetchProducts = async (pageNum = 1) => {
//     try {
//       setLoading(true);
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/products?isNew=true&page=${pageNum}&limit=8`
//       );
//       const data = await res.json();

//       setProducts(data.products || []);
//       setTotalPages(data.totalPages || 1);
//       setPage(data.currentPage || 1);
//     } catch (err) {
//       console.error("Error fetching new arrivals:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts(page);
//   }, [page]);

//   return (
//     <section className="py-14 bg-[var(--color-neutral)]">
//       <div className="container mx-auto px-6">
//         {/* Section Title */}
//         <h2
//           className="text-center text-3xl md:text-4xl font-bold mb-10 tracking-wide"
//           style={{ fontFamily: "var(--font-handwriting)", color: "var(--color-burgundy)" }}
//         >
//           NEW ARRIVALS
//         </h2>

//         {/* Product Grid */}
//         {loading ? (
//           <p className="text-center text-gray-500 py-10">Loading new arrivals...</p>
//         ) : products.length > 0 ? (
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
//             {products.map((product) => (
//               <ProductCard key={product._id} product={product} />
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 py-10">
//             No new arrivals available right now.
//           </p>
//         )}

//         {/* Pagination Controls */}
//         {totalPages > 1 && (
//           <div className="flex justify-center items-center gap-4 mt-10">
//             <button
//               onClick={() => page > 1 && setPage(page - 1)}
//               disabled={page === 1}
//               className={`px-4 py-2 rounded-md border text-sm font-medium ${
//                 page === 1
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:bg-[var(--color-gold)] hover:text-white transition"
//               }`}
//             >
//               ← Prev
//             </button>

//             <span className="text-sm font-semibold">
//               Page {page} of {totalPages}
//             </span>

//             <button
//               onClick={() => page < totalPages && setPage(page + 1)}
//               disabled={page === totalPages}
//               className={`px-4 py-2 rounded-md border text-sm font-medium ${
//                 page === totalPages
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:bg-[var(--color-gold)] hover:text-white transition"
//               }`}
//             >
//               Next →
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";
// import ProductCard from "@/components/ProductCard";

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   currency?: string;
//   images?: string[];
//   category?: string;
//   subCategory?: string;
//   isNew?: boolean;
// }

// interface ProductResponse {
//   products: Product[];
//   totalPages: number;
//   currentPage: number;
// }

// export default function NewArrivals() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [page, setPage] = useState<number>(1);
//   const [totalPages, setTotalPages] = useState<number>(1);
//   const [loading, setLoading] = useState<boolean>(false);

//   const fetchProducts = async (pageNum = 1): Promise<void> => {
//     try {
//       setLoading(true);
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/products?isNew=true&page=${pageNum}&limit=8`
//       );

//       if (!res.ok) throw new Error("Failed to fetch new arrivals");

//       const data: ProductResponse | any = await res.json();

//       setProducts(data.products || []);
//       setTotalPages(data.totalPages || 1);
//       setPage(data.currentPage || 1);
//     } catch (err) {
//       console.error("Error fetching new arrivals:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts(page);
//   }, [page]);

//   return (
//     <section className="py-14 bg-[var(--color-neutral)]">
//       <div className="container mx-auto px-6">
//         {/* Section Title */}
//         <h2
//           className="text-center text-3xl md:text-4xl font-bold mb-10 tracking-wide"
//           style={{
//             fontFamily: "var(--font-handwriting)",
//             color: "var(--color-burgundy)",
//           }}
//         >
//           NEW ARRIVALS
//         </h2>

//         {/* Product Grid */}
//         {loading ? (
//           <p className="text-center text-gray-500 py-10">
//             Loading new arrivals...
//           </p>
//         ) : products.length > 0 ? (
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
//             {products.map((product) => (
//               <ProductCard key={product._id} product={product} />
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 py-10">
//             No new arrivals available right now.
//           </p>
//         )}

//         {/* Pagination Controls */}
//         {totalPages > 1 && (
//           <div className="flex justify-center items-center gap-4 mt-10">
//             <button
//               onClick={() => page > 1 && setPage(page - 1)}
//               disabled={page === 1}
//               className={`px-4 py-2 rounded-md border text-sm font-medium ${
//                 page === 1
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:bg-[var(--color-gold)] hover:text-white transition"
//               }`}
//             >
//               ← Prev
//             </button>

//             <span className="text-sm font-semibold">
//               Page {page} of {totalPages}
//             </span>

//             <button
//               onClick={() => page < totalPages && setPage(page + 1)}
//               disabled={page === totalPages}
//               className={`px-4 py-2 rounded-md border text-sm font-medium ${
//                 page === totalPages
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:bg-[var(--color-gold)] hover:text-white transition"
//               }`}
//             >
//               Next →
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";
// import ProductCard from "@/components/ProductCard";

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   currency?: string;
//   images?: string[];
//   category?: string;
//   subCategory?: string;
//   isNew?: boolean;
// }

// interface ProductResponse {
//   products: Product[];
//   totalPages: number;
//   currentPage: number;
// }

// export default function NewArrivals() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [page, setPage] = useState<number>(1);
//   const [totalPages, setTotalPages] = useState<number>(1);
//   const [loading, setLoading] = useState<boolean>(false);

//   const fetchProducts = async (pageNum = 1): Promise<void> => {
//     try {
//       setLoading(true);
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/products?isNew=true&page=${pageNum}&limit=8`
//       );

//       if (!res.ok) throw new Error("Failed to fetch new arrivals");

//       const data = (await res.json()) as Partial<ProductResponse>;

//       setProducts(data.products ?? []);
//       setTotalPages(data.totalPages ?? 1);
//       setPage(data.currentPage ?? 1);
//     } catch (err) {
//       console.error("Error fetching new arrivals:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts(page);
//   }, [page]);

//   return (
//     <section className="py-14 bg-[var(--color-neutral)]">
//       <div className="container mx-auto px-6">
//         {/* Section Title */}
//         <h2
//           className="text-center text-3xl md:text-4xl font-bold mb-10 tracking-wide"
//           style={{
//             fontFamily: "var(--font-handwriting)",
//             color: "var(--color-burgundy)",
//           }}
//         >
//           NEW ARRIVALS
//         </h2>

//         {/* Product Grid */}
//         {loading ? (
//           <p className="text-center text-gray-500 py-10">
//             Loading new arrivals...
//           </p>
//         ) : products.length > 0 ? (
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
//             {products.map((product) => (
//               <ProductCard key={product._id} product={product} />
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 py-10">
//             No new arrivals available right now.
//           </p>
//         )}

//         {/* Pagination Controls */}
//         {totalPages > 1 && (
//           <div className="flex justify-center items-center gap-4 mt-10">
//             <button
//               onClick={() => page > 1 && setPage(page - 1)}
//               disabled={page === 1}
//               className={`px-4 py-2 rounded-md border text-sm font-medium ${
//                 page === 1
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:bg-[var(--color-gold)] hover:text-white transition"
//               }`}
//             >
//               ← Prev
//             </button>

//             <span className="text-sm font-semibold">
//               Page {page} of {totalPages}
//             </span>

//             <button
//               onClick={() => page < totalPages && setPage(page + 1)}
//               disabled={page === totalPages}
//               className={`px-4 py-2 rounded-md border text-sm font-medium ${
//                 page === totalPages
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:bg-[var(--color-gold)] hover:text-white transition"
//               }`}
//             >
//               Next →
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types/product"; // ✅ import your shared Product type
import SkeletonCard from "./SkeletonCard";

interface ProductResponse {
  products: Product[];
  totalPages: number;
  currentPage: number;
}

export default function NewArrivals() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = async (pageNum = 1): Promise<void> => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products?isNew=true&page=${pageNum}&limit=8`
      );

      if (!res.ok) throw new Error("Failed to fetch new arrivals");

      const data = (await res.json()) as Partial<ProductResponse>;

      // ✅ consistent with backend structure
      setProducts(data.products ?? []);
      setTotalPages(data.totalPages ?? 1);
      setPage(data.currentPage ?? 1);
    } catch (err) {
      console.error("Error fetching new arrivals:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  return (
    <section className="py-14 bg-[var(--color-neutral)]">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2
          className="text-center text-3xl md:text-4xl font-bold mb-10 tracking-wide"
          style={{
            fontFamily: "var(--font-handwriting)",
            color: "var(--color-burgundy)",
          }}
        >
          NEW ARRIVALS
        </h2>

        {/* Product Grid */}
        {/* {loading ? (
          <p className="text-center text-gray-500 py-10">
            Loading new arrivals...
          </p>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-10">
            No new arrivals available right now.
          </p>
        )} */}
{loading ? (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {Array.from({ length: 8 }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
) : products.length > 0 ? (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
    {products.map((product) => (
      <ProductCard key={product._id} product={product} />
    ))}
  </div>
) : (
  <p className="text-center text-gray-500 py-10">
    No products available right now.
  </p>
)}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={() => page > 1 && setPage(page - 1)}
              disabled={page === 1}
              className={`px-4 py-2 rounded-md border text-sm font-medium ${
                page === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[var(--color-gold)] hover:text-white transition"
              }`}
            >
              ← Prev
            </button>

            <span className="text-sm font-semibold">
              Page {page} of {totalPages}
            </span>

            <button
              onClick={() => page < totalPages && setPage(page + 1)}
              disabled={page === totalPages}
              className={`px-4 py-2 rounded-md border text-sm font-medium ${
                page === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[var(--color-gold)] hover:text-white transition"
              }`}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
