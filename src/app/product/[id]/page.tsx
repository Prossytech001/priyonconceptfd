// "use client";
// import { useState, useEffect } from "react";
// import { useParams } from "next/navigation";
// import ProductCard from "@/components/ProductCard";

// export default function ProductPage() {
//   const { id } = useParams();
//   const [product, setProduct] = useState<any>(null);
//   const [selectedImage, setSelectedImage] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [selectedColor, setSelectedColor] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [related, setRelated] = useState<any[]>([]);

//   useEffect(() => {
//     if (!id) return;
//     fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`)
//       .then((r) => r.json())
//       .then((data) => {
//         setProduct(data);
//         setSelectedImage(data.images?.[0]);
//         // Fetch related products by category
//         fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?category=${data.category}&limit=4`)
//           .then((r) => r.json())
//           .then((rel) => setRelated(rel.products || rel || []));
//       })
//       .catch(console.error);
//   }, [id]);

//   if (!product) return <p className="text-center py-20">Loading...</p>;

//   return (
//     <div className="container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
//       {/* Left: Image gallery */}
//       <div>
//         <div className="aspect-square overflow-hidden rounded-lg">
//           <img
//             src={selectedImage || product.images?.[0]}
//             alt={product.name}
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="flex gap-3 mt-4">
//           {product.images?.map((img: string, i: number) => (
//             <img
//               key={i}
//               src={img}
//               alt=""
//               onClick={() => setSelectedImage(img)}
//               className={`w-20 h-20 rounded-md object-cover cursor-pointer border ${
//                 selectedImage === img ? "border-black" : "border-gray-200"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Right: Product Info */}
//       <div>
//         <h1 className="text-3xl font-semibold mb-3">{product.name}</h1>
//         <p className="text-gray-500 text-sm mb-4">{product.sku}</p>

//         <div className="mb-4">
//           {product.salePrice ? (
//             <div className="flex items-center gap-3">
//               <span className="text-xl font-bold text-[var(--color-burgundy)]">
//                 {product.currency} {product.salePrice.toLocaleString()}
//               </span>
//               <span className="line-through text-gray-400">
//                 {product.currency} {product.price.toLocaleString()}
//               </span>
//             </div>
//           ) : (
//             <span className="text-xl font-bold text-[var(--color-burgundy)]">
//               {product.currency} {product.price.toLocaleString()}
//             </span>
//           )}
//         </div>

//         <p className="mb-4">
//           <span className="font-medium">Availability:</span>{" "}
//           {product.inStock ? (
//             <span className="text-green-600">In Stock</span>
//           ) : (
//             <span className="text-red-600">Out of Stock</span>
//           )}
//         </p>

//         {/* Size Selector */}
//         {product.sizes?.length > 0 && (
//           <div className="mb-4">
//             <h4 className="font-medium mb-2">Size</h4>
//             <div className="flex gap-2">
//               {product.sizes.map((size: string) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-3 py-1 border rounded-md ${
//                     selectedSize === size ? "bg-black text-white" : ""
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Color Selector */}
//         {product.colors?.length > 0 && (
//           <div className="mb-4">
//             <h4 className="font-medium mb-2">Color</h4>
//             <div className="flex gap-2">
//               {product.colors.map((color: string) => (
//                 <button
//                   key={color}
//                   onClick={() => setSelectedColor(color)}
//                   className={`w-8 h-8 rounded-full border ${
//                     selectedColor === color ? "ring-2 ring-black" : ""
//                   }`}
//                   style={{ backgroundColor: color }}
//                 />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Quantity */}
//         <div className="mb-6">
//           <h4 className="font-medium mb-2">Quantity</h4>
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setQuantity(Math.max(1, quantity - 1))}
//               className="px-3 py-1 border rounded-md"
//             >
//               -
//             </button>
//             <span>{quantity}</span>
//             <button
//               onClick={() => setQuantity(quantity + 1)}
//               className="px-3 py-1 border rounded-md"
//             >
//               +
//             </button>
//           </div>
//         </div>

//         {/* Add to Cart */}
//         <button
//           className="w-full bg-black text-white py-3 rounded-md font-medium tracking-wide"
//           onClick={() =>
//             alert(
//               `Added ${quantity} ${product.name} (${selectedColor || "default color"}, ${
//                 selectedSize || "default size"
//               })`
//             )
//           }
//         >
//           ADD TO CART
//         </button>

//         {/* Description */}
//         <div className="mt-8 border-t pt-6">
//           <h3 className="text-lg font-semibold mb-2">Product Description</h3>
//           <p className="text-gray-600 leading-relaxed">{product.description}</p>
//         </div>
//       </div>

