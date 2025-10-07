// "use client";
// import { useState } from "react";
// import { X } from "lucide-react";

// export default function FilterDrawer({ filters, setFilters }: any) {
//   const [open, setOpen] = useState(false);

//   const toggleFilter = (key: string, value: string | number | boolean) => {
//     setFilters((prev: any) => ({
//       ...prev,
//       [key]: prev[key] === value ? null : value,
//     }));
//   };

//   return (
//     <>
//       {/* Filter Button */}
//       <button
//         onClick={() => setOpen(true)}
//         className="border px-4 py-2 rounded-md text-sm font-medium"
//         style={{backgroundColor: "var(--color-text) ", color: "var(--color-gray)"}}
//       >
//         Filter
//       </button>

//       {/* Overlay */}
//       {open && (
//         <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setOpen(false)}>
//           {/* Drawer */}
//           <div
//             className="absolute top-0 left-0 w-80 h-full bg-white shadow-lg p-6 flex flex-col gap-6 overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Header */}
//             <div className="flex justify-between items-center border-b pb-4">
//               <h3 className="font-semibold text-lg">FILTER</h3>
//               <button onClick={() => setOpen(false)}>
//                 <X className="w-6 h-6 text-black" />
//               </button>
//             </div>

//             {/* Availability */}
//             <div>
//               <h4 className="font-medium mb-2">Availability</h4>
//               <label className="block">
//                 <input
//                   type="checkbox"
//                   checked={filters.availability === "in"}
//                   onChange={() => toggleFilter("availability", "in")}
//                 />{" "}
//                 In Stock
//               </label>
//               <label className="block">
//                 <input
//                   type="checkbox"
//                   checked={filters.availability === "out"}
//                   onChange={() => toggleFilter("availability", "out")}
//                 />{" "}
//                 Out of Stock
//               </label>
//             </div>

//             {/* Price */}
//             <div>
//               <h4 className="font-medium mb-2">Price</h4>
//               <div className="flex items-center gap-2">
//                 <input
//                   type="number"
//                   placeholder="Min"
//                   className="border p-1 w-20"
//                   value={filters.minPrice || ""}
//                   onChange={(e) =>
//                     setFilters((prev: any) => ({ ...prev, minPrice: e.target.value }))
//                   }
//                 />
//                 <span>-</span>
//                 <input
//                   type="number"
//                   placeholder="Max"
//                   className="border p-1 w-20"
//                   value={filters.maxPrice || ""}
//                   onChange={(e) =>
//                     setFilters((prev: any) => ({ ...prev, maxPrice: e.target.value }))
//                   }
//                 />
//               </div>
//             </div>

//             {/* Category */}
//             <div>
//               <h4 className="font-medium mb-2">Category</h4>
//               {["men", "women", "footwear", "accessories", "jewelry"].map((cat) => (
//                 <label key={cat} className="block capitalize">
//                   <input
//                     type="checkbox"
//                     checked={filters.category === cat}
//                     onChange={() => toggleFilter("category", cat)}
//                   />{" "}
//                   {cat}
//                 </label>
//               ))}
//             </div>

//             {/* Sizes */}
//             <div>
//               <h4 className="font-medium mb-2">Size</h4>
//               {["XS", "S", "M", "L", "XL", "40", "41", "42", "43", "44"].map((s) => (
//                 <label key={s} className="inline-block mr-3 mb-2">
//                   <input
//                     type="checkbox"
//                     checked={filters.size === s}
//                     onChange={() => toggleFilter("size", s)}
//                   />{" "}
//                   {s}
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
// "use client";
// import { useState } from "react";
// import { X } from "lucide-react";

// export default function FilterDrawer({ filters, setFilters }: any) {
//   const [open, setOpen] = useState(false);
//   const [openGroup, setOpenGroup] = useState<string | null>(null);

//   const toggleFilter = (key: string, value: string | number | boolean) => {
//     setFilters((prev: any) => ({
//       ...prev,
//       [key]: prev[key] === value ? null : value,
//     }));
//   };

//   return (
//     <>
//       {/* Filter Button */}
//       <button
//         onClick={() => setOpen(true)}
//         className="border px-4 py-2 rounded-md text-sm font-medium"
//         style={{
//           backgroundColor: "var(--color-text)",
//           color: "var(--color-gray)",
//         }}
//       >
//         Filter
//       </button>

