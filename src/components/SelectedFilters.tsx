"use client";

export default function SelectedFilters({ filters, setFilters }: any) {
  const removeFilter = (key: string) => {
    setFilters((prev: any) => ({ ...prev, [key]: null }));
  };

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {Object.entries(filters).map(([key, val]: any) =>
        val ? (
          <span
            key={key}
            className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center gap-2"
          >
            {key}: {val}
            <button
              className="text-red-500 font-bold"
              onClick={() => removeFilter(key)}
            >
              ✕
            </button>
          </span>
        ) : null
      )}
    </div>
  );
}
