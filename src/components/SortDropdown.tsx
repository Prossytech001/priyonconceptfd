// "use client";

// export default function SortDropdown({ sort, setSort }: any) {
//   return (
//     <select
//       value={sort}
//       onChange={(e) => setSort(e.target.value)}
//       className="border px-3 py-2 rounded"
//     >
//       <option value="featured">Featured</option>
//       <option value="bestselling">Best Selling</option>
//       <option value="az">Alphabetical A-Z</option>
//       <option value="za">Alphabetical Z-A</option>
//       <option value="low-high">Price: Low to High</option>
//       <option value="high-low">Price: High to Low</option>
//       <option value="old-new">Date: Old to New</option>
//       <option value="new-old">Date: New to Old</option>
//     </select>
//   );
// }
"use client";

import React from "react";

interface SortDropdownProps {
  sort: string;
  setSort: (value: string) => void;
}

export default function SortDropdown({ sort, setSort }: SortDropdownProps) {
  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      className="border px-3 py-2 rounded"
    >
      <option value="featured">Featured</option>
      <option value="bestselling">Best Selling</option>
      <option value="az">Alphabetical A-Z</option>
      <option value="za">Alphabetical Z-A</option>
      <option value="low-high">Price: Low to High</option>
      <option value="high-low">Price: High to Low</option>
      <option value="old-new">Date: Old to New</option>
      <option value="new-old">Date: New to Old</option>
    </select>
  );
}
