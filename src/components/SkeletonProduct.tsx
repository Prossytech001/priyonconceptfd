"use client";

export default function SkeletonProduct() {
  return (
    <div className="animate-pulse container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-gray-200 h-[500px] rounded-lg" />
        <div className="space-y-5">
          <div className="h-8 bg-gray-200 rounded w-3/4" />
          <div className="h-6 bg-gray-200 rounded w-1/2" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
          <div className="h-10 bg-gray-200 rounded w-1/3 mt-4" />
        </div>
      </div>
    </div>
  );
}
