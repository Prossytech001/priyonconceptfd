// "use client";
// import Link from "next/link";
// import { useCart } from "@/store/cart";

// export default function Navbar() {
//   const cart = useCart();

//   return (
//     <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
//       <nav className="container mx-auto flex items-center justify-between py-4 px-6">
//         {/* Logo */}
//         <Link
//           href="/"
//           className="text-3xl font-bold tracking-wide"
//           style={{ fontFamily: "var(--font-heading)", color: "var(--color-indigo)" }}
//         >
//           Priyon
//         </Link>

//         {/* Menu */}
//         <div className="hidden md:flex gap-8 text-gray-700 font-medium text-lg" style={{ fontFamily: "var(--font-body)" }}>
//           <Link href="/" className="hover:text-priyon-burgundy transition">Home</Link>
//           <Link href="/shop" className="hover:text-priyon-burgundy transition">Shop</Link>
//           <Link href="/about" className="hover:text-priyon-burgundy transition">About</Link>
//           <Link href="/contact" className="hover:text-priyon-burgundy transition">Contact</Link>
//         </div>

//         {/* Cart */}
//         <Link href="/cart" className="relative">
//           <span className="text-2xl">🛒</span>
//           {cart.items.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-[var(--color-burgundy)] text-white text-xs rounded-full px-2 py-0.5">
//               {cart.items.length}
//             </span>
//           )}
//         </Link>
//       </nav>
//     </header>
//   );
// }
// "use client";
// import Link from "next/link";
// import { Search, ShoppingBag } from "lucide-react"; // lucide-react icons

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
//       <nav className="container mx-auto flex items-center justify-between py-4 px-6">
//         {/* Left: Search */}
//         <div className="flex items-center">
//           <button aria-label="Search" className="p-2">
//             <Search className="w-5 h-5 text-black" />
//           </button>
//         </div>

//         {/* Middle: Nav Links + Logo */}
//         <div className="flex items-center gap-12">
//           {/* Links */}
//           <ul
//             className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-black"
//             style={{ fontFamily: "var(--font-body)" }}
//           >
//             <li><Link href="/">HOME</Link></li>
//             <li className="relative group">
//               <button className="flex items-center gap-1">
//                 MEN <span className="text-xs">▼</span>
//               </button>
//               {/* Dropdown */}
//               <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg border rounded-md py-2 w-40">
//                 <li><Link href="/shop/men/tops" className="block px-4 py-2 hover:bg-gray-100">Tops</Link></li>
//                 <li><Link href="/shop/men/bottoms" className="block px-4 py-2 hover:bg-gray-100">Bottoms</Link></li>
//                 <li><Link href="/shop/men/shoes" className="block px-4 py-2 hover:bg-gray-100">Shoes</Link></li>
//               </ul>
//             </li>
//             <li className="relative group">
//               <button className="flex items-center gap-1">
//                 WOMEN <span className="text-xs">▼</span>
//               </button>
//               {/* Dropdown */}
//               <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg border rounded-md py-2 w-40">
//                 <li><Link href="/shop/women/dresses" className="block px-4 py-2 hover:bg-gray-100">Dresses</Link></li>
//                 <li><Link href="/shop/women/tops" className="block px-4 py-2 hover:bg-gray-100">Tops</Link></li>
//                 <li><Link href="/shop/women/accessories" className="block px-4 py-2 hover:bg-gray-100">Accessories</Link></li>
//               </ul>
//             </li>
//             <li><Link href="/shop/accessories">ACCESSORIES</Link></li>
//             <li><Link href="/shop/jewelry">JEWELRY</Link></li>
//             <li><Link href="/contact">CONTACT US</Link></li>
//             <li><Link href="/track-order">TRACK YOUR ORDER</Link></li>
//           </ul>

//           {/* Logo */}
//           <Link
//             href="/"
//             className="text-2xl font-bold tracking-widest"
//             style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
//           >
//             PRIYON
//           </Link>
//         </div>

