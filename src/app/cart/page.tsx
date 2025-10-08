
// "use client";
// import Image from "next/image";
// import { useCart } from "@/store/cart";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { isLoggedIn } from "@/lib/auth";
// import { Plus, Minus, Trash2 } from "lucide-react";
// import { useState } from "react";
// import { apiRequest } from "@/lib/api";

// export default function CartPage() {
//   const router = useRouter();
//   const { items, updateQty, removeItem, clearCart } = useCart();
//   const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
//     const [loading, setLoading] = useState(false);

//   const handleCheckout = async () => {
//   if (items.length === 0) return;
//   setLoading(true);

//   try {
//     await apiRequest("/api/auth/verify", "GET"); // checks cookie validity
//     router.push("/checkout");
//   } catch {
//     router.push("/signup");
//   } finally {
//     setLoading(false);
//   }
// };


//   if (items.length === 0) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
//         <h2
//           className="text-2xl font-semibold mb-4"
//           style={{ fontFamily: "var(--font-heading)" }}
//         >
//           Your cart is empty 🛍️
//         </h2>
//         <Link
//           href="/shop"
//           className="text-[var(--color-burgundy)] font-medium underline hover:text-[var(--color-gold)]"
//         >
//           Continue Shopping
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 md:px-8 py-12 grid md:grid-cols-3 gap-10">
//       {/* LEFT — CART ITEMS */}
//       <div className="md:col-span-2 space-y-6">
//         <h1
//           className="text-2xl font-semibold mb-6 tracking-wide"
//           style={{ fontFamily: "var(--font-handwriting)" }}
//         >
//           Your Shopping Bag ({items.length})
//         </h1>

//         {items.map((item) => (
//           <div
//             key={`${item._id}-${item.color || ""}`}
//             className="flex items-center gap-4 border-b pb-6"
//           >
//             {/* ✅ Replaced <img> with Next.js <Image> */}
//             <div className="relative w-24 h-24">
//               <Image
//                 src={item.image || "/placeholder.jpg"}
//                 alt={item.name}
//                 fill
//                 className="object-cover rounded-md border"
//                 sizes="96px"
//                 priority
//               />
//             </div>

//             <div className="flex-1">
//               <h3 className="font-medium text-gray-900">{item.name}</h3>
//               {item.color && (
//                 <p className="text-sm text-gray-500 mt-1">
//                   Color: <span className="capitalize">{item.color}</span>
//                 </p>
//               )}
//               <p className="text-[var(--color-burgundy)] font-semibold mt-2">
//                 ₦{item.price.toLocaleString()}
//               </p>
//             </div>

//             {/* Quantity Control */}
//             <div className="flex items-center border rounded-md">
//               <button
//                 onClick={() => updateQty(item._id, item.qty - 1)}
//                 className="p-2"
//               >
//                 <Minus className="w-4 h-4" />
//               </button>
//               <span className="px-4">{item.qty}</span>
//               <button
//                 onClick={() => updateQty(item._id, item.qty + 1)}
//                 className="p-2"
//               >
//                 <Plus className="w-4 h-4" />
//               </button>
//             </div>

//             {/* Remove */}
//             <button
//               onClick={() => removeItem(item._id)}
//               className="ml-4 text-gray-500 hover:text-red-600"
//               aria-label="Remove"
//             >
//               <Trash2 className="w-5 h-5" />
//             </button>
//           </div>
//         ))}

//         <button
//           onClick={clearCart}
//           className="mt-6 text-sm text-gray-500 underline hover:text-red-600"
//         >
//           Clear Cart
//         </button>
//       </div>

//       {/* RIGHT — SUMMARY */}
//       <div className="border rounded-lg p-6 bg-white shadow-sm h-fit">
//         <h2
//           className="text-xl font-semibold mb-4"
//           style={{ fontFamily: "var(--font-heading)" }}
//         >
//           Order Summary
//         </h2>

//         <div className="flex justify-between mb-2 text-sm text-gray-700">
//           <span>Subtotal</span>
//           <span>₦{subtotal.toLocaleString()}</span>
//         </div>

//         <div className="flex justify-between mb-2 text-sm text-gray-700">
//           <span>Shipping</span>
//           <span className="text-green-600 font-medium">Free</span>
//         </div>

//         <div className="border-t my-4"></div>

