// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section
//       className="relative flex flex-col items-center justify-center text-center py-24 px-6"
//       style={{ backgroundColor: "var(--color-indigo)", color: "var(--color-gold)" }}
//     >
//       <h1
//         className="text-4xl md:text-6xl font-bold mb-4"
//         style={{ fontFamily: "var(--font-heading)" }}
//       >
//         Celebrating Tradition with Modern Elegance
//       </h1>
//       <p className="max-w-xl text-lg md:text-xl mb-8" style={{ fontFamily: "var(--font-body)" }}>
//         Shop clothing, shoes, slippers, caps, watches, and accessories all in one place.
//       </p>
//       <Link
//         href="/shop"
//         className="bg-priyon-gold text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
//       >
//         Shop Collection
//       </Link>
//     </section>
//   );
// }
// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Link from "next/link";

// const slides = [
//   {
//     image: "/hero/hero-men.jpg",
//     title: "Men’s Premium Collection",
//     subtitle: "Classic native wear, tailored for elegance.",
//     link: "/shop/men",
//   },
//   {
//     image: "/hero/hero-weman.jpg",
//     title: "Women’s Luxury Styles",
//     subtitle: "Modern fits with timeless tradition.",
//     link: "/shop/women",
//   },
//   {
//     image: "/hero/hero-man.jpg",
//     title: "Accessories That Define You",
//     subtitle: "Shoes, slippers, caps, watches & more.",
//     link: "/shop/accessories",
//   },
// ];

// export default function HeroSlider() {
//   return (
//     <section className="relative w-full h-[90vh]">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 4000 }}
//         loop
//         className="h-full"
//       >
//         {slides.map((slide, idx) => (
//           <SwiperSlide key={idx}>
//             <div className="relative w-full h-[90vh] flex items-center justify-center">
//               {/* Background Image */}
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="absolute inset-0 w-full h-full object-cover brightness-75"
//               />
              
//               {/* Overlay Content */}
//               <div className="relative z-10 text-center text-white px-6 max-w-3xl">
//                 <h1
//                   className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
//                   style={{ fontFamily: "var(--font-heading)" }}
//                 >
//                   {slide.title}
//                 </h1>
//                 <p
//                   className="text-lg md:text-xl mb-8 text-gray-200"
//                   style={{ fontFamily: "var(--font-body)" }}
//                 >
//                   {slide.subtitle}
//                 </p>
//                 <Link
//                   href={slide.link}
//                   className="bg-[var(--color-gold)] text-black px-8 py-4 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
//                 >
//                   Shop Now
//                 </Link>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

const slides = [
  {
    image: "/hero/hero-weman.jpg",
    tagline: "FIND A NEW YOU WITH",
    title: "NEW STYLES & DESIGNS REIMAGINED",
    subtitle: "Shop Women's",
    buttons: [
      { label: "APPAREL", link: "/shop/women/apparel" },
      { label: "FOOTWEAR", link: "/shop/women/footwear" },
    ],
  },
  {
    image: "/hero/hero-man.jpg",
    tagline: "DEFINE YOUR LOOK WITH",
    title: "TIMELESS MEN'S COLLECTION",
    subtitle: "Shop Men's",
    buttons: [
      { label: "OUTERWEAR", link: "/shop/men/outerwear" },
      { label: "FOOTWEAR", link: "/shop/men/footwear" },
    ],
  },
];

export default function HeroSlider() {
  return (
    <section className="relative w-full h-[90vh]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[90vh]">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover brightness-90"
              />

              {/* Overlay text bottom-left */}
              <div className="absolute bottom-16 left-12 max-w-xl text-white z-10">
                <p
                  className="uppercase tracking-widest text-sm mb-3"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {slide.tagline}
                </p>
                <h1
                  className="text-4xl md:text-6xl font-bold leading-tight mb-4"
                  style={{ fontFamily: "var(--font-handwriting)" }}
                >
                  {slide.title}
                </h1>
                <p className="text-lg mb-6">{slide.subtitle}</p>

                <div className="flex gap-4">
                  {slide.buttons.map((btn, i) => (
                    <Link
                      key={i}
                      href={btn.link}
                      className="bg-black text-white px-6 py-3 text-sm font-semibold tracking-widest hover:bg-white hover:text-black border border-white transition"
                    >
                      {btn.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
