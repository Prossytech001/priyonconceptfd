// "use client";
// import { useCart } from "@/store/cart";
// import Link from "next/link";
// import { Plus, Minus, Trash2 } from "lucide-react";

// export default function CartPage() {
//   const { items, updateQty, removeItem, clearCart } = useCart();

//   const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

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
//           style={{ fontFamily: "var(--font-heading)" }}
//         >
//           Your Shopping Bag ({items.length})
//         </h1>

//         {items.map((item) => (
//           <div
//             key={`${item._id}-${item.color || ""}`}
//             className="flex items-center gap-4 border-b pb-6"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-24 h-24 object-cover rounded-md border"
//             />

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

//         {/* Clear Cart Button */}
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
//           className="w-full bg-[var(--color-burgundy)] hover:bg-[var(--color-indigo)] text-white font-semibold py-3 rounded-lg transition"
//           onClick={() => alert("Proceeding to Checkout (Paystack coming soon)")}
//         >
//           Proceed to Checkout
//         </button>

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
import { Plus, Minus, Trash2 } from "lucide-react";

export default function CartPage() {
  const { items, updateQty, removeItem, clearCart } = useCart();
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

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

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 grid md:grid-cols-3 gap-10">
      {/* LEFT — CART ITEMS */}
      <div className="md:col-span-2 space-y-6">
        <h1
          className="text-2xl font-semibold mb-6 tracking-wide"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Your Shopping Bag ({items.length})
        </h1>

        {items.map((item) => (
          <div
            key={`${item._id}-${item.color || ""}`}
            className="flex items-center gap-4 border-b pb-6"
          >
            {/* ✅ Replaced <img> with Next.js <Image> */}
            <div className="relative w-24 h-24">
              <Image
                src={item.image || "/placeholder.jpg"}
                alt={item.name}
                fill
                className="object-cover rounded-md border"
                sizes="96px"
                priority
              />
            </div>

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

            {/* Quantity Control */}
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

            {/* Remove */}
            <button
              onClick={() => removeItem(item._id)}
              className="ml-4 text-gray-500 hover:text-red-600"
              aria-label="Remove"
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

      {/* RIGHT — SUMMARY */}
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

        <button
          className="w-full bg-[var(--color-burgundy)] hover:bg-[var(--color-indigo)] text-white font-semibold py-3 rounded-lg transition"
          onClick={() =>
            alert("Proceeding to Checkout (Paystack coming soon)")
          }
        >
          Proceed to Checkout
        </button>

        <p className="text-xs text-gray-500 text-center mt-3">
          Taxes and shipping calculated at checkout.
        </p>
      </div>
    </div>
  );
}