//         {/* Right: Cart */}
//         <div className="flex items-center">
//           <Link href="/cart" aria-label="Cart" className="p-2">
//             <ShoppingBag className="w-5 h-5 text-black" />
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// }
// import Link from "next/link";
// import Image from "next/image";
// import { Search, ShoppingBag, ChevronDown } from "lucide-react";

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
//       <div className="container mx-auto px-6">

//         {/* Top row: Search | Logo (center) | Cart */}
//         <div className="flex justify-between items-center py-4">
//           {/* Left: Search */}
//           <div className="flex items-center">
//             <button aria-label="Search" className="p-2">
//               <Search className="w-5 h-5 text-black" />
//             </button>
//           </div>

//           {/* Center: Logo */}
//           <div className="flex items-center justify-center">
//             <Link
//               href="/"
//               className="text-2xl md:text-3xl font-bold tracking-[0.25em]"
//               style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
//             >
//                 <Image
//                   src="/logo/priyonlogo1.png"
//                   alt="Ennamdy"
//                   width={90}
//                   height={90}
//                   className="object-cover rounded-xl"
//                   />
//             </Link>
//           </div>

//           {/* Right: Cart */}
//           <div className="flex items-center justify-end">
//             <Link href="/cart" aria-label="Cart" className="p-2">
//               <ShoppingBag className="w-5 h-5 text-black" />
//             </Link>
//           </div>
//         </div>

//         {/* Bottom row: centered nav links */}
//         <div className="pb-3">
//           <ul
//             className="flex flex-wrap items-center justify-center gap-8 text-[12px] md:text-sm font-semibold tracking-[0.35em] text-black"
//             style={{ fontFamily: "var(--font-body)" }}
//           >
//             <li><Link href="/">HOME</Link></li>

//             {/* MEN (dropdown) */}
//             <li className="relative group">
//               <button className="flex items-center gap-1">
//                 MEN <ChevronDown className="w-3.5 h-3.5" />
//               </button>
//               <ul className="absolute left-1/2 -translate-x-1/2 mt-3 hidden group-hover:block bg-white border shadow-md rounded-md py-2 w-52">
//                 <li><Link href="/shop/men/tops" className="block px-4 py-2 hover:bg-gray-100">Tops</Link></li>
//                 <li><Link href="/shop/men/bottoms" className="block px-4 py-2 hover:bg-gray-100">Bottoms</Link></li>
//                 <li><Link href="/shop/men/footwear" className="block px-4 py-2 hover:bg-gray-100">Footwear</Link></li>
//               </ul>
//             </li>

//             {/* WOMEN (dropdown) */}
//             <li className="relative group">
//               <button className="flex items-center gap-1">
//                 WOMEN <ChevronDown className="w-3.5 h-3.5" />
//               </button>
//               <ul className="absolute left-1/2 -translate-x-1/2 mt-3 hidden group-hover:block bg-white border shadow-md rounded-md py-2 w-52">
//                 <li><Link href="/shop/women/dresses" className="block px-4 py-2 hover:bg-gray-100">Dresses</Link></li>
//                 <li><Link href="/shop/women/tops" className="block px-4 py-2 hover:bg-gray-100">Tops</Link></li>
//                 <li><Link href="/shop/women/footwear" className="block px-4 py-2 hover:bg-gray-100">Footwear</Link></li>
//               </ul>
//             </li>

//             <li><Link href="/shop/accessories">ACCESSORIES</Link></li>
//             <li><Link href="/shop/jewelry">JEWELRY</Link></li>
//             <li><Link href="/contact">CONTACT US</Link></li>
//             <li><Link href="/track-order">TRACK YOUR ORDER</Link></li>
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// }
// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { Search, ShoppingBag, ChevronDown, Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openMenu, setOpenMenu] = useState<string | null>(null);

//   return (
//     <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
//       <div className="container mx-auto px-4 md:px-6">