//       {/* Overlay */}
//       {open && (
//         <div
//           className="fixed inset-0 z-40 bg-black/40"
//           onClick={() => setOpen(false)}
//         >
//           {/* Drawer */}
//           <div
//             className="absolute top-0 left-0 w-80 h-full bg-white shadow-lg p-6 flex flex-col gap-6 overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Header */}
//             <div className="flex justify-between items-center border-b pb-4">
//               <h3 className="font-semibold text-lg tracking-wider">FILTERS</h3>
//               <button onClick={() => setOpen(false)}>
//                 <X className="w-6 h-6 text-black" />
//               </button>
//             </div>

//             {/* Availability */}
//             <div>
//               <h4 className="font-medium mb-2">Availability</h4>
//               <label className="block">
//                 <input
//                   type="checkbox"
//                   checked={filters.availability === "in"}
//                   onChange={() => toggleFilter("availability", "in")}
//                   className="accent-[var(--color-burgundy)] mr-2"
//                 />
//                 In Stock
//               </label>
//               <label className="block">
//                 <input
//                   type="checkbox"
//                   checked={filters.availability === "out"}
//                   onChange={() => toggleFilter("availability", "out")}
//                   className="accent-[var(--color-burgundy)] mr-2"
//                 />
//                 Out of Stock
//               </label>
//             </div>

//             {/* Price */}
//             <div>
//               <h4 className="font-medium mb-2">Price Range (₦)</h4>
//               <div className="flex items-center gap-2">
//                 <input
//                   type="number"
//                   placeholder="Min"
//                   className="border p-1 w-20 rounded"
//                   value={filters.minPrice || ""}
//                   onChange={(e) =>
//                     setFilters((prev: any) => ({
//                       ...prev,
//                       minPrice: e.target.value,
//                     }))
//                   }
//                 />
//                 <span>-</span>
//                 <input
//                   type="number"
//                   placeholder="Max"
//                   className="border p-1 w-20 rounded"
//                   value={filters.maxPrice || ""}
//                   onChange={(e) =>
//                     setFilters((prev: any) => ({
//                       ...prev,
//                       maxPrice: e.target.value,
//                     }))
//                   }
//                 />
//               </div>
//             </div>

//             {/* Subcategories */}
//             <div>
//               <h4 className="font-medium mb-2">Subcategory</h4>
//               {[
//                 {
//                   category: "men",
//                   subs: [
//                     "shirt",
//                     "senator",
//                     "trouser",
//                     "suit",
//                     "agbada",
//                     "ankara",
//                   ],
//                 },
//                 {
//                   category: "women",
//                   subs: [
//                     "gown",
//                     "blouse",
//                     "skirt",
//                     "ankara-dress",
//                     "native-top",
//                   ],
//                 },
//                 {
//                   category: "footwear",
//                   subs: ["slipper", "shoe"],
//                 },
//                 {
//                   category: "accessories",
//                   subs: [
//                     "eyeglass",
//                     "cap",
//                     "watch",
//                     "necklace",
//                     "bracelet",
//                     "earrings",
//                   ],
//                 },
//               ].map((group) => (
//                 <div key={group.category} className="mb-3">
//                   <button
//                     className="w-full text-left text-sm font-semibold capitalize text-gray-700 flex justify-between"
//                     onClick={() =>
//                       setOpenGroup(
//                         openGroup === group.category ? null : group.category
//                       )
//                     }
//                   >
//                     {group.category}
//                     <span>{openGroup === group.category ? "−" : "+"}</span>
//                   </button>

//                   {openGroup === group.category && (
//                     <div className="mt-2 ml-2 space-y-1">
//                       {group.subs.map((sub) => (
//                         <label
//                           key={sub}
//                           className="block ml-2 capitalize text-sm text-gray-600"
//                         >
//                           <input
//                             type="checkbox"
//                             checked={filters.subCategory === sub}
//                             onChange={() => toggleFilter("subCategory", sub)}
//                             className="mr-2 accent-[var(--color-burgundy)]"
//                           />
//                           {sub.replace("-", " ")}
//                         </label>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Sizes */}
//             <div>
//               <h4 className="font-medium mb-2">Size</h4>
//               {["XS", "S", "M", "L", "XL", "40", "41", "42", "43", "44"].map(
//                 (s) => (
//                   <label key={s} className="inline-block mr-3 mb-2">
//                     <input
//                       type="checkbox"
//                       checked={filters.size === s}
//                       onChange={() => toggleFilter("size", s)}
//                       className="accent-[var(--color-burgundy)] mr-1"
//                     />
//                     {s}
//                   </label>
//                 )
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
// "use client";
// import { useState, useEffect, useMemo } from "react";
// import { X } from "lucide-react";
// import { useRouter, useSearchParams } from "next/navigation";

