// import Link from "next/link";

// type Product = {
//   _id: string;
//   name: string;
//   price: number;
//   currency: string;
//   images: string[];
//   slug?: string;
//   inStock?: boolean;
//   salePrice?: number;
// };

// export default function ProductCard({ product }: { product: Product }) {
//   const saving =
//     product.salePrice && product.price
//       ? product.price - product.salePrice
//       : 0;

//   return (
//     <Link
//       href={`/product/${product._id}`}
//       className="group block overflow-hidden"
//     >
//       {/* Product Image */}
//       <div className="relative w-full h-72 overflow-hidden ">
//         <img
//           src={product.images?.[0] || "/placeholder.jpg"}
//           alt={product.name}
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//         />

//         {/* Sale Badge */}
//         {product.salePrice && (
//           <span className="absolute top-3 right-3 bg-gray-800 text-white text-xs px-2 py-1 rounded">
//             Sale
//           </span>
//         )}
//       </div>

//       {/* Product Info */}
//       <div className="mt-3">
//         <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>

//         {/* Pricing */}
//         <div className="mt-1">
//           {product.salePrice ? (
//             <>
//               <div className="flex flex-col">
//                 <span className="text-gray-500 line-through text-sm">
//                   {product.currency} {product.price.toLocaleString()}
//                 </span>
//                 <span className="font-semibold text-[var(--color-burgundy)]">
//                   {product.currency} {product.salePrice.toLocaleString()}
//                 </span>
//                 {saving > 0 && (
//                   <span className="text-xs text-red-600 font-medium">
//                     Save {product.currency} {saving.toLocaleString()}
//                   </span>
//                 )}
//               </div>
//             </>
//           ) : (
//             <span className="font-semibold text-[var(--color-burgundy)]">
//               {product.currency} {product.price.toLocaleString()}
//             </span>
//           )}
//         </div>
//       </div>
//     </Link>
//   );
// }"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/store/cart";

type Product = {
  _id: string;
  name: string;
  price: number;
  salePrice?: number;
  currency: string;
  images: string[];
  slug?: string;
  inStock?: boolean;
  colors?: string[];
};

export default function ProductCard({ product }: { product: Product }) {
  const saving =
    product.salePrice && product.price ? product.price - product.salePrice : 0;

  const { openDrawer } = useCart();

  return (
    <div className="group block relative rounded-xl  overflow-hidden shadow-sm transition">
      {/* Product Image */}
      <Link href={`/product/${product._id}`} className="block relative">
        <div className="relative w-full h-62 overflow-hidden">
          <img
            src={product.images?.[0] || "/placeholder.jpg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Sale Badge */}
          {product.salePrice && (
            <span className="absolute top-3 right-3 bg-gray-800 text-white text-xs px-2 py-1 rounded">
              Sale
            </span>
          )}
        </div>
      </Link>

      {/* Cart Icon (Quick Add Drawer Trigger) */}
      <button
        onClick={() =>
          openDrawer({
            _id: product._id,
            name: product.name,
            price: product.salePrice || product.price,
            image: product.images?.[0],
            colors: product.colors || [],
            qty: 1,
          })
        }
        className="absolute top-3 right-3  rounded-full p-2 shadow bg-[var(--color-burgundy)] text-white transition"
        aria-label="Quick Add to Cart"
      >
        <ShoppingCart className="w-5 h-5" />
      </button>

      {/* Product Info */}
      <div className="p-3">
        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>

        {/* Pricing */}
        <div className="mt-1">
          {product.salePrice ? (
            <div className="flex flex-col">
              <span className="text-gray-500 line-through text-sm">
                {product.currency} {product.price.toLocaleString()}
              </span>
              <span className="font-semibold text-[var(--color-burgundy)]">
                {product.currency} {product.salePrice.toLocaleString()}
              </span>
              {saving > 0 && (
                <span className="text-xs text-red-600 font-medium">
                  Save {product.currency} {saving.toLocaleString()}
                </span>
              )}
            </div>
          ) : (
            <span className="font-semibold text-[var(--color-burgundy)]">
              {product.currency} {product.price.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