//         {/* Top row: mobile + desktop */}
//         <div className="flex justify-between items-center py-4">
//           {/* Left: Hamburger (mobile) */}
//           <div className="flex items-center gap-4">
//             <button
//               className="md:hidden p-2"
//               onClick={() => setMobileOpen(true)}
//               aria-label="Menu"
//             >
//               <Menu className="w-8 h-8 text-black" />
//             </button>
//           </div>

//           {/* Center: Logo */}
//           <div className="flex items-center justify-center">
//             <Link href="/" className="block">
//               <Image
//                 src="/logo/priyonlogo1.png"
//                 alt="Priyon"
//                 width={90}
//                 height={90}
//                 className="object-cover rounded-xl"
//               />
//             </Link>
//           </div>

//           {/* Right: Search + Cart */}
//           <div className="flex items-center gap-1">
//             <button aria-label="Search" className=" md:block ">
//               <Search className="w-8 h-8 text-black" />
//             </button>
//             <Link href="/cart" aria-label="Cart" className="">
//               <ShoppingBag className="w-8 h-8 text-black" />
//             </Link>
//           </div>
//         </div>

//         {/* Bottom nav links (desktop only) */}
//         <div className="hidden md:block pb-3">
//           <ul
//             className="flex items-center justify-center gap-8 text-[12px] md:text-sm font-semibold tracking-[0.35em] text-black"
//             style={{ fontFamily: "var(--font-body)" }}
//           >
//             <li><Link href="/">HOME</Link></li>
//             <li className="relative group">
//               <button className="flex items-center gap-1">MEN <ChevronDown className="w-3.5 h-3.5" /></button>
//               <ul className="absolute left-1/2 -translate-x-1/2 mt-3 hidden group-hover:block bg-white border shadow-md rounded-md py-2 w-52">
//                 <li><Link href="/shop/men/tops" className="block px-4 py-2 hover:bg-gray-100">Tops</Link></li>
//                 <li><Link href="/shop/men/bottoms" className="block px-4 py-2 hover:bg-gray-100">Bottoms</Link></li>
//                 <li><Link href="/shop/men/footwear" className="block px-4 py-2 hover:bg-gray-100">Footwear</Link></li>
//               </ul>
//             </li>
//             <li className="relative group">
//               <button className="flex items-center gap-1">WOMEN <ChevronDown className="w-3.5 h-3.5" /></button>
//               <ul className="absolute left-1/2 -translate-x-1/2 mt-3 hidden group-hover:block bg-white border shadow-md rounded-md py-2 w-52">
//                 <li><Link href="/shop/women/dresses" className="block px-4 py-2 hover:bg-gray-100">Dresses</Link></li>
//                 <li><Link href="/shop/women/tops" className="block px-4 py-2 hover:bg-gray-100">Tops</Link></li>
//                 <li><Link href="/shop/women/footwear" className="block px-4 py-2 hover:bg-gray-100">Footwear</Link></li>
//               </ul>
//             </li>
//             <li><Link href="/shop/accessories">ACCESSORIES</Link></li>
//             <li><Link href="/shop/jewelry">JEWELRY</Link></li>
//             <li><Link href="/contact">CONTACT US</Link></li>
//             <li><Link href="/track-order">TRACK YOUR ORDER</Link></li>
//           </ul>
//         </div>
//       </div>

//       {/* Mobile drawer */}
//       {mobileOpen && (
//         <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setMobileOpen(false)}>
//           <div
//             className="absolute top-0 left-0 w-72 h-full bg-white shadow-lg p-6 flex flex-col gap-4 overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close button */}
//             <button
//               className="ml-auto mb-4"
//               onClick={() => setMobileOpen(false)}
//               aria-label="Close"
//             >
//               <X className="w-6 h-6 text-black" />
//             </button>

//             {/* Mobile links */}
//             <ul className="flex flex-col gap-4 font-semibold tracking-wide text-black text-sm">
//               <li><Link href="/" onClick={() => setMobileOpen(false)}>HOME</Link></li>