// export default function FilterDrawer({ filters, setFilters }: any) {
//   const [open, setOpen] = useState(false);
//   const [openGroup, setOpenGroup] = useState<string | null>(null);
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const categoryFromUrl = searchParams.get("category");

//   // ✅ Define all category → subcategory mappings
//   const categories = useMemo(
//     () => ({
//       men: ["shirt", "senator", "trouser", "suit", "agbada", "ankara"],
//       women: ["gown", "blouse", "skirt", "ankara-dress", "native-top"],
//       footwear: ["slipper", "shoe"],
//       accessories: [
//         "eyeglass",
//         "cap",
//         "watch",
//         "necklace",
//         "bracelet",
//         "earrings",
//       ],
//     }),
//     []
//   );

//   // ✅ Automatically show only the subs for current category
//   const subcategories =
//     (categoryFromUrl && categories[categoryFromUrl]) || [];

//   const updateUrl = (key: string, value: string | number | boolean | null) => {
//     const params = new URLSearchParams(searchParams.toString());

//     if (value) params.set(key, String(value));
//     else params.delete(key);

//     router.replace(`/shop?${params.toString()}`);
//   };

//   const toggleFilter = (key: string, value: string | number | boolean) => {
//     setFilters((prev: any) => {
//       const newValue = prev[key] === value ? null : value;
//       const updated = { ...prev, [key]: newValue };

//       // ✅ Keep URL synced
//       if (key === "subCategory") updateUrl("sub", newValue);
//       if (key === "category") updateUrl("category", newValue);

//       return updated;
//     });
//   };

//   return (
//     <>
//       {/* Filter Button */}
//       <button
//         onClick={() => setOpen(true)}
//         className="border px-4 py-2 rounded-md text-sm font-medium"
//         style={{
//           backgroundColor: "var(--color-text)",
//           color: "var(--color-gray)",
//         }}
//       >
//         Filter
//       </button>

//       {/* Overlay */}
//       {open && (
//         <div
//           className="fixed inset-0 z-40 bg-black/40"
//           onClick={() => setOpen(false)}
//         >
//           <div
//             className="absolute top-0 left-0 w-80 h-full bg-white shadow-lg p-6 flex flex-col gap-6 overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Header */}
//             <div className="flex justify-between items-center border-b pb-4">
//               <h3 className="font-semibold text-lg tracking-wider">
//                 FILTER
//               </h3>
//               <button onClick={() => setOpen(false)}>
//                 <X className="w-6 h-6 text-black" />
//               </button>
//             </div>

//             {/* Availability */}
//             <div>
//               <h4 className="font-medium mb-2">Availability</h4>
//               <label className="block">
//                 <input
//                   type="checkbox"
//                   checked={filters.availability === "in"}
//                   onChange={() => toggleFilter("availability", "in")}
//                   className="accent-[var(--color-burgundy)] mr-2"
//                 />
//                 In Stock
//               </label>
//               <label className="block">
//                 <input
//                   type="checkbox"
//                   checked={filters.availability === "out"}
//                   onChange={() => toggleFilter("availability", "out")}
//                   className="accent-[var(--color-burgundy)] mr-2"
//                 />
//                 Out of Stock
//               </label>
//             </div>

//             {/* Price */}
//             <div>
//               <h4 className="font-medium mb-2">Price Range (₦)</h4>
//               <div className="flex items-center gap-2">
//                 <input
//                   type="number"
//                   placeholder="Min"
//                   className="border p-1 w-20 rounded"
//                   value={filters.minPrice || ""}
//                   onChange={(e) =>
//                     setFilters((prev: any) => ({
//                       ...prev,
//                       minPrice: e.target.value,
//                     }))
//                   }
//                 />
//                 <span>-</span>
//                 <input
//                   type="number"
//                   placeholder="Max"
//                   className="border p-1 w-20 rounded"
//                   value={filters.maxPrice || ""}
//                   onChange={(e) =>
//                     setFilters((prev: any) => ({
//                       ...prev,
//                       maxPrice: e.target.value,
//                     }))
//                   }
//                 />
//               </div>
//             </div>

