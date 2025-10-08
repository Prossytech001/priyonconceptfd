"use client";
export const dynamic = "force-dynamic";

import { Suspense } from "react";
import OrderSuccessPage from "./OrderPageContent";

export default function ShopPage() {
  return (
    <Suspense fallback={<p className="text-center py-20">Loading shop...</p>}>
      <OrderSuccessPage />
    </Suspense>
  );
}