//               {/* Men expandable */}
//               <li>
//                 <button
//                   className="flex justify-between w-full"
//                   onClick={() => setOpenMenu(openMenu === "men" ? null : "men")}
//                 >
//                   MEN <ChevronDown className="w-4 h-4" />
//                 </button>
//                 {openMenu === "men" && (
//                   <ul className="mt-2 ml-4 flex flex-col gap-2 text-gray-600">
//                     <li><Link href="/shop/men/tops" onClick={() => setMobileOpen(false)}>Tops</Link></li>
//                     <li><Link href="/shop/men/bottoms" onClick={() => setMobileOpen(false)}>Bottoms</Link></li>
//                     <li><Link href="/shop/men/footwear" onClick={() => setMobileOpen(false)}>Footwear</Link></li>
//                   </ul>
//                 )}
//               </li>

//               {/* Women expandable */}
//               <li>
//                 <button
//                   className="flex justify-between w-full"
//                   onClick={() => setOpenMenu(openMenu === "women" ? null : "women")}
//                 >
//                   WOMEN <ChevronDown className="w-4 h-4" />
//                 </button>
//                 {openMenu === "women" && (
//                   <ul className="mt-2 ml-4 flex flex-col gap-2 text-gray-600">
//                     <li><Link href="/shop/women/dresses" onClick={() => setMobileOpen(false)}>Dresses</Link></li>
//                     <li><Link href="/shop/women/tops" onClick={() => setMobileOpen(false)}>Tops</Link></li>
//                     <li><Link href="/shop/women/footwear" onClick={() => setMobileOpen(false)}>Footwear</Link></li>
//                   </ul>
//                 )}
//               </li>

//               <li><Link href="/shop/accessories" onClick={() => setMobileOpen(false)}>ACCESSORIES</Link></li>
//               <li><Link href="/shop/jewelry" onClick={() => setMobileOpen(false)}>JEWELRY</Link></li>
//               <li><Link href="/contact" onClick={() => setMobileOpen(false)}>CONTACT US</Link></li>
//               <li><Link href="/track-order" onClick={() => setMobileOpen(false)}>TRACK YOUR ORDER</Link></li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { Search, ShoppingBag, ChevronDown, Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openMenu, setOpenMenu] = useState<string | null>(null);

//   return (
//     <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
//       <div className="container mx-auto px-4 md:px-6">
//         {/* Top row: mobile + desktop */}
//         <div className="flex justify-between items-center py-4">
//           {/* Left: Hamburger (mobile) */}
//           <div className="flex items-center gap-4">
//             <button
//               className="md:hidden p-2"
//               onClick={() => setMobileOpen(true)}
//               aria-label="Menu"
//             >
//               <Menu className="w-8 h-8 text-black" />
//             </button>
//           </div>

//           {/* Center: Logo */}
//           <div className="flex items-center justify-center">
//             <Link href="/" className="block">
//               <Image
//                 src="/logo/priyonlogo1.png"
//                 alt="Priyon"
//                 width={90}
//                 height={90}
//                 className="object-cover rounded-xl"
//               />
//             </Link>
//           </div>

//           {/* Right: Search + Cart */}
//           <div className="flex items-center gap-1">
//             <button aria-label="Search" className="md:block">
//               <Search className="w-8 h-8 text-black" />
//             </button>
//             <Link href="/cart" aria-label="Cart">
//               <ShoppingBag className="w-8 h-8 text-black" />
//             </Link>
//           </div>
//         </div>

//         {/* Bottom nav links (desktop only) */}
//         <div className="hidden md:block pb-3">
//           <ul
//             className="flex items-center justify-center gap-8 text-[12px] md:text-sm font-semibold tracking-[0.35em] text-black"
//             style={{ fontFamily: "var(--font-body)" }}
//           >
//             <li><Link href="/">HOME</Link></li>