//             {/* Subcategory (based on selected category) */}
//             {categoryFromUrl && (
//               <div>
//                 <h4 className="font-medium mb-2 capitalize">
//                   {categoryFromUrl} Subcategories
//                 </h4>

//                 {subcategories.map((sub) => (
//                   <label
//                     key={sub}
//                     className="block capitalize text-sm text-gray-600 ml-2"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={filters.subCategory === sub}
//                       onChange={() => {
//                         toggleFilter("subCategory", sub);
//                         setFilters((prev: any) => ({
//                           ...prev,
//                           category: categoryFromUrl,
//                         }));
//                       }}
//                       className="mr-2 accent-[var(--color-burgundy)]"
//                     />
//                     {sub.replace("-", " ")}
//                   </label>
//                 ))}
//               </div>
//             )}

//             {/* Sizes */}
//             <div>
//               <h4 className="font-medium mb-2">Size</h4>
//               {["XS", "S", "M", "L", "XL", "40", "41", "42", "43", "44"].map(
//                 (s) => (
//                   <label key={s} className="inline-block mr-3 mb-2">
//                     <input
//                       type="checkbox"
//                       checked={filters.size === s}
//                       onChange={() => toggleFilter("size", s)}
//                       className="accent-[var(--color-burgundy)] mr-1"
//                     />
//                     {s}
//                   </label>
//                 )
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
// "use client";
// import { useState, useEffect, useMemo } from "react";
// import { X } from "lucide-react";
// import { useRouter, useSearchParams } from "next/navigation";

// export default function FilterDrawer({ filters, setFilters }: any) {
//   const [open, setOpen] = useState(false);
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const categoryFromUrl = searchParams.get("category");

//   // ✅ All category → subcategory mapping
//   const categories = useMemo(
//     () => ({
//       men: ["shirt", "senator", "trouser", "suit", "agbada", "ankara"],
//       women: ["gown", "blouse", "skirt", "ankara", "native-top"],
//       footwear: ["slipper", "shoe"],
//       accessories: [
//         "eyeglass",
//         "cap",
//         "watch",
//         "necklace",
//         "bracelet",
//         "earrings",
//       ],
//     }),
//     []
//   );

//   // ✅ Show only relevant subcategories
//   const subcategories = useMemo(
//     () => (categoryFromUrl ? categories[categoryFromUrl] || [] : []),
//     [categoryFromUrl, categories]
//   );

//   // ✅ Update the URL when filters change (safe to run after render)
//   useEffect(() => {
//     const params = new URLSearchParams(searchParams.toString());

//     if (filters.category) params.set("category", filters.category);
//     if (filters.subCategory) params.set("sub", filters.subCategory);
//     else params.delete("sub");

//     router.replace(`/shop?${params.toString()}`);
//   }, [filters.category, filters.subCategory]); // eslint-disable-line react-hooks/exhaustive-deps

//   // ✅ Handle toggles safely
//   const toggleFilter = (key: string, value: string | number | boolean) => {
//     setFilters((prev: any) => ({
//       ...prev,
//       [key]: prev[key] === value ? null : value,
//     }));
//   };

//   return (
//     <>
//       {/* Filter Button */}
//       <button
//         onClick={() => setOpen(true)}
//         className="border px-4 py-2 rounded-md text-sm font-medium"
//         style={{
//           backgroundColor: "var(--color-text)",
//           color: "var(--color-gray)",
//         }}
//       >
//         Filter
//       </button>

//       {/* Overlay */}
//       {open && (
//         <div
//           className="fixed inset-0 z-40 bg-black/40"
//           onClick={() => setOpen(false)}
//         >
//           <div
//             className="absolute top-0 left-0 w-80 h-full bg-white shadow-lg p-6 flex flex-col gap-6 overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Header */}
//             <div className="flex justify-between items-center border-b pb-4">
//               <h3 className="font-semibold text-lg tracking-wider">FILTER</h3>
//               <button onClick={() => setOpen(false)}>
//                 <X className="w-6 h-6 text-black" />
//               </button>
//             </div>

