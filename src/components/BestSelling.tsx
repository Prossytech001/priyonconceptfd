"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function BestSelling() {
  const [products, setProducts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (pageNum = 1) => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products?isBestSeller=true&page=${pageNum}&limit=8`
      );
      const data = await res.json();

      setProducts(data.products || []);
      setTotalPages(data.totalPages || 1);
      setPage(data.currentPage || 1);
    } catch (err) {
      console.error("Error fetching best selling products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2
          className="text-center text-3xl md:text-4xl font-bold mb-10 tracking-wide"
          style={{ fontFamily: "var(--font-handwriting)", color: "var( --color-burgundy)" }}
        >
          BEST SELLING
        </h2>

        {/* Products Grid */}
        {loading ? (
          <p className="text-center text-gray-500 py-10">Loading best selling items...</p>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-10">
            No best selling products available right now.
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
