"use client";
import { useSearchParams } from "next/navigation";

export default function OrderSuccessPage() {
  const params = useSearchParams();
  const orderId = params.get("orderId");

  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold text-green-700 mb-4">🎉 Order Placed Successfully!</h1>
      <p className="text-gray-700">Your Order ID is:</p>
      <p className="text-xl font-semibold mt-2 text-[var(--color-burgundy)]">{orderId}</p>
      <p className="text-gray-500 mt-4">We’ll send updates once your order ships 🚚</p>
    </div>
  );
}
