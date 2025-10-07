// "use client";
// import { useState } from "react";
// import { X, Plus, Minus, ShoppingCart } from "lucide-react";
// import { useCart } from "@/store/cart";
// import { toast } from "sonner";

// export default function MiniCartDrawer() {
//   const { drawerProduct, isDrawerOpen, closeDrawer, addItem } = useCart();
//   const [qty, setQty] = useState(1);
//   const [color, setColor] = useState("");

//   if (!drawerProduct) return null;

//   const handleAdd = () => {
//     addItem({
//       ...drawerProduct,
//       qty,
//       color,
//     });
//     toast.success(`${drawerProduct.name} added to your cart!`, {
//       icon: "🛍️",
//       duration: 2500,
//     });
//   };

//   return (
//     <>
//       {isDrawerOpen && (
//         <div
//           className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-96 bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl p-5 z-50 border border-gray-200 animate-slideUp"
//           onClick={(e) => e.stopPropagation()}
//         >
//           {/* Header */}
//           <div className="flex justify-between items-center mb-3">
//             <h3 className="text-lg font-semibold">Quick Add</h3>
//             <button onClick={closeDrawer}>
//               <X className="w-5 h-5 text-gray-600" />
//             </button>
//           </div>

//           {/* Product Info */}
//           <div className="flex gap-4 mb-4">
//             <img
//               src={drawerProduct.image}
//               alt={drawerProduct.name}
//               className="w-20 h-20 object-cover rounded-md border"
//             />
//             <div>
//               <h4 className="font-medium text-gray-800 text-sm">{drawerProduct.name}</h4>
//               <p className="text-[var(--color-burgundy)] font-semibold">
//                 ₦{drawerProduct.price.toLocaleString()}
//               </p>
//             </div>
//           </div>

//           {/* Color Selector */}
//           {drawerProduct.colors && drawerProduct.colors.length > 0 && (
//             <div className="mb-4">
//               <h4 className="font-medium text-sm mb-2">Color</h4>
//               <div className="flex gap-2">
//                 {drawerProduct.colors.map((c: string) => (
//                   <button
//                     key={c}
//                     onClick={() => setColor(c)}
//                     className={`px-3 py-1 border rounded ${
//                       color === c ? "bg-[var(--color-gold)] text-white" : "bg-gray-100"
//                     }`}
//                   >
//                     {c}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Quantity Selector */}
//           <div className="flex justify-between items-center mb-5">
//             <span className="font-medium text-sm">Quantity</span>
//             <div className="flex items-center border rounded-md">
//               <button
//                 onClick={() => setQty((q) => Math.max(1, q - 1))}
//                 className="p-2"
//               >
//                 <Minus className="w-4 h-4" />
//               </button>
//               <span className="px-4">{qty}</span>
//               <button onClick={() => setQty((q) => q + 1)} className="p-2">
//                 <Plus className="w-4 h-4" />
//               </button>
//             </div>
//           </div>

//           {/* Add Button */}
//           <button
//             onClick={handleAdd}
//             className="w-full flex items-center justify-center gap-2 bg-[var(--color-burgundy)] hover:bg-[var(--color-indigo)] text-white py-3 rounded-lg font-semibold transition"
//           >
//             <ShoppingCart className="w-5 h-5" /> Add to Cart
//           </button>

//           {/* Footer CTA */}
//           <div className="flex justify-between mt-4 text-sm text-gray-600">
//             <button onClick={closeDrawer}>Continue Shopping</button>
//             <a href="/cart" className="font-semibold text-[var(--color-burgundy)]">
//               View Cart →
//             </a>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
// "use client";
// import { useState, useEffect } from "react";
// import { X, Plus, Minus, ShoppingCart } from "lucide-react";
// import { useCart } from "@/store/cart";
// import { toast } from "sonner";

// export default function MiniCartDrawer() {
//   const { drawerProduct, isDrawerOpen, closeDrawer, addItem } = useCart();
//   const [qty, setQty] = useState(1);
//   const [color, setColor] = useState("");

//   // Reset state whenever drawer opens/closes
//   useEffect(() => {
//     if (!isDrawerOpen) {
//       setQty(1);
//       setColor("");
//     }
//   }, [isDrawerOpen]);

//   if (!drawerProduct) return null;

//   const handleAdd = () => {
//     addItem({
//       ...drawerProduct,
//       qty,
//       color,
//     });

//     toast.success(`${drawerProduct.name} added to your cart!`, {
//       icon: "🛍️",
//       duration: 2000,
//     });