//       {/* Related products */}
//       {related.length > 0 && (
//         <div className="col-span-2 mt-16">
//           <h2 className="text-2xl font-semibold mb-6 text-center">
//             You May Also Like
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {related.map((p) => (
//               <ProductCard key={p._id} product={p} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// "use client";
// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import ProductCard from "@/components/ProductCard";
// import toast from "react-hot-toast";
// import { useCart } from "@/store/cart";



// export default function ProductPage() {
//   const { id } = useParams();
//   const [product, setProduct] = useState<any>(null);
//   const [selectedImage, setSelectedImage] = useState("");
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [related, setRelated] = useState<any[]>([]);
//    const { addToCart } = useCart();

//   useEffect(() => {
//     if (!id) return;

//     fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`)
//       .then((r) => r.json())
//       .then((data) => {
//         setProduct(data);
//         setSelectedImage(data.images?.[0]);
//         // fetch related
//         fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?category=${data.category}&limit=4`)
//           .then((r) => r.json())
//           .then((rel) => setRelated(rel.products || rel || []));
//       })
//       .catch(console.error);
//   }, [id]);

//   if (!product) return <p className="text-center py-20">Loading...</p>;
 

//   return (
//     <div className="container mx-auto px-6 py-10">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {/* LEFT: Image Gallery */}
//         <div>
//           <div className="aspect-square overflow-hidden rounded-md border">
//             <img
//               src={selectedImage || product.images?.[0]}
//               alt={product.name}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Thumbnails */}
//           <div className="flex gap-3 mt-4 overflow-x-auto">
//             {product.images?.map((img: string, i: number) => (
//               <img
//                 key={i}
//                 src={img}
//                 alt={`thumb-${i}`}
//                 onClick={() => setSelectedImage(img)}
//                 className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${
//                   selectedImage === img ? "border-black" : "border-gray-200"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* RIGHT: Product Info */}
//         <div>
//           {/* Title */}
//           <h1 className="text-2xl md:text-3xl font-semibold mb-3">
//             {product.name}
//           </h1>

//           {/* Price */}
//           <div className="mb-4">
//             {product.salePrice ? (
//               <div>
//                 <p className="text-lg font-semibold text-[var(--color-burgundy)]">
//                   {product.currency} {product.salePrice.toLocaleString("en-NG")}
//                 </p>
//                 <div className="flex gap-3 text-sm text-gray-500">
//                   <span className="line-through">
//                     {product.currency} {product.price.toLocaleString("en-NG")}
//                   </span>
//                   <span className="text-red-600">
//                     Save{" "}
//                     {product.currency}{" "}
//                     {(product.price - product.salePrice).toLocaleString("en-NG")}
//                   </span>
//                 </div>
//               </div>
//             ) : (
//               <p className="text-lg font-semibold text-[var(--color-burgundy)]">
//                 {product.currency} {product.price.toLocaleString("en-NG")}
//               </p>
//             )}
//           </div>

//           {/* Shipping note */}
//           <p className="text-gray-500 text-sm mb-4">
//             Shipping calculated at checkout.
//           </p>

//           {/* Color */}
//           {product.colors?.length > 0 && (
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1">Color</label>
//               <select
//                 value={selectedColor}
//                 onChange={(e) => setSelectedColor(e.target.value)}
//                 className="border rounded-md p-2 w-40"
//               >
//                 <option value="">Select color</option>
//                 {product.colors.map((color: string) => (
//                   <option key={color}>{color}</option>
//                 ))}
//               </select>
//             </div>
//           )}

//           {/* Size */}
//           {product.sizes?.length > 0 && (
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1">Size</label>
//               <select
//                 value={selectedSize}
//                 onChange={(e) => setSelectedSize(e.target.value)}
//                 className="border rounded-md p-2 w-40"
//               >
//                 <option value="">Select size</option>
//                 {product.sizes.map((size: string) => (
//                   <option key={size}>{size}</option>
//                 ))}
//               </select>
//             </div>
//           )}

//           {/* Quantity */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">Quantity</label>
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 className="border px-3 py-1 rounded-md"
//               >
//                 -
//               </button>
//               <span>{quantity}</span>
//               <button
//                 onClick={() => setQuantity(quantity + 1)}
//                 className="border px-3 py-1 rounded-md"
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           {/* Stock status */}
//           <p className="text-sm mb-4">
//             {product.inStock ? (
//               <span className="text-green-600 font-medium">
//                 ● In stock, ready to ship
//               </span>
//             ) : (
//               <span className="text-red-600 font-medium">Out of stock</span>
//             )}
//           </p>

//           {/* Size Guide */}
//           <button className="border border-black px-3 py-2 rounded-md text-sm mb-5 hover:bg-black hover:text-white transition">
//             SIZE GUIDE
//           </button>

//           {/* Add to Cart */}
//           <button
//             className="block w-full bg-black text-white py-3 font-semibold uppercase tracking-wide hover:opacity-80 transition"
//            onClick={() => {
//   toast.success(
//     `${product.name} (${selectedColor || "default color"}, ${
//       selectedSize || "default size"
//     }) added to cart (${quantity})`
//   );
// }}

//           >
//             ADD TO CART
//           </button>

//           {/* Description */}
//           <div className="mt-8">
//             <p className="text-gray-700 leading-relaxed mb-4">
//               {product.description}
//             </p>

//             {/* Example details */}
//             <div>
//               <h4 className="font-semibold mb-2">Details:</h4>
//               <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
//                 <li>Classic double-breasted front</li>
//                 <li>Relaxed fit</li>
//                 <li>Machine washable</li>
//               </ul>
//             </div>

//             <p className="mt-4 text-sm text-gray-500 italic">
//               Model is wearing size L. <br />
//               Model height: 5'8" / 176 cm, 76 kg.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Related Products */}
//       {related.length > 0 && (
//         <div className="mt-16">
//           <h2 className="text-2xl font-semibold text-center mb-6">
//             YOU MAY ALSO LIKE
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {related.map((p) => (
//               <ProductCard key={p._id} product={p} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// "use client";
// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import ProductCard from "@/components/ProductCard";
// import toast from "react-hot-toast";
// import { useCart } from "@/store/cart"; // ✅ make sure this path matches your CartContext file

// export default function ProductPage() {
//   const { id } = useParams();
//   const [product, setProduct] = useState<any>(null);
//   const [selectedImage, setSelectedImage] = useState("");
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [related, setRelated] = useState<any[]>([]);

//   const { addToCart } = useCart(); // ✅ global cart function

//   useEffect(() => {
//     if (!id) return;

//     fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`)
//       .then((r) => r.json())
//       .then((data) => {
//         setProduct(data);
//         setSelectedImage(data.images?.[0]);
//         // Fetch related products
//         fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/products?category=${data.category}&limit=4`
//         )
//           .then((r) => r.json())
//           .then((rel) => setRelated(rel.products || rel || []));
//       })
//       .catch(console.error);
//   }, [id]);

//   if (!product) return <p className="text-center py-20">Loading...</p>;

//   // ✅ Handle Add to Cart
//   const handleAddToCart = () => {
//     if (!product.inStock) {
//       toast.error("Sorry, this product is out of stock.");
//       return;
//     }

//     addToCart({
//       _id: product._id,
//       name: product.name,
//       price: product.salePrice || product.price,
//       currency: product.currency,
//       image: product.images?.[0],
//       color: selectedColor || product.colors?.[0],
//       size: selectedSize || product.sizes?.[0],
//       quantity,
//     });

//     toast.success(`${product.name} added to cart`);
//   };

//   return (
//     <div className="container mx-auto px-6 py-10">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {/* LEFT: Image Gallery */}
//         <div>
//           <div className="aspect-square overflow-hidden rounded-md border">
//             <img
//               src={selectedImage || product.images?.[0]}
//               alt={product.name}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Thumbnails */}
//           <div className="flex gap-3 mt-4 overflow-x-auto">
//             {product.images?.map((img: string, i: number) => (
//               <img
//                 key={i}
//                 src={img}
//                 alt={`thumb-${i}`}
//                 onClick={() => setSelectedImage(img)}
//                 className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${
//                   selectedImage === img ? "border-black" : "border-gray-200"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* RIGHT: Product Info */}
//         <div>
//           <h1 className="text-2xl md:text-3xl font-semibold mb-3">
//             {product.name}
//           </h1>

//           {/* Price */}
//           <div className="mb-4">
//             {product.salePrice ? (
//               <div>
//                 <p className="text-lg font-semibold text-[var(--color-burgundy)]">
//                   {product.currency} {product.salePrice.toLocaleString("en-NG")}
//                 </p>
//                 <div className="flex gap-3 text-sm text-gray-500">
//                   <span className="line-through">
//                     {product.currency} {product.price.toLocaleString("en-NG")}
//                   </span>
//                   <span className="text-red-600">
//                     Save{" "}
//                     {product.currency}{" "}
//                     {(product.price - product.salePrice).toLocaleString("en-NG")}
//                   </span>
//                 </div>
//               </div>
//             ) : (
//               <p className="text-lg font-semibold text-[var(--color-burgundy)]">
//                 {product.currency} {product.price.toLocaleString("en-NG")}
//               </p>
//             )}
//           </div>

//           <p className="text-gray-500 text-sm mb-4">
//             Shipping calculated at checkout.
//           </p>

//           {/* Color Selector */}
//           {product.colors?.length > 0 && (
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1">Color</label>
//               <select
//                 value={selectedColor}
//                 onChange={(e) => setSelectedColor(e.target.value)}
//                 className="border rounded-md p-2 w-40"
//               >
//                 <option value="">Select color</option>
//                 {product.colors.map((color: string) => (
//                   <option key={color}>{color}</option>
//                 ))}
//               </select>
//             </div>
//           )}

//           {/* Size Selector */}
//           {product.sizes?.length > 0 && (
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1">Size</label>
//               <select
//                 value={selectedSize}
//                 onChange={(e) => setSelectedSize(e.target.value)}
//                 className="border rounded-md p-2 w-40"
//               >
//                 <option value="">Select size</option>
//                 {product.sizes.map((size: string) => (
//                   <option key={size}>{size}</option>
//                 ))}
//               </select>
//             </div>
//           )}

//           {/* Quantity Selector */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">Quantity</label>
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 className="border px-3 py-1 rounded-md"
//               >
//                 -
//               </button>
//               <span>{quantity}</span>
//               <button
//                 onClick={() => setQuantity(quantity + 1)}
//                 className="border px-3 py-1 rounded-md"
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           {/* Stock Status */}
//           <p className="text-sm mb-4">
//             {product.inStock ? (
//               <span className="text-green-600 font-medium">
//                 ● In stock, ready to ship
//               </span>
//             ) : (
//               <span className="text-red-600 font-medium">Out of stock</span>
//             )}
//           </p>

//           {/* Add to Cart Button */}
//           <button
//             className="block w-full bg-black text-white py-3 font-semibold uppercase tracking-wide hover:opacity-80 transition"
//             onClick={handleAddToCart}
//           >
//             ADD TO CART
//           </button>

//           {/* Description */}
//           <div className="mt-8">
//             <p className="text-gray-700 leading-relaxed mb-4">
//               {product.description}
//             </p>

//             <div>
//               <h4 className="font-semibold mb-2">Details:</h4>
//               <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
//                 <li>Classic double-breasted front</li>
//                 <li>Relaxed fit</li>
//                 <li>Machine washable</li>
//               </ul>
//             </div>

//             <p className="mt-4 text-sm text-gray-500 italic">
//               Model is wearing size L. <br />
//               Model height: 5'8" / 176 cm, 76 kg.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Related Products */}
//       {related.length > 0 && (
//         <div className="mt-16">
//           <h2 className="text-2xl font-semibold text-center mb-6">
//             YOU MAY ALSO LIKE
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {related.map((p) => (
//               <ProductCard key={p._id} product={p} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// "use client";
// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import ProductCard from "@/components/ProductCard";
// import { toast } from "sonner"; // ✅ matches your MiniCartDrawer
// import { useCart } from "@/store/cart"; // ✅ using same store as drawer
// import Breadcrumbs from "@/components/Breadcrumbs";

// export default function ProductPage() {
//   const { id } = useParams();
//   const [product, setProduct] = useState<any>(null);
//   const [selectedImage, setSelectedImage] = useState("");
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [related, setRelated] = useState<any[]>([]);

//   // ✅ use the same function MiniCartDrawer uses
//   const { addItem } = useCart();

//   useEffect(() => {
//     if (!id) return;

//     fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`)
//       .then((r) => r.json())
//       .then((data) => {
//         setProduct(data);
//         setSelectedImage(data.images?.[0]);
//         // Fetch related products
//         fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/products?category=${data.category}&limit=6`
//         )
//           .then((r) => r.json())
//           .then((rel) => setRelated(rel.products || rel || []));
//       })
//       .catch(console.error);
//   }, [id]);

//   if (!product) return <p className="text-center py-20">Loading...</p>;

//   // ✅ Handle Add to Cart (same as MiniDrawer)
//   const handleAdd = () => {
//     if (!product.inStock) {
//       toast.error("Sorry, this product is out of stock.");
//       return;
//     }
//     if (!product.inStock) {
//     toast.error("Sorry, this product is out of stock.");
//     return;
//   }

//   // ⚠️ Require color only if product has color options
//   if (product.colors?.length > 0 && !selectedColor) {
//     toast.warning("Please select a color before adding to cart.");
//     return;
//   }

//   // ⚠️ Require size only if product has size options
//   if (product.sizes?.length > 0 && !selectedSize) {
//     toast.warning("Please select a size before adding to cart.");
//     return;
//   }

//     addItem({
//       ...product,
//       qty: quantity,
//       color: selectedColor || product.colors?.[0],
//       size: selectedSize || product.sizes?.[0],
//     });

//     toast.success(`${product.name} added to your cart!`, {
//       icon: "🛍️",
//       duration: 2000,
//     });
//   };

//   return (
//     <div className="container mx-auto px-6 py-10">
//       {/* Breadcrumbs */}
//   <Breadcrumbs
//     category={product.category}
//     subCategory={product.subCategory}
//     productName={product.name}
//   />
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {/* LEFT: Image Gallery */}
//         <div>
//           <div className="aspect-square overflow-hidden rounded-md border">
//             <img
//               src={selectedImage || product.images?.[0]}
//               alt={product.name}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Thumbnails */}
//           <div className="flex gap-3 mt-4 overflow-x-auto">
//             {product.images?.map((img: string, i: number) => (
//               <img
//                 key={i}
//                 src={img}
//                 alt={`thumb-${i}`}
//                 onClick={() => setSelectedImage(img)}
//                 className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${
//                   selectedImage === img ? "border-black" : "border-gray-200"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* RIGHT: Product Info */}
//         <div>
//           <h1 className="text-2xl md:text-3xl font-semibold mb-3">
//             {product.name}
//           </h1>

//           {/* Price */}
//           <div className="mb-4">
//             {product.salePrice ? (
//               <div>
//                 <p className="text-lg font-semibold text-[var(--color-burgundy)]">
//                   {product.currency} {product.salePrice.toLocaleString("en-NG")}
//                 </p>
//                 <div className="flex gap-3 text-sm text-gray-500">
//                   <span className="line-through">
//                     {product.currency} {product.price.toLocaleString("en-NG")}
//                   </span>
//                   <span className="text-red-600">
//                     Save{" "}
//                     {product.currency}{" "}
//                     {(product.price - product.salePrice).toLocaleString("en-NG")}
//                   </span>
//                 </div>
//               </div>
//             ) : (
//               <p className="text-lg font-semibold text-[var(--color-burgundy)]">
//                 {product.currency} {product.price.toLocaleString("en-NG")}
//               </p>
//             )}
//           </div>

//           <p className="text-gray-500 text-sm mb-4">
//             Shipping calculated at checkout.
//           </p>

//           {/* Color Selector */}
//           {product.colors?.length > 0 && (
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1">Color</label>
//               <select
//                 value={selectedColor}
//                 onChange={(e) => setSelectedColor(e.target.value)}
//                 className="border rounded-md p-2 w-40"
//               >
//                 <option value="">Select color</option>
//                 {product.colors.map((color: string) => (
//                   <option key={color}>{color}</option>
//                 ))}
//               </select>
//             </div>
//           )}

//           {/* Size Selector */}
//           {product.sizes?.length > 0 && (
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1">Size</label>
//               <select
//                 value={selectedSize}
//                 onChange={(e) => setSelectedSize(e.target.value)}
//                 className="border rounded-md p-2 w-40"
//               >
//                 <option value="">Select size</option>
//                 {product.sizes.map((size: string) => (
//                   <option key={size}>{size}</option>
//                 ))}
//               </select>
//             </div>
//           )}

//           {/* Quantity Selector */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">Quantity</label>
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 className="border px-3 py-1 rounded-md"
//               >
//                 -
//               </button>
//               <span>{quantity}</span>
//               <button
//                 onClick={() => setQuantity(quantity + 1)}
//                 className="border px-3 py-1 rounded-md"
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           {/* Stock Status */}
//           <p className="text-sm mb-4">
//             {product.inStock ? (
//               <span className="text-green-600 font-medium">
//                 ● In stock, ready to ship
//               </span>
//             ) : (
//               <span className="text-red-600 font-medium">Out of stock</span>
//             )}
//           </p>

//           {/* Add to Cart */}
//          {/* Add to Cart Button */}
// <button
//   onClick={handleAdd}
//   disabled={
//     !product.inStock ||
//     (product.colors?.length > 0 && !selectedColor) ||
//     (product.sizes?.length > 0 && !selectedSize)
//   }
//   className={`block w-full py-3 font-semibold uppercase tracking-wide rounded-md transition-all duration-300 ${
//     !product.inStock
//       ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//       : (product.colors?.length > 0 && !selectedColor) ||
//         (product.sizes?.length > 0 && !selectedSize)
//       ? "bg-gray-400 text-white cursor-not-allowed"
//       : "bg-black text-white hover:opacity-85"
//   }`}
// >
//   {!product.inStock
//     ? "OUT OF STOCK"
//     : product.colors?.length > 0 && !selectedColor
//     ? "SELECT COLOR"
//     : product.sizes?.length > 0 && !selectedSize
//     ? "SELECT SIZE"
//     : "ADD TO CART"}
// </button>



//           {/* Description */}
//           <div className="mt-8">
//             <p className="text-gray-700 leading-relaxed mb-4">
//               {product.description}
//             </p>

//             <div>
//               <h4 className="font-semibold mb-2">Details:</h4>
//               <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
//                 <li>Classic double-breasted front</li>
//                 <li>Relaxed fit</li>
//                 <li>Machine washable</li>
//               </ul>
//             </div>

//             <p className="mt-4 text-sm text-gray-500 italic">
//               Model is wearing size L. <br />
//               Model height: 5'8" / 176 cm, 76 kg.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Related Products */}
//       {related.length > 0 && (
//         <div className="mt-16">
//           <h2 className="text-2xl font-semibold text-center mb-6">
//             YOU MAY ALSO LIKE
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {related.map((p) => (
//               <ProductCard key={p._id} product={p} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import ProductCard from "@/components/ProductCard";
// import { toast } from "sonner";
// import { useCart } from "@/store/cart";
// import Breadcrumbs from "@/components/Breadcrumbs";

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   salePrice?: number;
//   currency: string;
//   images: string[];
//   category: string;
//   subCategory?: string;
//   inStock: boolean;
//   colors?: string[];
//   sizes?: string[];
//   description?: string;
// }

// export default function ProductPage() {
//   const { id } = useParams();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [selectedImage, setSelectedImage] = useState("");
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [related, setRelated] = useState<Product[]>([]);

//   const { addItem } = useCart();

//   useEffect(() => {
//     if (!id) return;

//     fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`)
//       .then((r) => r.json())
//       .then((data: Product) => {
//         setProduct(data);
//         setSelectedImage(data.images?.[0] || "");
//         fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/products?category=${data.category}&limit=6`
//         )
//           .then((r) => r.json())
//           .then((rel: { products: Product[] }) =>
//             setRelated(rel.products || [])
//           );
//       })
//       .catch(console.error);
//   }, [id]);

//   if (!product) return <p className="text-center py-20">Loading...</p>;

//   const handleAdd = () => {
//     if (!product.inStock) {
//       toast.error("Sorry, this product is out of stock.");
//       return;
//     }

//     if (product.colors?.length > 0 && !selectedColor) {
//       toast.warning("Please select a color before adding to cart.");
//       return;
//     }

//     if (product.sizes?.length > 0 && !selectedSize) {
//       toast.warning("Please select a size before adding to cart.");
//       return;
//     }

//     addItem({
//       ...product,
//       qty: quantity,
//       color: selectedColor || product.colors?.[0],
//       size: selectedSize || product.sizes?.[0],
//     });

//     toast.success(`${product.name} added to your cart!`, {
//       icon: "🛍️",
//       duration: 2000,
//     });
//   };

//   return (
//     <div className="container mx-auto px-6 py-10">
//       <Breadcrumbs
//         category={product.category}
//         subCategory={product.subCategory}
//         productName={product.name}
//       />

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {/* LEFT: Image Gallery */}
//         <div>
//           <div className="aspect-square overflow-hidden rounded-md border relative">
//             <Image
//               src={selectedImage || product.images?.[0]}
//               alt={product.name}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>

//           <div className="flex gap-3 mt-4 overflow-x-auto">
//             {product.images?.map((img, i) => (
//               <div
//                 key={i}
//                 className={`relative w-20 h-20 cursor-pointer border rounded-md ${
//                   selectedImage === img ? "border-black" : "border-gray-200"
//                 }`}
//                 onClick={() => setSelectedImage(img)}
//               >
//                 <Image
//                   src={img}
//                   alt={`thumb-${i}`}
//                   fill
//                   className="object-cover rounded-md"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT: Product Info */}
//         <div>
//           <h1 className="text-2xl md:text-3xl font-semibold mb-3">
//             {product.name}
//           </h1>

//           <div className="mb-4">
//             {product.salePrice ? (
//               <div>
//                 <p className="text-lg font-semibold text-[var(--color-burgundy)]">
//                   {product.currency} {product.salePrice.toLocaleString("en-NG")}
//                 </p>
//                 <div className="flex gap-3 text-sm text-gray-500">
//                   <span className="line-through">
//                     {product.currency} {product.price.toLocaleString("en-NG")}
//                   </span>
//                   <span className="text-red-600">
//                     Save{" "}
//                     {product.currency}{" "}
//                     {(product.price - product.salePrice).toLocaleString(
//                       "en-NG"
//                     )}
//                   </span>
//                 </div>
//               </div>
//             ) : (
//               <p className="text-lg font-semibold text-[var(--color-burgundy)]">
//                 {product.currency} {product.price.toLocaleString("en-NG")}
//               </p>
//             )}
//           </div>

//           <p className="text-gray-500 text-sm mb-4">
//             Shipping calculated at checkout.
//           </p>

//           {product.colors?.length > 0 && (
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1">Color</label>
//               <select
//                 value={selectedColor}
//                 onChange={(e) => setSelectedColor(e.target.value)}
//                 className="border rounded-md p-2 w-40"
//               >
//                 <option value="">Select color</option>
//                 {product.colors.map((color) => (
//                   <option key={color}>{color}</option>
//                 ))}
//               </select>
//             </div>
//           )}

//           {product.sizes?.length > 0 && (
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1">Size</label>
//               <select
//                 value={selectedSize}
//                 onChange={(e) => setSelectedSize(e.target.value)}
//                 className="border rounded-md p-2 w-40"
//               >
//                 <option value="">Select size</option>
//                 {product.sizes.map((size) => (
//                   <option key={size}>{size}</option>
//                 ))}
//               </select>
//             </div>
//           )}

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">Quantity</label>
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 className="border px-3 py-1 rounded-md"
//               >
//                 -
//               </button>
//               <span>{quantity}</span>
//               <button
//                 onClick={() => setQuantity(quantity + 1)}
//                 className="border px-3 py-1 rounded-md"
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           <p className="text-sm mb-4">
//             {product.inStock ? (
//               <span className="text-green-600 font-medium">
//                 ● In stock, ready to ship
//               </span>
//             ) : (
//               <span className="text-red-600 font-medium">Out of stock</span>
//             )}
//           </p>

//           <button
//             onClick={handleAdd}
//             disabled={
//               !product.inStock ||
//               (product.colors?.length > 0 && !selectedColor) ||
//               (product.sizes?.length > 0 && !selectedSize)
//             }
//             className={`block w-full py-3 font-semibold uppercase tracking-wide rounded-md transition-all duration-300 ${
//               !product.inStock
//                 ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                 : (product.colors?.length > 0 && !selectedColor) ||
//                   (product.sizes?.length > 0 && !selectedSize)
//                 ? "bg-gray-400 text-white cursor-not-allowed"
//                 : "bg-black text-white hover:opacity-85"
//             }`}
//           >
//             {!product.inStock
//               ? "OUT OF STOCK"
//               : product.colors?.length > 0 && !selectedColor
//               ? "SELECT COLOR"
//               : product.sizes?.length > 0 && !selectedSize
//               ? "SELECT SIZE"
//               : "ADD TO CART"}
//           </button>

//           <div className="mt-8">
//             <p className="text-gray-700 leading-relaxed mb-4">
//               {product.description}
//             </p>

//             <div>
//               <h4 className="font-semibold mb-2">Details:</h4>
//               <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
//                 <li>Classic double-breasted front</li>
//                 <li>Relaxed fit</li>
//                 <li>Machine washable</li>
//               </ul>
//             </div>

//             <p className="mt-4 text-sm text-gray-500 italic">
//               Model is wearing size L. <br />
//               Model height: 5&apos;8&quot; / 176 cm, 76 kg.
//             </p>
//           </div>
//         </div>
//       </div>

//       {related.length > 0 && (
//         <div className="mt-16">
//           <h2 className="text-2xl font-semibold text-center mb-6">
//             YOU MAY ALSO LIKE
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {related.map((p) => (
//               <ProductCard key={p._id} product={p} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import ProductCard from "@/components/ProductCard";
// import { toast } from "sonner";
// import { useCart } from "@/store/cart";
// import Breadcrumbs from "@/components/Breadcrumbs";

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   salePrice?: number;
//   currency: string;
//   images: string[];
//   category: string;
//   subCategory?: string;
//   inStock: boolean;
//   colors?: string[];
//   sizes?: string[];
//   description?: string;
// }

// export default function ProductPage() {
//   const { id } = useParams();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [selectedImage, setSelectedImage] = useState("");
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [related, setRelated] = useState<Product[]>([]);

//   const { addItem } = useCart();

//   useEffect(() => {
//     if (!id) return;

//     fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`)
//       .then((r) => r.json())
//       .then((data: Product) => {
//         setProduct(data);
//         setSelectedImage(data.images?.[0] || "");
//         fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/products?category=${data.category}&limit=6`
//         )
//           .then((r) => r.json())
//           .then((rel: { products: Product[] }) =>
//             setRelated(rel.products || [])
//           );
//       })
//       .catch(console.error);
//   }, [id]);

//   if (!product) return <p className="text-center py-20">Loading...</p>;

//   const handleAdd = () => {
//     if (!product.inStock) {
//       toast.error("Sorry, this product is out of stock.");
//       return;
//     }

//     // ✅ Fix: ensure colors is defined before checking length
//     if (product.colors && product.colors.length > 0 && !selectedColor) {
//       toast.warning("Please select a color before adding to cart.");
//       return;
//     }

//     // ✅ Fix: ensure sizes is defined before checking length
//     if (product.sizes && product.sizes.length > 0 && !selectedSize) {
//       toast.warning("Please select a size before adding to cart.");
//       return;
//     }

//     addItem({
//       ...product,
//       qty: quantity,
//       color: selectedColor || (product.colors && product.colors[0]),
//       size: selectedSize || (product.sizes && product.sizes[0]),
//     });

//     toast.success(`${product.name} added to your cart!`, {
//       icon: "🛍️",
//       duration: 2000,
//     });
//   };

//   return (
//     <div className="container mx-auto px-6 py-10">
//       <Breadcrumbs
//         category={product.category}
//         subCategory={product.subCategory}
//         productName={product.name}
//       />

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {/* LEFT: Image Gallery */}
//         <div>
//           <div className="aspect-square overflow-hidden rounded-md border relative">
//             <Image
//               src={selectedImage || product.images?.[0]}
//               alt={product.name}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>

//           <div className="flex gap-3 mt-4 overflow-x-auto">
//             {product.images?.map((img, i) => (
//               <div
//                 key={i}
//                 className={`relative w-20 h-20 cursor-pointer border rounded-md ${
//                   selectedImage === img ? "border-black" : "border-gray-200"
//                 }`}
//                 onClick={() => setSelectedImage(img)}
//               >
//                 <Image
//                   src={img}
//                   alt={`thumb-${i}`}
//                   fill
//                   className="object-cover rounded-md"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT: Product Info */}
//         <div>
//           <h1 className="text-2xl md:text-3xl font-semibold mb-3">
//             {product.name}
//           </h1>

//           <div className="mb-4">
//             {product.salePrice ? (
//               <div>
//                 <p className="text-lg font-semibold text-[var(--color-burgundy)]">
//                   {product.currency} {product.salePrice.toLocaleString("en-NG")}
//                 </p>
//                 <div className="flex gap-3 text-sm text-gray-500">
//                   <span className="line-through">
//                     {product.currency} {product.price.toLocaleString("en-NG")}
//                   </span>
//                   <span className="text-red-600">
//                     Save{" "}
//                     {product.currency}{" "}
//                     {(product.price - product.salePrice).toLocaleString(
//                       "en-NG"
//                     )}
//                   </span>
//                 </div>
//               </div>
//             ) : (
//               <p className="text-lg font-semibold text-[var(--color-burgundy)]">
//                 {product.currency} {product.price.toLocaleString("en-NG")}
//               </p>
//             )}
//           </div>

//           <p className="text-gray-500 text-sm mb-4">
//             Shipping calculated at checkout.
//           </p>

//           {product.colors && product.colors.length > 0 && (
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1">Color</label>
//               <select
//                 value={selectedColor}
//                 onChange={(e) => setSelectedColor(e.target.value)}
//                 className="border rounded-md p-2 w-40"
//               >
//                 <option value="">Select color</option>
//                 {product.colors.map((color) => (
//                   <option key={color}>{color}</option>
//                 ))}
//               </select>
//             </div>
//           )}

//           {product.sizes && product.sizes.length > 0 && (
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1">Size</label>
//               <select
//                 value={selectedSize}
//                 onChange={(e) => setSelectedSize(e.target.value)}
//                 className="border rounded-md p-2 w-40"
//               >
//                 <option value="">Select size</option>
//                 {product.sizes.map((size) => (
//                   <option key={size}>{size}</option>
//                 ))}
//               </select>
//             </div>
//           )}

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">Quantity</label>
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 className="border px-3 py-1 rounded-md"
//               >
//                 -
//               </button>
//               <span>{quantity}</span>
//               <button
//                 onClick={() => setQuantity(quantity + 1)}
//                 className="border px-3 py-1 rounded-md"
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           <p className="text-sm mb-4">
//             {product.inStock ? (
//               <span className="text-green-600 font-medium">
//                 ● In stock, ready to ship
//               </span>
//             ) : (
//               <span className="text-red-600 font-medium">Out of stock</span>
//             )}
//           </p>

//           <button
//             onClick={handleAdd}
//             disabled={
//               !product.inStock ||
//               (product.colors && product.colors.length > 0 && !selectedColor) ||
//               (product.sizes && product.sizes.length > 0 && !selectedSize)
//             }
//             className={`block w-full py-3 font-semibold uppercase tracking-wide rounded-md transition-all duration-300 ${
//               !product.inStock
//                 ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                 : (product.colors &&
//                     product.colors.length > 0 &&
//                     !selectedColor) ||
//                   (product.sizes && product.sizes.length > 0 && !selectedSize)
//                 ? "bg-gray-400 text-white cursor-not-allowed"
//                 : "bg-black text-white hover:opacity-85"
//             }`}
//           >
//             {!product.inStock
//               ? "OUT OF STOCK"
//               : product.colors &&
//                 product.colors.length > 0 &&
//                 !selectedColor
//               ? "SELECT COLOR"
//               : product.sizes &&
//                 product.sizes.length > 0 &&
//                 !selectedSize
//               ? "SELECT SIZE"
//               : "ADD TO CART"}
//           </button>

//           <div className="mt-8">
//             <p className="text-gray-700 leading-relaxed mb-4">
//               {product.description}
//             </p>

//             <div>
//               <h4 className="font-semibold mb-2">Details:</h4>
//               <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
//                 <li>Classic double-breasted front</li>
//                 <li>Relaxed fit</li>
//                 <li>Machine washable</li>
//               </ul>
//             </div>

//             <p className="mt-4 text-sm text-gray-500 italic">
//               Model is wearing size L. <br />
//               Model height: 5&apos;8&quot; / 176 cm, 76 kg.
//             </p>
//           </div>
//         </div>
//       </div>

//       {related.length > 0 && (
//         <div className="mt-16">
//           <h2 className="text-2xl font-semibold text-center mb-6">
//             YOU MAY ALSO LIKE
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {related.map((p) => (
//               <ProductCard key={p._id} product={p} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { toast } from "sonner";
import { useCart } from "@/store/cart";
import Breadcrumbs from "@/components/Breadcrumbs";

interface Product {
  _id: string;
  name: string;
  price: number;
  salePrice?: number;
  currency: string;
  images: string[];
  category: string;
  subCategory?: string;
  inStock: boolean;
  colors?: string[];
  sizes?: string[];
  description?: string;
}

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [related, setRelated] = useState<Product[]>([]);

  const { addItem } = useCart();

  // ✅ Fetch product and related items
  useEffect(() => {
    if (!id) return;

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`)
      .then((r) => r.json())
      .then((data: Product) => {
        setProduct(data);
        setSelectedImage(data.images?.[0] || "");
        fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/products?category=${data.category}&limit=6`
        )
          .then((r) => r.json())
          .then((rel: { products: Product[] }) =>
            setRelated(rel.products || [])
          );
      })
      .catch(console.error);
  }, [id]);

  if (!product) return <p className="text-center py-20">Loading...</p>;

  // ✅ Add to cart safely
  const handleAdd = () => {
    if (!product.inStock) {
      toast.error("Sorry, this product is out of stock.");
      return;
    }

    if (product.colors && product.colors.length > 0 && !selectedColor) {
      toast.warning("Please select a color before adding to cart.");
      return;
    }

    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      toast.warning("Please select a size before adding to cart.");
      return;
    }

    addItem({
      _id: product._id,
      name: product.name,
      price: product.salePrice || product.price,
      image: product.images?.[0] || "/placeholder.jpg", // ✅ required for CartItem
      qty: quantity,
      color: selectedColor || (product.colors && product.colors[0]),
      size: selectedSize || (product.sizes && product.sizes[0]),
    });

    toast.success(`${product.name} added to your cart!`, {
      icon: "🛍️",
      duration: 2000,
    });
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <Breadcrumbs
        category={product.category}
        subCategory={product.subCategory}
        productName={product.name}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT: Image Gallery */}
        <div>
          <div className="aspect-square overflow-hidden rounded-md border relative">
            <Image
              src={selectedImage || product.images?.[0]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex gap-3 mt-4 overflow-x-auto">
            {product.images?.map((img, i) => (
              <div
                key={i}
                className={`relative w-20 h-20 cursor-pointer border rounded-md ${
                  selectedImage === img ? "border-black" : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`thumb-${i}`}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">
            {product.name}
          </h1>

          {/* Price */}
          <div className="mb-4">
            {product.salePrice ? (
              <div>
                <p className="text-lg font-semibold text-[var(--color-burgundy)]">
                  {product.currency} {product.salePrice.toLocaleString("en-NG")}
                </p>
                <div className="flex gap-3 text-sm text-gray-500">
                  <span className="line-through">
                    {product.currency} {product.price.toLocaleString("en-NG")}
                  </span>
                  <span className="text-red-600">
                    Save{" "}
                    {product.currency}{" "}
                    {(product.price - product.salePrice).toLocaleString(
                      "en-NG"
                    )}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-lg font-semibold text-[var(--color-burgundy)]">
                {product.currency} {product.price.toLocaleString("en-NG")}
              </p>
            )}
          </div>

          <p className="text-gray-500 text-sm mb-4">
            Shipping calculated at checkout.
          </p>

          {/* Color Selector */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Color</label>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="border rounded-md p-2 w-40"
              >
                <option value="">Select color</option>
                {product.colors.map((color) => (
                  <option key={color}>{color}</option>
                ))}
              </select>
            </div>
          )}

          {/* Size Selector */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Size</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="border rounded-md p-2 w-40"
              >
                <option value="">Select size</option>
                {product.sizes.map((size) => (
                  <option key={size}>{size}</option>
                ))}
              </select>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Quantity</label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="border px-3 py-1 rounded-md"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="border px-3 py-1 rounded-md"
              >
                +
              </button>
            </div>
          </div>

          {/* Stock Info */}
          <p className="text-sm mb-4">
            {product.inStock ? (
              <span className="text-green-600 font-medium">
                ● In stock, ready to ship
              </span>
            ) : (
              <span className="text-red-600 font-medium">Out of stock</span>
            )}
          </p>

          {/* Add to Cart */}
          <button
            onClick={handleAdd}
            disabled={
              !product.inStock ||
              (product.colors && product.colors.length > 0 && !selectedColor) ||
              (product.sizes && product.sizes.length > 0 && !selectedSize)
            }
            className={`block w-full py-3 font-semibold uppercase tracking-wide rounded-md transition-all duration-300 ${
              !product.inStock
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : (product.colors &&
                    product.colors.length > 0 &&
                    !selectedColor) ||
                  (product.sizes && product.sizes.length > 0 && !selectedSize)
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-black text-white hover:opacity-85"
            }`}
          >
            {!product.inStock
              ? "OUT OF STOCK"
              : product.colors &&
                product.colors.length > 0 &&
                !selectedColor
              ? "SELECT COLOR"
              : product.sizes &&
                product.sizes.length > 0 &&
                !selectedSize
              ? "SELECT SIZE"
              : "ADD TO CART"}
          </button>

          {/* Description */}
          <div className="mt-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              {product.description}
            </p>

            <div>
              <h4 className="font-semibold mb-2">Details:</h4>
              <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                <li>Classic double-breasted front</li>
                <li>Relaxed fit</li>
                <li>Machine washable</li>
              </ul>
            </div>

            <p className="mt-4 text-sm text-gray-500 italic">
              Model is wearing size L. <br />
              Model height: 5&apos;8&quot; / 176 cm, 76 kg.
            </p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-6">
            YOU MAY ALSO LIKE
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
