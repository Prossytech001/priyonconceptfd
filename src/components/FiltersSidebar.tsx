// "use client";

// import React from "react";

// // Define the shape of filters your sidebar manages
// export interface Filters {
//   availability?: "in" | "out" | null;
//   minPrice?: number | "";
//   maxPrice?: number | "";
//   subCategory?: string | null;
//   size?: string | null;
// }

// // Props type for the component
// interface FiltersSidebarProps {
//   filters: Filters;
//   setFilters: React.Dispatch<React.SetStateAction<Filters>>;
// }

// export default function FiltersSidebar({ filters, setFilters }: FiltersSidebarProps) {
//   const toggleFilter = (key: keyof Filters, value: string | number | boolean | null) => {
//     setFilters((prev) => ({
//       ...prev,
//       [key]: prev[key] === value ? null : (value as any),
//     }));
//   };

//   return (
//     <aside className="w-full md:w-64 p-4 border-r border-gray-200">
//       <h3 className="font-semibold mb-4">Filters</h3>

//       {/* Availability */}
//       <div className="mb-6">
//         <h4 className="font-medium mb-2">Availability</h4>
//         <label className="block">
//           <input
//             type="checkbox"
//             checked={filters.availability === "in"}
//             onChange={() => toggleFilter("availability", "in")}
//           />{" "}
//           In Stock
//         </label>
//         <label className="block">
//           <input
//             type="checkbox"
//             checked={filters.availability === "out"}
//             onChange={() => toggleFilter("availability", "out")}
//           />{" "}
//           Out of Stock
//         </label>
//       </div>

//       {/* Price */}
//       <div className="mb-6">
//         <h4 className="font-medium mb-2">Price</h4>
//         <input
//           type="number"
//           placeholder="Min"
//           className="border p-1 mr-2 w-20"
//           value={filters.minPrice || ""}
//           onChange={(e) =>
//             setFilters((prev) => ({
//               ...prev,
//               minPrice: e.target.value ? Number(e.target.value) : "",
//             }))
//           }
//         />
//         <input
//           type="number"
//           placeholder="Max"
//           className="border p-1 w-20"
//           value={filters.maxPrice || ""}
//           onChange={(e) =>
//             setFilters((prev) => ({
//               ...prev,
//               maxPrice: e.target.value ? Number(e.target.value) : "",
//             }))
//           }
//         />
//       </div>

//       {/* Subcategory */}
//       <div className="mb-6">
//         <h4 className="font-medium mb-2">Subcategory</h4>

//         {[
//           { category: "men", subs: ["shirt", "senator", "trouser", "suit", "agbada", "ankara"] },
//           { category: "women", subs: ["gown", "blouse", "skirt", "ankara-dress", "native-top"] },
//           { category: "footwear", subs: ["slipper", "shoe"] },
//           { category: "accessories", subs: ["eyeglass", "cap", "watch", "necklace", "bracelet", "earrings"] },
//         ].map((group) => (
//           <div key={group.category} className="mb-3">
//             <h5 className="text-sm font-semibold capitalize text-gray-700">{group.category}</h5>
//             {group.subs.map((sub) => (
//               <label key={sub} className="block ml-3 capitalize text-sm text-gray-600">
//                 <input
//                   type="checkbox"
//                   checked={filters.subCategory === sub}
//                   onChange={() => toggleFilter("subCategory", sub)}
//                   className="mr-2 accent-[var(--color-burgundy)]"
//                 />
//                 {sub.replace("-", " ")}
//               </label>
//             ))}
//           </div>
//         ))}
//       </div>

//       {/* Sizes */}
//       <div>
//         <h4 className="font-medium mb-2">Size</h4>
//         {["XS", "S", "M", "L", "XL", "40", "41", "42", "43", "44"].map((s) => (
//           <label key={s} className="inline-block mr-3 mb-2">
//             <input
//               type="checkbox"
//               checked={filters.size === s}
//               onChange={() => toggleFilter("size", s)}
//             />{" "}
//             {s}
//           </label>
//         ))}
//       </div>
//     </aside>
//   );
// }
import React from "react";

export interface Filters {
  availability?: "in" | "out" | null;
  minPrice?: number | "";
  maxPrice?: number | "";
  subCategory?: string | null;
  size?: string | null;
}

interface FiltersSidebarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export default function FiltersSidebar({ filters, setFilters }: FiltersSidebarProps) {
  const toggleFilter = (key: keyof Filters, value: string | number | boolean | null) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? null : (value as Filters[keyof Filters]),
    }));
  };

  return (
    <aside className="w-full md:w-64 p-4 border-r border-gray-200">
      <h3 className="font-semibold mb-4">Filters</h3>

      {/* Availability */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Availability</h4>
        <label className="block">
          <input
            type="checkbox"
            checked={filters.availability === "in"}
            onChange={() => toggleFilter("availability", "in")}
          />{" "}
          In Stock
        </label>
        <label className="block">
          <input
            type="checkbox"
            checked={filters.availability === "out"}
            onChange={() => toggleFilter("availability", "out")}
          />{" "}
          Out of Stock
        </label>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Price</h4>
        <input
          type="number"
          placeholder="Min"
          className="border p-1 mr-2 w-20"
          value={filters.minPrice || ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              minPrice: e.target.value ? Number(e.target.value) : "",
            }))
          }
        />
        <input
          type="number"
          placeholder="Max"
          className="border p-1 w-20"
          value={filters.maxPrice || ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              maxPrice: e.target.value ? Number(e.target.value) : "",
            }))
          }
        />
      </div>

      {/* Subcategory */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Subcategory</h4>
        {[
          { category: "men", subs: ["shirt", "senator", "trouser", "suit", "agbada", "ankara"] },
          { category: "women", subs: ["gown", "blouse", "skirt", "ankara-dress", "native-top"] },
          { category: "footwear", subs: ["slipper", "shoe"] },
          { category: "accessories", subs: ["eyeglass", "cap", "watch", "necklace", "bracelet", "earrings"] },
        ].map((group) => (
          <div key={group.category} className="mb-3">
            <h5 className="text-sm font-semibold capitalize text-gray-700">{group.category}</h5>
            {group.subs.map((sub) => (
              <label key={sub} className="block ml-3 capitalize text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={filters.subCategory === sub}
                  onChange={() => toggleFilter("subCategory", sub)}
                  className="mr-2 accent-[var(--color-burgundy)]"
                />
                {sub.replace("-", " ")}
              </label>
            ))}
          </div>
        ))}
      </div>

      {/* Sizes */}
      <div>
        <h4 className="font-medium mb-2">Size</h4>
        {["XS", "S", "M", "L", "XL", "40", "41", "42", "43", "44"].map((s) => (
          <label key={s} className="inline-block mr-3 mb-2">
            <input
              type="checkbox"
              checked={filters.size === s}
              onChange={() => toggleFilter("size", s)}
            />{" "}
            {s}
          </label>
        ))}
      </div>
    </aside>
  );
}