//             {/* Men dropdown */}
//             <li className="relative group">
//               <button className="flex items-center gap-1">
//                 MEN <ChevronDown className="w-3.5 h-3.5" />
//               </button>
//               <ul className="absolute left-1/2 -translate-x-1/2 mt-3 hidden group-hover:block bg-white border shadow-md rounded-md py-2 w-52">
//                 <li><Link href="/shop?category=men&sub=tops" className="block px-4 py-2 hover:bg-gray-100">Tops</Link></li>
//                 <li><Link href="/shop?category=men&sub=bottoms" className="block px-4 py-2 hover:bg-gray-100">Bottoms</Link></li>
//                 <li><Link href="/shop?category=men&sub=footwear" className="block px-4 py-2 hover:bg-gray-100">Footwear</Link></li>
//               </ul>
//             </li>

//             {/* Women dropdown */}
//             <li className="relative group">
//               <button className="flex items-center gap-1">
//                 WOMEN <ChevronDown className="w-3.5 h-3.5" />
//               </button>
//               <ul className="absolute left-1/2 -translate-x-1/2 mt-3 hidden group-hover:block bg-white border shadow-md rounded-md py-2 w-52">
//                 <li><Link href="/shop?category=women&sub=dresses" className="block px-4 py-2 hover:bg-gray-100">Dresses</Link></li>
//                 <li><Link href="/shop?category=women&sub=tops" className="block px-4 py-2 hover:bg-gray-100">Tops</Link></li>
//                 <li><Link href="/shop?category=women&sub=footwear" className="block px-4 py-2 hover:bg-gray-100">Footwear</Link></li>
//               </ul>
//             </li>

//             <li><Link href="/shop?category=accessories">ACCESSORIES</Link></li>
//             <li><Link href="/shop?category=jewelry">JEWELRY</Link></li>
//             <li><Link href="/contact">CONTACT US</Link></li>
//             <li><Link href="/track-order">TRACK YOUR ORDER</Link></li>
//           </ul>
//         </div>
//       </div>

//       {/* Mobile drawer */}
//       {mobileOpen && (
//         <div
//           className="fixed inset-0 z-50 bg-black/40"
//           onClick={() => setMobileOpen(false)}
//         >
//           <div
//             className="absolute top-0 left-0 w-72 h-full bg-white shadow-lg p-6 flex flex-col gap-4 overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close button */}
//             <button
//               className="ml-auto mb-4"
//               onClick={() => setMobileOpen(false)}
//               aria-label="Close"
//             >
//               <X className="w-6 h-6 text-black" />
//             </button>

//             {/* Mobile links */}
//             <ul className="flex flex-col gap-4 font-semibold tracking-wide text-black text-sm">
//               <li><Link href="/" onClick={() => setMobileOpen(false)}>HOME</Link></li>

//               {/* Men expandable */}
//               <li>
//                 <button
//                   className="flex justify-between w-full"
//                   onClick={() => setOpenMenu(openMenu === "men" ? null : "men")}
//                 >
//                   MEN <ChevronDown className="w-4 h-4" />
//                 </button>
//                 {openMenu === "men" && (
//                   <ul className="mt-2 ml-4 flex flex-col gap-2 text-gray-600">
//                     <li><Link href="/shop?category=men&sub=tops" onClick={() => setMobileOpen(false)}>Tops</Link></li>
//                     <li><Link href="/shop?category=men&sub=bottoms" onClick={() => setMobileOpen(false)}>Bottoms</Link></li>
//                     <li><Link href="/shop?category=men&sub=footwear" onClick={() => setMobileOpen(false)}>Footwear</Link></li>
//                   </ul>
//                 )}
//               </li>

