"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import FilterDrawer from "@/components/FilterDrawer";
import SortDropdown from "@/components/SortDropdown";
import SelectedFilters from "@/components/SelectedFilters";
import ProductCard from "@/components/ProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Filters } from "@/types/filters";
import type { Product } from "@/types/product";

export default function ShopPageContent() {
  const searchParams = useSearchParams();

  const queryCategory = searchParams.get("category") || "";
  const querySub = searchParams.get("sub") || "";

  const [filters, setFilters] = useState<Filters>({
    availability: null,
    minPrice: undefined,
    maxPrice: undefined,
    category: queryCategory || null,
    subCategory: querySub || null,
    size: null,
  });

  const [sort, setSort] = useState("new-old");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      category: queryCategory || null,
      subCategory: querySub || null,
    }));
  }, [queryCategory, querySub]);

  useEffect(() => {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/products`;
    const params = new URLSearchParams();

    if (filters.category) params.append("category", filters.category);
    if (filters.subCategory) params.append("sub", filters.subCategory);
    if (filters.minPrice) params.append("minPrice", String(filters.minPrice));
    if (filters.maxPrice) params.append("maxPrice", String(filters.maxPrice));
    if (filters.availability === "in") params.append("inStock", "true");
    if (filters.availability === "out") params.append("inStock", "false");
    if (filters.size) params.append("size", filters.size);
    if (sort) params.append("sort", sort);

    if (params.toString()) url += `?${params.toString()}`;

    console.log("Fetching from:", url);
    fetch(url)
      .then((r) => r.json())
      .then((data) => setProducts((data.products as Product[]) || []))
      .catch((err) => console.error("Fetch error:", err));
  }, [filters, sort]);

  const getHeading = () => {
    if (filters.category === "men") return "MEN'S APPAREL";
    if (filters.category === "women") return "WOMEN'S APPAREL";
    if (filters.category === "jewelry") return "JEWELRY COLLECTION";
    if (filters.category === "accessories") return "ACCESSORIES";
    if (filters.category === "footwear") return "FOOTWEAR";
    return "ALL PRODUCTS";
  };

  const heading = getHeading();
  const filterCount = Object.entries(filters)
    .filter(([key, value]) => key !== "category" && !!value)
    .length;

  return (
    <div className="container mx-auto py-10 px-6">
      <Breadcrumbs
        category={filters.category || undefined}
        subCategory={filters.subCategory || undefined}
        currentPage="Shop"
      />

      <h1
        className="text-center text-2xl md:text-3xl font-semibold tracking-wider mb-8"
        style={{ fontFamily: "var(--font-handwriting)" }}
      >
        {heading}
      </h1>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <FilterDrawer filters={filters} setFilters={setFilters} />
          {filterCount > 0 && (
            <span className="ml-1 text-xs bg-black text-white px-2 py-1 rounded">
              {filterCount}
            </span>
          )}
        </div>
        <SortDropdown sort={sort} setSort={setSort} />
      </div>

      <SelectedFilters
        filters={Object.fromEntries(
          Object.entries(filters).filter(([key]) => key !== "category")
        )}
        setFilters={setFilters}
      />

      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-20">No products found</p>
      )}
    </div>
  );
}
