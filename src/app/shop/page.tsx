
"use client";
export const dynamic = "force-dynamic";

import { Suspense } from "react";
import ShopPageContent from "@/app/shop/ShopPageContent"; // move your main logic here

export default function ShopPage() {
  return (
    <Suspense fallback={<p className="text-center py-20">Loading shop...</p>}>
      <ShopPageContent />
    </Suspense>
  );
}