//             {/* Availability */}
//             <div>
//               <h4 className="font-medium mb-2">Availability</h4>
//               <label className="block">
//                 <input
//                   type="checkbox"
//                   checked={filters.availability === "in"}
//                   onChange={() => toggleFilter("availability", "in")}
//                   className="accent-[var(--color-burgundy)] mr-2"
//                 />
//                 In Stock
//               </label>
//               <label className="block">
//                 <input
//                   type="checkbox"
//                   checked={filters.availability === "out"}
//                   onChange={() => toggleFilter("availability", "out")}
//                   className="accent-[var(--color-burgundy)] mr-2"
//                 />
//                 Out of Stock
//               </label>
//             </div>

//             {/* Price */}
//             <div>
//               <h4 className="font-medium mb-2">Price Range (₦)</h4>
//               <div className="flex items-center gap-2">
//                 <input
//                   type="number"
//                   placeholder="Min"
//                   className="border p-1 w-20 rounded"
//                   value={filters.minPrice || ""}
//                   onChange={(e) =>
//                     setFilters((prev: any) => ({
//                       ...prev,
//                       minPrice: e.target.value,
//                     }))
//                   }
//                 />
//                 <span>-</span>
//                 <input
//                   type="number"
//                   placeholder="Max"
//                   className="border p-1 w-20 rounded"
//                   value={filters.maxPrice || ""}
//                   onChange={(e) =>
//                     setFilters((prev: any) => ({
//                       ...prev,
//                       maxPrice: e.target.value,
//                     }))
//                   }
//                 />
//               </div>
//             </div>

//             {/* Subcategories */}
//             {categoryFromUrl && (
//               <div>
//                 <h4 className="font-medium mb-2 capitalize">
//                   {categoryFromUrl} Subcategories
//                 </h4>
//                 {subcategories.map((sub) => (
//                   <label
//                     key={sub}
//                     className="block capitalize text-sm text-gray-600 ml-2"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={filters.subCategory === sub}
//                       onChange={() => {
//                         toggleFilter("subCategory", sub);
//                         setFilters((prev: any) => ({
//                           ...prev,
//                           category: categoryFromUrl,
//                         }));
//                       }}
//                       className="mr-2 accent-[var(--color-burgundy)]"
//                     />
//                     {sub.replace("-", " ")}
//                   </label>
//                 ))}
//               </div>
//             )}

//             {/* Sizes */}
//             <div>
//               <h4 className="font-medium mb-2">Size</h4>
//               {["XS", "S", "M", "L", "XL", "40", "41", "42", "43", "44"].map(
//                 (s) => (
//                   <label key={s} className="inline-block mr-3 mb-2">
//                     <input
//                       type="checkbox"
//                       checked={filters.size === s}
//                       onChange={() => toggleFilter("size", s)}
//                       className="accent-[var(--color-burgundy)] mr-1"
//                     />
//                     {s}
//                   </label>
//                 )
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
// "use client";

// import { useState, useEffect, useMemo } from "react";
// import { X } from "lucide-react";
// import { useRouter, useSearchParams } from "next/navigation";

// // Shared type for filters (same as in FiltersSidebar)
// export interface Filters {
//   availability?: "in" | "out" | null;
//   minPrice?: number | "";
//   maxPrice?: number | "";
//   category?: string | null;
//   subCategory?: string | null;
//   size?: string | null;
// }

// interface FilterDrawerProps {
//   filters: Filters;
//   setFilters: React.Dispatch<React.SetStateAction<Filters>>;
// }

// export default function FilterDrawer({ filters, setFilters }: FilterDrawerProps) {
//   const [open, setOpen] = useState(false);
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const categoryFromUrl = searchParams.get("category");

//   // ✅ Category → Subcategory mapping
//   const categories = useMemo(
//     () => ({
//       men: ["shirt", "senator", "trouser", "suit", "agbada", "ankara"],
//       women: ["gown", "blouse", "skirt", "ankara", "native-top"],
//       footwear: ["slipper", "shoe"],
//       accessories: ["eyeglass", "cap", "watch", "necklace", "bracelet", "earrings"],
//     }),
//     []
//   );

//   // ✅ Relevant subcategories
//   const subcategories = useMemo(
//     () => (categoryFromUrl ? categories[categoryFromUrl as keyof typeof categories] || [] : []),
//     [categoryFromUrl, categories]
//   );

