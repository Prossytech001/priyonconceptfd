// "use client";

// export default function SelectedFilters({ filters, setFilters }: any) {
//   const removeFilter = (key: string) => {
//     setFilters((prev: any) => ({ ...prev, [key]: null }));
//   };

//   return (
//     <div className="flex flex-wrap gap-3 mb-6">
//       {Object.entries(filters).map(([key, val]: any) =>
//         val ? (
//           <span
//             key={key}
//             className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center gap-2"
//           >
//             {key}: {val}
//             <button
//               className="text-red-500 font-bold"
//               onClick={() => removeFilter(key)}
//             >
//               ✕
//             </button>
//           </span>
//         ) : null
//       )}
//     </div>
//   );
// }
"use client";

import React from "react";

type FilterState = {
  availability?: string | null;
  minPrice?: number | null;
  maxPrice?: number | null;
  category?: string | null;
  sub?: string | null;
  size?: string | null;
};

interface SelectedFiltersProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

export default function SelectedFilters({ filters, setFilters }: SelectedFiltersProps) {
  const removeFilter = (key: keyof FilterState) => {
    setFilters((prev) => ({ ...prev, [key]: null }));
  };

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {Object.entries(filters).map(([key, val]) =>
        val ? (
          <span
            key={key}
            className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center gap-2"
          >
            {key}: {val}
            <button
              className="text-red-500 font-bold"
              onClick={() => removeFilter(key as keyof FilterState)}
            >
              ✕
            </button>
          </span>
        ) : null
      )}
    </div>
  );
}