//     // ✅ Automatically close drawer after short delay
//     setTimeout(() => {
//       closeDrawer();
//     }, 800);
//   };

//   return (
//     <>
//       {isDrawerOpen && (
//         <div
//           className="fixed inset-0 z-40 bg-black/40"
//           onClick={closeDrawer}
//         >
//           <div
//             className="absolute bottom-0 right-0 w-full sm:w-96 bg-white shadow-xl rounded-t-2xl p-6 animate-slideUp"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Header */}
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="font-semibold text-lg">Quick Add</h3>
//               <button onClick={closeDrawer}>
//                 <X className="w-6 h-6 text-gray-700" />
//               </button>
//             </div>

//             {/* Product Info */}
//             <div className="flex gap-4 mb-6">
//               <img
//                 src={drawerProduct.image}
//                 alt={drawerProduct.name}
//                 className="w-24 h-24 object-cover rounded-md border"
//               />
//               <div>
//                 <h4 className="font-medium text-gray-900 text-sm">
//                   {drawerProduct.name}
//                 </h4>
//                 <p className="text-[var(--color-burgundy)] font-semibold">
//                   ₦{drawerProduct.price.toLocaleString()}
//                 </p>
//               </div>
//             </div>

//             {/* Color Selector */}
//             {drawerProduct.colors && drawerProduct.colors.length > 0 && (
//               <div className="mb-6">
//                 <h4 className="font-medium mb-2 text-sm">Select Color</h4>
//                 <div className="flex gap-2">
//                   {drawerProduct.colors.map((c: string) => (
//                     <button
//                       key={c}
//                       onClick={() => setColor(c)}
//                       className={`px-3 py-1 border rounded ${
//                         color === c
//                           ? "bg-[var(--color-gold)] text-white"
//                           : "bg-gray-100"
//                       }`}
//                     >
//                       {c}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Quantity Selector */}
//             <div className="flex justify-between items-center mb-6">
//               <span className="font-medium text-sm">Quantity</span>
//               <div className="flex items-center border rounded-md">
//                 <button
//                   onClick={() => setQty((q) => Math.max(1, q - 1))}
//                   className="p-2"
//                 >
//                   <Minus className="w-4 h-4" />
//                 </button>
//                 <span className="px-4">{qty}</span>
//                 <button onClick={() => setQty((q) => q + 1)} className="p-2">
//                   <Plus className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>

//             {/* Add to Cart Button */}
//             <button
//               onClick={handleAdd}
//               disabled={!color && drawerProduct.colors?.length > 0}
//               className="w-full flex items-center justify-center gap-2 bg-[var(--color-burgundy)] hover:bg-[var(--color-indigo)] text-white py-3 rounded-lg font-semibold transition"
//             >
//               <ShoppingCart className="w-5 h-5" /> Add to Cart
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
// "use client";
// import { useState, useEffect } from "react";
// import { X, Plus, Minus, ShoppingCart } from "lucide-react";
// import { useCart } from "@/store/cart";
// import { toast } from "sonner";

// export default function MiniCartDrawer() {
//   const { drawerProduct, isDrawerOpen, closeDrawer, addItem } = useCart();
//   const [qty, setQty] = useState(1);
//   const [color, setColor] = useState("");
//   const [isClosing, setIsClosing] = useState(false); // 👈 track animation

//   // Reset state when drawer closes
//   useEffect(() => {
//     if (!isDrawerOpen) {
//       setQty(1);
//       setColor("");
//       setIsClosing(false);
//     }
//   }, [isDrawerOpen]);

//   if (!drawerProduct && !isDrawerOpen) return null;

//   const handleAdd = () => {
//     addItem({
//       ...drawerProduct,
//       qty,
//       color,
//     });

//     toast.success(`${drawerProduct.name} added to your cart!`, {
//       icon: "🛍️",
//       duration: 2000,
//     });

//     // Start closing animation before removing
//     setIsClosing(true);
//     setTimeout(() => closeDrawer(), 300); // matches .25s animation
//   };

//   const handleClose = () => {
//     setIsClosing(true);
//     setTimeout(() => closeDrawer(), 300);
//   };

//   return (
//     <>
//       {isDrawerOpen && (
//         <div className="fixed inset-0 z-40 bg-black/40" onClick={handleClose}>
//           <div
//             className={`absolute bottom-0 right-0 w-full sm:w-96 bg-white shadow-xl rounded-t-2xl p-6 border-t animate-${
//               isClosing ? "slideDown" : "slideUp"
//             }`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Header */}
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="font-semibold text-lg">Quick Add</h3>
//               <button onClick={handleClose}>
//                 <X className="w-6 h-6 text-gray-700" />
//               </button>
//             </div>

