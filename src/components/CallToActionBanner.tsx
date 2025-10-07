"use client";
import Link from "next/link";
import Image from "next/image";

export default function CallToActionBanner() {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Background Image / Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero/hero-men.jpg" // put a soft fashion-related image in /public/images/
          alt="Luxury Fashion Background"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center text-white z-10">
        <h2
          className="text-3xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-gold)" }}
        >
          Elevate Your Native Fashion Style
        </h2>

        <p
          className="max-w-2xl mx-auto text-base md:text-lg mb-8 text-[var(--color-neutral)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Discover timeless elegance with our premium men and women collections.
          Designed with passion, tailored for perfection.
        </p>

        <Link
          href="/shop"
          className="inline-block bg-[var(--color-gold)] text-black font-semibold px-8 py-3 rounded-md hover:bg-[var(--color-indigo)] hover:text-white transition-all duration-300 tracking-wider uppercase"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
