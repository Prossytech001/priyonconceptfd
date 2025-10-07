import Link from "next/link";
import Image from "next/image";

const categories = [
  { title: "MEN", img: "/hero/hero-man.jpg", link: "/shop?category=men" },
  { title: "WOMEN", img: "/hero/hero-man.jpg", link: "/shop?category=women" },
  { title: "FOOTWEAR", img: "/hero/hero-man.jpg", link: "/shop?category=footwear" },
  { title: "ACCESSORIES", img: "/hero/hero-man.jpg", link: "/shop?category=accessories" },
];

export default function CategoryHighlights() {
  return (
    <section className="py-16 px-0">
      <h2
        className="text-center text-2xl md:text-3xl font-semibold mb-10"
        style={{ fontFamily: "var(--font-handwriting)" }}
      >
        SHOP BY CATEGORY
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {categories.map((c) => (
          <Link
            href={c.link}
            key={c.title}
            className="relative group overflow-hidden "
          >
            <Image
              src={c.img}
              alt={c.title}
              width={500}
              height={600}
              className="object-cover w-full h-72 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white font-semibold tracking-widest text-lg"
             style={{ fontFamily: "var(--font-handwriting)" }}>
              {c.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