//   // ✅ Sync filters → URL
//   useEffect(() => {
//     const params = new URLSearchParams(searchParams.toString());

//     if (filters.category) params.set("category", filters.category);
//     if (filters.subCategory) params.set("sub", filters.subCategory);
//     else params.delete("sub");

//     router.replace(`/shop?${params.toString()}`);
//   }, [filters.category, filters.subCategory]); // eslint-disable-line react-hooks/exhaustive-deps

//   // ✅ Toggle helper
//   const toggleFilter = (key: keyof Filters, value: string | number | boolean | null) => {
//     setFilters((prev) => ({
//       ...prev,
//       [key]: prev[key] === value ? null : (value as any),
//     }));
//   };

//   return (
//     <>
//       {/* Filter Button */}
//       <button
//         onClick={() => setOpen(true)}
//         className="border px-4 py-2 rounded-md text-sm font-medium"
//         style={{
//           backgroundColor: "var(--color-text)",
//           color: "var(--color-gray)",
//         }}
//       >
//         Filter
//       </button>

//       {/* Drawer Overlay */}
//       {open && (
//         <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setOpen(false)}>
//           <div
//             className="absolute top-0 left-0 w-80 h-full bg-white shadow-lg p-6 flex flex-col gap-6 overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Header */}
//             <div className="flex justify-between items-center border-b pb-4">
//               <h3 className="font-semibold text-lg tracking-wider">FILTER</h3>
//               <button onClick={() => setOpen(false)}>
//                 <X className="w-6 h-6 text-black" />
//               </button>
//             </div>

//             {/* Availability */}
//             <div>
//               <h4 className="font-medium mb-2">Availability</h4>
//               <label className="block">
//                 <input
//                   type="checkbox"
//                   checked={filters.availability === "in"}
//                   onChange={() => toggleFilter("availability", "in")}
//                   className="accent-[var(--color-burgundy)] mr-2"
//                 />
//                 In Stock
//               </label>
//               <label className="block">
//                 <input
//                   type="checkbox"
//                   checked={filters.availability === "out"}
//                   onChange={() => toggleFilter("availability", "out")}
//                   className="accent-[var(--color-burgundy)] mr-2"
//                 />
//                 Out of Stock
//               </label>
//             </div>

//             {/* Price */}
//             <div>
//               <h4 className="font-medium mb-2">Price Range (₦)</h4>
//               <div className="flex items-center gap-2">
//                 <input
//                   type="number"
//                   placeholder="Min"
//                   className="border p-1 w-20 rounded"
//                   value={filters.minPrice || ""}
//                   onChange={(e) =>
//                     setFilters((prev) => ({
//                       ...prev,
//                       minPrice: e.target.value ? Number(e.target.value) : "",
//                     }))
//                   }
//                 />
//                 <span>-</span>
//                 <input
//                   type="number"
//                   placeholder="Max"
//                   className="border p-1 w-20 rounded"
//                   value={filters.maxPrice || ""}
//                   onChange={(e) =>
//                     setFilters((prev) => ({
//                       ...prev,
//                       maxPrice: e.target.value ? Number(e.target.value) : "",
//                     }))
//                   }
//                 />
//               </div>
//             </div>

//             {/* Subcategories */}
//             {categoryFromUrl && (
//               <div>
//                 <h4 className="font-medium mb-2 capitalize">
//                   {categoryFromUrl} Subcategories
//                 </h4>
//                 {subcategories.map((sub) => (
//                   <label
//                     key={sub}
//                     className="block capitalize text-sm text-gray-600 ml-2"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={filters.subCategory === sub}
//                       onChange={() => {
//                         toggleFilter("subCategory", sub);
//                         setFilters((prev) => ({
//                           ...prev,
//                           category: categoryFromUrl,
//                         }));
//                       }}
//                       className="mr-2 accent-[var(--color-burgundy)]"
//                     />
//                     {sub.replace("-", " ")}
//                   </label>
//                 ))}
//               </div>
//             )}

//             {/* Sizes */}
//             <div>
//               <h4 className="font-medium mb-2">Size</h4>
//               {["XS", "S", "M", "L", "XL", "40", "41", "42", "43", "44"].map((s) => (
//                 <label key={s} className="inline-block mr-3 mb-2">
//                   <input
//                     type="checkbox"
//                     checked={filters.size === s}
//                     onChange={() => toggleFilter("size", s)}
//                     className="accent-[var(--color-burgundy)] mr-1"
//                   />
//                   {s}
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
"use client";