//             {/* Product Info */}
//             <div className="flex gap-4 mb-6">
//               <img
//                 src={drawerProduct.image}
//                 alt={drawerProduct.name}
//                 className="w-24 h-24 object-cover rounded-md border"
//               />
//               <div>
//                 <h4 className="font-medium text-gray-900 text-sm">
//                   {drawerProduct.name}
//                 </h4>
//                 <p className="text-[var(--color-burgundy)] font-semibold">
//                   ₦{drawerProduct.price.toLocaleString()}
//                 </p>
//               </div>
//             </div>

//             {/* Color Selector */}
//             {drawerProduct.colors && drawerProduct.colors.length > 0 && (
//               <div className="mb-6">
//                 <h4 className="font-medium mb-2 text-sm">Select Color</h4>
//                 <div className="flex gap-2">
//                   {drawerProduct.colors.map((c: string) => (
//                     <button
//                       key={c}
//                       onClick={() => setColor(c)}
//                       className={`px-3 py-1 border rounded ${
//                         color === c
//                           ? "bg-[var(--color-gold)] text-white"
//                           : "bg-gray-100"
//                       }`}
//                     >
//                       {c}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Quantity Selector */}
//             <div className="flex justify-between items-center mb-6">
//               <span className="font-medium text-sm">Quantity</span>
//               <div className="flex items-center border rounded-md">
//                 <button
//                   onClick={() => setQty((q) => Math.max(1, q - 1))}
//                   className="p-2"
//                 >
//                   <Minus className="w-4 h-4" />
//                 </button>
//                 <span className="px-4">{qty}</span>
//                 <button onClick={() => setQty((q) => q + 1)} className="p-2">
//                   <Plus className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>

//             {/* Add to Cart */}
//             <button
//               onClick={handleAdd}
//               disabled={!color && drawerProduct.colors?.length > 0}
//               className="w-full flex items-center justify-center gap-2 bg-[var(--color-burgundy)] hover:bg-[var(--color-indigo)] text-white py-3 rounded-lg font-semibold transition"
//             >
//               <ShoppingCart className="w-5 h-5" /> Add to Cart
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { X, Plus, Minus, ShoppingCart } from "lucide-react";
// import { useCart } from "@/store/cart";
// import { toast } from "sonner";

// export default function MiniCartDrawer() {
//   const { drawerProduct, isDrawerOpen, closeDrawer, addItem } = useCart();
//   const [qty, setQty] = useState(1);
//   const [color, setColor] = useState("");
//   const [isClosing, setIsClosing] = useState(false);

//   useEffect(() => {
//     if (!isDrawerOpen) {
//       setQty(1);
//       setColor("");
//       setIsClosing(false);
//     }
//   }, [isDrawerOpen]);

//   if (!drawerProduct && !isDrawerOpen) return null;

//   const handleAdd = () => {
//     addItem({
//       ...drawerProduct,
//       qty,
//       color,
//     });

//     toast.success(`${drawerProduct.name} added to your cart!`, {
//       icon: "🛍️",
//       duration: 2000,
//     });

//     setIsClosing(true);
//     setTimeout(() => closeDrawer(), 300);
//   };

//   const handleClose = () => {
//     setIsClosing(true);
//     setTimeout(() => closeDrawer(), 300);
//   };

//   return (
//     <>
//       {isDrawerOpen && (
//         <div className="fixed inset-0 z-40 bg-black/40" onClick={handleClose}>
//           <div
//             className={`absolute bottom-0 right-0 w-full sm:w-96 bg-white shadow-xl rounded-t-2xl p-6 border-t animate-${
//               isClosing ? "slideDown" : "slideUp"
//             }`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Header */}
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="font-semibold text-lg">Quick Add</h3>
//               <button onClick={handleClose}>
//                 <X className="w-6 h-6 text-gray-700" />
//               </button>
//             </div>

//             {/* Product Info */}
//             <div className="flex gap-4 mb-6">
//               <div className="w-24 h-24 relative">
//                 <Image
//                   src={drawerProduct.image || "/placeholder.jpg"}
//                   alt={drawerProduct.name}
//                   width={96}
//                   height={96}
//                   className="w-24 h-24 object-cover rounded-md border"
//                 />
//               </div>
//               <div>
//                 <h4 className="font-medium text-gray-900 text-sm">
//                   {drawerProduct.name}
//                 </h4>
//                 <p className="text-[var(--color-burgundy)] font-semibold">
//                   ₦{drawerProduct.price.toLocaleString()}
//                 </p>
//               </div>
//             </div>