//               {/* Women expandable */}
//               <li>
//                 <button
//                   className="flex justify-between w-full"
//                   onClick={() => setOpenMenu(openMenu === "women" ? null : "women")}
//                 >
//                   WOMEN <ChevronDown className="w-4 h-4" />
//                 </button>
//                 {openMenu === "women" && (
//                   <ul className="mt-2 ml-4 flex flex-col gap-2 text-gray-600">
//                     <li><Link href="/shop?category=women&sub=dresses" onClick={() => setMobileOpen(false)}>Dresses</Link></li>
//                     <li><Link href="/shop?category=women&sub=tops" onClick={() => setMobileOpen(false)}>Tops</Link></li>
//                     <li><Link href="/shop?category=women&sub=footwear" onClick={() => setMobileOpen(false)}>Footwear</Link></li>
//                   </ul>
//                 )}
//               </li>

//               <li><Link href="/shop?category=accessories" onClick={() => setMobileOpen(false)}>ACCESSORIES</Link></li>
//               <li><Link href="/shop?category=jewelry" onClick={() => setMobileOpen(false)}>JEWELRY</Link></li>
//               <li><Link href="/contact" onClick={() => setMobileOpen(false)}>CONTACT US</Link></li>
//               <li><Link href="/track-order" onClick={() => setMobileOpen(false)}>TRACK YOUR ORDER</Link></li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Search, ShoppingBag, ChevronDown, Menu, X } from "lucide-react";
import { useCart } from "@/store/cart"; // ✅ import Zustand store
import SearchModal from "@/components/SearchModal";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const cart = useCart(); // ✅ access cart state
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top row: mobile + desktop */}
        <div className="flex justify-between items-center py-4">
          {/* Left: Hamburger (mobile) */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Menu"
            >
              <Menu className="w-8 h-8 text-black" />
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex items-center justify-center">
            <Link href="/" className="block">
              <Image
                src="/logo/priyonlogo1.png"
                alt="Priyon"
                width={90}
                height={90}
                className="object-cover rounded-xl"
              />
            </Link>
          </div>
           <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

          {/* Right: Search + Cart */}
          <div className="flex items-center gap-3">
            <button aria-label="Search" onClick={() => setSearchOpen(true)}>
               <Search className="w-8 h-8 text-black" />
            </button>

            <Link href="/cart" aria-label="Cart" className="relative">
              <ShoppingBag className="w-7 h-7 text-black" />
              {/* 🛍️ Cart Count Badge */}
              {cart.items.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-[var(--color-burgundy)] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-pop">
                  {cart.items.length}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Bottom nav links (desktop only) */}
        <div className="hidden md:block pb-3">
          <ul
            className="flex items-center justify-center gap-8 text-[12px] md:text-sm font-semibold tracking-[0.35em] text-black"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <li><Link href="/">HOME</Link></li>

            {/* Men dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-1">
                MEN <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <ul className="absolute left-1/2 -translate-x-1/2 mt-3 hidden group-hover:block bg-white border shadow-md rounded-md py-2 w-52">
                <li><Link href="/shop?category=men&sub=shirt" className="block px-4 py-2 hover:bg-gray-100">Shirt</Link></li>
                <li><Link href="/shop?category=men&sub=senator" className="block px-4 py-2 hover:bg-gray-100">Senator</Link></li>
                <li><Link href="/shop?category=men&sub=trouser" className="block px-4 py-2 hover:bg-gray-100">Trouser</Link></li>
                <li><Link href="/shop?category=men&sub=suit" className="block px-4 py-2 hover:bg-gray-100">Suit</Link></li>
                <li><Link href="/shop?category=men&sub=agbada" className="block px-4 py-2 hover:bg-gray-100">Agbada Kwanu</Link></li>
                <li><Link href="/shop?category=men&sub=ankara" className="block px-4 py-2 hover:bg-gray-100">Ankara</Link></li>
              </ul>
            </li>

            {/* Women dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-1">
                WOMEN <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <ul className="absolute left-1/2 -translate-x-1/2 mt-3 hidden group-hover:block bg-white border shadow-md rounded-md py-2 w-52">
                <li><Link href="/shop?category=women&sub=gown" className="block px-4 py-2 hover:bg-gray-100">Gown</Link></li>
               <li><Link href="/shop?category=women&sub=blouse" className="block px-4 py-2 hover:bg-gray-100">Blouse</Link></li>
               <li><Link href="/shop?category=women&sub=skirt" className="block px-4 py-2 hover:bg-gray-100">Skirt & Wrapper</Link></li>
               <li><Link href="/shop?category=women&sub=ankara" className="block px-4 py-2 hover:bg-gray-100">Ankara Dress</Link></li>
              <li><Link href="/shop?category=women&sub=native-top" className="block px-4 py-2 hover:bg-gray-100">Native Top</Link></li>
              <li><Link href="/shop?category=women&sub=accessories" className="block px-4 py-2 hover:bg-gray-100">Accessories</Link></li>
              </ul>
            </li>

            {/* ACCESSORIES Dropdown */}
             <li className="relative group">
              <button className="flex items-center gap-1">
               ACCESSORIES <ChevronDown className="w-3.5 h-3.5" />
              </button>
             <ul className="absolute left-1/2 -translate-x-1/2 mt-3 hidden group-hover:block bg-white border shadow-md rounded-md py-2 w-56">
            <li><Link href="/shop?category=accessories&sub=eyeglass" className="block px-4 py-2 hover:bg-gray-100">Eyeglass</Link></li>
            <li><Link href="/shop?category=accessories&sub=cap" className="block px-4 py-2 hover:bg-gray-100">Cap</Link></li>
           <li><Link href="/shop?category=accessories&sub=watch" className="block px-4 py-2 hover:bg-gray-100">Watch</Link></li>
            <li><Link href="/shop?category=accessories&sub=necklace" className="block px-4 py-2 hover:bg-gray-100">Necklace</Link></li>
            <li><Link href="/shop?category=accessories&sub=bracelet" className="block px-4 py-2 hover:bg-gray-100">Bracelet</Link></li>
            <li><Link href="/shop?category=accessories&sub=earrings" className="block px-4 py-2 hover:bg-gray-100">Earrings</Link></li>
           </ul>
          </li>
            <li className="relative group">
             <button className="flex items-center gap-1">
               FOOTWEAR <ChevronDown className="w-3.5 h-3.5" />
             </button>
             <ul className="absolute left-1/2 -translate-x-1/2 mt-3 hidden group-hover:block bg-white border shadow-md rounded-md py-2 w-52">
             <li><Link href="/shop?category=footwear&sub=slipper" className="block px-4 py-2 hover:bg-gray-100">Slipper</Link></li>
             <li><Link href="/shop?category=footwear&sub=shoe" className="block px-4 py-2 hover:bg-gray-100">Shoe</Link></li>
            </ul>
           </li>
            <li><Link href="/contact">CONTACT US</Link></li>
            <li><Link href="/track-order">TRACK YOUR ORDER</Link></li>
          </ul>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute top-0 left-0 w-72 h-full bg-white shadow-lg p-6 flex flex-col gap-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="ml-auto mb-4"
              onClick={() => setMobileOpen(false)}
              aria-label="Close"
            >
              <X className="w-6 h-6 text-black" />
            </button>

            <ul className="flex flex-col gap-4 font-semibold tracking-wide text-black text-sm">
              <li><Link href="/" onClick={() => setMobileOpen(false)}>HOME</Link></li>

              <li>
                <button
                  className="flex justify-between w-full"
                  onClick={() => setOpenMenu(openMenu === "men" ? null : "men")}
                >
                  MEN <ChevronDown className="w-4 h-4" />
                </button>
                {openMenu === "men" && (
                  <ul className="mt-2 ml-4 flex flex-col gap-2 text-gray-600">
                    <li><Link href="/shop?category=men&sub=shirt" onClick={() => setMobileOpen(false)}>Shirt</Link></li>
                    <li><Link href="/shop?category=men&sub=senator" onClick={() => setMobileOpen(false)}>Senator</Link></li>
                    <li><Link href="/shop?category=men&sub=trouser" onClick={() => setMobileOpen(false)}>Trouser</Link></li>
                    <li><Link href="/shop?category=men&sub=suit" onClick={() => setMobileOpen(false)}>Suit</Link></li>
                    <li><Link href="/shop?category=men&sub=agbada" onClick={() => setMobileOpen(false)}>Agbada Kwanu</Link></li>
                    <li><Link href="/shop?category=men&sub=ankara" onClick={() => setMobileOpen(false)}>Ankare</Link></li>
                  
                  </ul>
                )}
              </li>

              <li>
                <button
                  className="flex justify-between w-full"
                  onClick={() => setOpenMenu(openMenu === "women" ? null : "women")}
                >
                  WOMEN <ChevronDown className="w-4 h-4" />
                </button>
                {openMenu === "women" && (
                  <ul className="mt-2 ml-4 flex flex-col gap-2 text-gray-600">
                    <li><Link href="/shop?category=women&sub=gown" onClick={() => setMobileOpen(false)}>Gown</Link></li>
                    <li><Link href="/shop?category=women&sub=blouse" onClick={() => setMobileOpen(false)}>Blouse</Link></li>
                    <li><Link href="/shop?category=women&sub=skirt" onClick={() => setMobileOpen(false)}>Skirt & Wrapper</Link></li>
                    <li><Link href="/shop?category=women&sub=ankara" onClick={() => setMobileOpen(false)}>Ankara Dress</Link></li>
                    <li><Link href="/shop?category=women&sub=native-top" onClick={() => setMobileOpen(false)}>Native Top</Link></li>
                    <li><Link href="/shop?category=women&sub=accessories" onClick={() => setMobileOpen(false)}>Accessories</Link></li>
                  </ul>
                )}
              </li>
                            <li>
                <button
                  className="flex justify-between w-full"
                  onClick={() => setOpenMenu(openMenu === "accessories" ? null : "accessories")}
                >
                 ACCESSORIES <ChevronDown className="w-4 h-4" />
                </button>
                {openMenu === "accessories" && (
                  <ul className="mt-2 ml-4 flex flex-col gap-2 text-gray-600">
                     <li><Link href="/shop?category=accessories&sub=eyeglass" onClick={() => setMobileOpen(false)}>Eyeglass</Link></li>
                     <li><Link href="/shop?category=accessories&sub=cap" onClick={() => setMobileOpen(false)}>Cap</Link></li>
                     <li><Link href="/shop?category=accessories&sub=watch" onClick={() => setMobileOpen(false)}>Watch</Link></li>
                     <li><Link href="/shop?category=accessories&sub=necklace" onClick={() => setMobileOpen(false)}>Necklace</Link></li>
                     <li><Link href="/shop?category=accessories&sub=bracelet" onClick={() => setMobileOpen(false)}>Bracelet</Link></li>
                     <li><Link href="/shop?category=accessories&sub=earrings" onClick={() => setMobileOpen(false)}>Earrings</Link></li>
                  </ul>
                )}
              </li>
                            <li>
                <button
                  className="flex justify-between w-full"
                  onClick={() => setOpenMenu(openMenu === "footwear" ? null : "footwear")}
                >
                    FOOTWEAR  <ChevronDown className="w-4 h-4" />
                </button>
                {openMenu === "footwear" && (
                  <ul className="mt-2 ml-4 flex flex-col gap-2 text-gray-600">
                         <li><Link href="/shop?category=footwear&sub=slipper" onClick={() => setMobileOpen(false)}>Slipper</Link></li>
                        <li><Link href="/shop?category=footwear&sub=shoe" onClick={() => setMobileOpen(false)}>Shoe</Link></li>

                  </ul>
                )}
              </li>
              
              
              <li><Link href="/contact" onClick={() => setMobileOpen(false)}>CONTACT US</Link></li>
              <li><Link href="/track-order" onClick={() => setMobileOpen(false)}>TRACK YOUR ORDER</Link></li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