import { useState, useEffect, useMemo } from "react";
import { X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export interface Filters {
  availability?: "in" | "out" | null;
  minPrice?: number | "";
  maxPrice?: number | "";
  category?: string | null;
  subCategory?: string | null;
  size?: string | null;
}

interface FilterDrawerProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export default function FilterDrawer({ filters, setFilters }: FilterDrawerProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryFromUrl = searchParams.get("category");

  const categories = useMemo(
    () => ({
      men: ["shirt", "senator", "trouser", "suit", "agbada", "ankara"],
      women: ["gown", "blouse", "skirt", "ankara", "native-top"],
      footwear: ["slipper", "shoe"],
      accessories: ["eyeglass", "cap", "watch", "necklace", "bracelet", "earrings"],
    }),
    []
  );

  const subcategories = useMemo(
    () => (categoryFromUrl ? categories[categoryFromUrl as keyof typeof categories] || [] : []),
    [categoryFromUrl, categories]
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (filters.category) params.set("category", filters.category);
    if (filters.subCategory) params.set("sub", filters.subCategory);
    else params.delete("sub");

    router.replace(`/shop?${params.toString()}`);
  }, [filters.category, filters.subCategory]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleFilter = (key: keyof Filters, value: string | number | boolean | null) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? null : (value as Filters[keyof Filters]),
    }));
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="border px-4 py-2 rounded-md text-sm font-medium"
        style={{
          backgroundColor: "var(--color-text)",
          color: "var(--color-gray)",
        }}
      >
        Filter
      </button>

      {open && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setOpen(false)}>
          <div
            className="absolute top-0 left-0 w-80 h-full bg-white shadow-lg p-6 flex flex-col gap-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b pb-4">
              <h3 className="font-semibold text-lg tracking-wider">FILTER</h3>
              <button onClick={() => setOpen(false)}>
                <X className="w-6 h-6 text-black" />
              </button>
            </div>

            <div>
              <h4 className="font-medium mb-2">Availability</h4>
              <label className="block">
                <input
                  type="checkbox"
                  checked={filters.availability === "in"}
                  onChange={() => toggleFilter("availability", "in")}
                  className="accent-[var(--color-burgundy)] mr-2"
                />
                In Stock
              </label>
              <label className="block">
                <input
                  type="checkbox"
                  checked={filters.availability === "out"}
                  onChange={() => toggleFilter("availability", "out")}
                  className="accent-[var(--color-burgundy)] mr-2"
                />
                Out of Stock
              </label>
            </div>

            <div>
              <h4 className="font-medium mb-2">Price Range (₦)</h4>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="border p-1 w-20 rounded"
                  value={filters.minPrice || ""}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      minPrice: e.target.value ? Number(e.target.value) : "",
                    }))
                  }
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="border p-1 w-20 rounded"
                  value={filters.maxPrice || ""}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      maxPrice: e.target.value ? Number(e.target.value) : "",
                    }))
                  }
                />
              </div>
            </div>

            {categoryFromUrl && (
              <div>
                <h4 className="font-medium mb-2 capitalize">
                  {categoryFromUrl} Subcategories
                </h4>
                {subcategories.map((sub) => (
                  <label
                    key={sub}
                    className="block capitalize text-sm text-gray-600 ml-2"
                  >
                    <input
                      type="checkbox"
                      checked={filters.subCategory === sub}
                      onChange={() => {
                        toggleFilter("subCategory", sub);
                        setFilters((prev) => ({
                          ...prev,
                          category: categoryFromUrl,
                        }));
                      }}
                      className="mr-2 accent-[var(--color-burgundy)]"
                    />
                    {sub.replace("-", " ")}
                  </label>
                ))}
              </div>
            )}

            <div>
              <h4 className="font-medium mb-2">Size</h4>
              {["XS", "S", "M", "L", "XL", "40", "41", "42", "43", "44"].map((s) => (
                <label key={s} className="inline-block mr-3 mb-2">
                  <input
                    type="checkbox"
                    checked={filters.size === s}
                    onChange={() => toggleFilter("size", s)}
                    className="accent-[var(--color-burgundy)] mr-1"
                  />
                  {s}
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