//             {/* Color Selector */}
//             {drawerProduct.colors && drawerProduct.colors.length > 0 && (
//               <div className="mb-6">
//                 <h4 className="font-medium mb-2 text-sm">Select Color</h4>
//                 <div className="flex gap-2">
//                   {drawerProduct.colors.map((c: string) => (
//                     <button
//                       key={c}
//                       onClick={() => setColor(c)}
//                       className={`px-3 py-1 border rounded ${
//                         color === c
//                           ? "bg-[var(--color-gold)] text-white"
//                           : "bg-gray-100"
//                       }`}
//                     >
//                       {c}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Quantity Selector */}
//             <div className="flex justify-between items-center mb-6">
//               <span className="font-medium text-sm">Quantity</span>
//               <div className="flex items-center border rounded-md">
//                 <button
//                   onClick={() => setQty((q) => Math.max(1, q - 1))}
//                   className="p-2"
//                 >
//                   <Minus className="w-4 h-4" />
//                 </button>
//                 <span className="px-4">{qty}</span>
//                 <button onClick={() => setQty((q) => q + 1)} className="p-2">
//                   <Plus className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>

//             {/* Add to Cart */}
//             <button
//               onClick={handleAdd}
//               disabled={!color && drawerProduct.colors?.length > 0}
//               className="w-full flex items-center justify-center gap-2 bg-[var(--color-burgundy)] hover:bg-[var(--color-indigo)] text-white py-3 rounded-lg font-semibold transition"
//             >
//               <ShoppingCart className="w-5 h-5" /> Add to Cart
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "@/store/cart";
import { toast } from "sonner";

export default function MiniCartDrawer() {
  const { drawerProduct, isDrawerOpen, closeDrawer, addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState("");
  const [isClosing, setIsClosing] = useState(false);

  // ✅ Reset state when closing
  useEffect(() => {
    if (!isDrawerOpen) {
      setQty(1);
      setColor("");
      setIsClosing(false);
    }
  }, [isDrawerOpen]);

  // ✅ Nothing to show
  if (!drawerProduct || !isDrawerOpen) return null;

  // ✅ Safely handle Add
  const handleAdd = () => {
    if (!drawerProduct) return; // type guard (extra safety)

    addItem({
      ...drawerProduct,
      qty,
      color,
    });

    toast.success(`${drawerProduct.name} added to your cart!`, {
      icon: "🛍️",
      duration: 2000,
    });

    setIsClosing(true);
    setTimeout(() => closeDrawer(), 300);
  };

  // ✅ Smooth closing animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => closeDrawer(), 300);
  };

  return (
    <>
      {isDrawerOpen && drawerProduct && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={handleClose}>
          <div
            className={`absolute bottom-0 right-0 w-full sm:w-96 bg-white shadow-xl rounded-t-2xl p-6 border-t animate-${
              isClosing ? "slideDown" : "slideUp"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Quick Add</h3>
              <button onClick={handleClose}>
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Product Info */}
            <div className="flex gap-4 mb-6">
              <div className="w-24 h-24 relative">
                <Image
                  src={drawerProduct.image || "/placeholder.jpg"}
                  alt={drawerProduct.name}
                  width={96}
                  height={96}
                  className="w-24 h-24 object-cover rounded-md border"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-sm">
                  {drawerProduct.name}
                </h4>
                <p className="text-[var(--color-burgundy)] font-semibold">
                  ₦{drawerProduct.price.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Color Selector */}
            {drawerProduct.colors && drawerProduct.colors.length > 0 && (
              <div className="mb-6">
                <h4 className="font-medium mb-2 text-sm">Select Color</h4>
                <div className="flex gap-2">
                  {drawerProduct.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      className={`px-3 py-1 border rounded ${
                        color === c
                          ? "bg-[var(--color-gold)] text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex justify-between items-center mb-6">
              <span className="font-medium text-sm">Quantity</span>
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="p-2"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="p-2">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              disabled={!color && (drawerProduct?.colors?.length ?? 0) > 0}

              className="w-full flex items-center justify-center gap-2 bg-[var(--color-burgundy)] hover:bg-[var(--color-indigo)] text-white py-3 rounded-lg font-semibold transition"
            >
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}