//         <div className="flex justify-between mb-4 font-semibold text-gray-900">
//           <span>Total</span>
//           <span>₦{subtotal.toLocaleString()}</span>
//         </div>

//         <button
//   onClick={handleCheckout}
//   disabled={loading}
//   className={`w-full py-3 font-semibold rounded-lg transition
//     ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[var(--color-burgundy)] hover:bg-[var(--color-indigo)] text-white"}`}
// >
//   {loading ? "Checking account..." : "Proceed to Checkout"}
// </button>


//         <p className="text-xs text-gray-500 text-center mt-3">
//           Taxes and shipping calculated at checkout.
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import { useCart } from "@/store/cart";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus, Minus, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { apiRequest } from "@/lib/api";

export default function CartPage() {
  const router = useRouter();
  const { items, updateQty, removeItem, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  // ✅ Memoized subtotal for performance
  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [items]
  );

  // ✅ Improved checkout with real backend auth verification
  const handleCheckout = async () => {
    if (items.length === 0) return;
    setLoading(true);

    try {
      await apiRequest("/api/auth/verify", "GET"); // validate cookie
      router.push("/checkout");
    } catch {
      router.push("/signup");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Empty cart state
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Your cart is empty 🛍️
        </h2>
        <Link
          href="/shop"
          className="text-[var(--color-burgundy)] font-medium underline hover:text-[var(--color-gold)]"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  // ✅ Main cart content
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 grid md:grid-cols-3 gap-10">
      {/* LEFT — CART ITEMS */}
      <div className="md:col-span-2 space-y-6">
        <h1
          className="text-2xl font-semibold mb-6 tracking-wide"
          style={{ fontFamily: "var(--font-handwriting)" }}
        >
          Your Shopping Bag ({items.length})
        </h1>

        {/* {items.map((item) => (
          <div
            key={`${item._id}-${item.color ?? "default"}`}
            className="flex items-center gap-4 border-b pb-6"
          > */}
          {items.map((item, index) => (
  <div key={`${item._id}-${item.color || ""}-${item.size || ""}-${index}`} className="flex items-center gap-4 border-b pb-6">
            {/* ✅ Product Image */}
            <div className="relative w-24 h-24">
              <Image
                src={item.image || "/placeholder.jpg"}
                alt={item.name || "Cart item"}
                fill
                className="object-cover rounded-md border"
                sizes="96px"
                priority
              />
            </div>

            {/* ✅ Product Info */}
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{item.name}</h3>
              {item.color && (
                <p className="text-sm text-gray-500 mt-1">
                  Color: <span className="capitalize">{item.color}</span>
                </p>
              )}
              <p className="text-[var(--color-burgundy)] font-semibold mt-2">
                ₦{item.price.toLocaleString()}
              </p>
            </div>

            {/* ✅ Quantity Control */}
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => updateQty(item._id, item.qty - 1)}
                className="p-2"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4">{item.qty}</span>
              <button
                onClick={() => updateQty(item._id, item.qty + 1)}
                className="p-2"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* ✅ Remove Button */}
            <button
              onClick={() => removeItem(item._id)}
              className="ml-4 text-gray-500 hover:text-red-600"
              aria-label="Remove item"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}

        <button
          onClick={clearCart}
          className="mt-6 text-sm text-gray-500 underline hover:text-red-600"
        >
          Clear Cart
        </button>
      </div>

      {/* RIGHT — ORDER SUMMARY */}
      <div className="border rounded-lg p-6 bg-white shadow-sm h-fit">
        <h2
          className="text-xl font-semibold mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Order Summary
        </h2>

        <div className="flex justify-between mb-2 text-sm text-gray-700">
          <span>Subtotal</span>
          <span>₦{subtotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between mb-2 text-sm text-gray-700">
          <span>Shipping</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>

        <div className="border-t my-4"></div>

        <div className="flex justify-between mb-4 font-semibold text-gray-900">
          <span>Total</span>
          <span>₦{subtotal.toLocaleString()}</span>
        </div>

        {/* ✅ Checkout Button with better UX */}
        <button
          onClick={handleCheckout}
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-[var(--color-burgundy)] hover:bg-[var(--color-indigo)] text-white"
          }`}
        >
          {loading ? "Checking account..." : "Proceed to Checkout"}
        </button>

        <p className="text-xs text-gray-500 text-center mt-3">
          Taxes and shipping calculated at checkout.
        </p>
      </div>
    </div>
  );
}
