This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



# 🛍️ Priyon Store – Fashion & Lifestyle E‑Commerce

Priyon is a modern e‑commerce platform for **fashion and lifestyle products**, combining **native clothing** with **shoes, slippers, watches, caps, and accessories**. The goal is to create a premium yet approachable shopping experience that blends cultural elegance with modern design.

---

## 📂 Categories

* **Clothing**

  * Men’s Wear
  * Women’s Wear
  * Unisex
* **Footwear**

  * Shoes
  * Slippers / Sandals
* **Accessories**

  * Caps / Headwear
  * Wristwatches
  * Jewelry
  * Bags

---

## 🌐 Website Features

1. **Homepage**

   * Hero banner with sliding images.
   * "Shop by Category" section (Clothes, Shoes, Slippers, Watches, Caps).
   * Featured / Trending products carousel.
   * Promotional highlights (e.g. *“Priyon Premium Collection 2025”*).

2. **Catalog/Shop Page**

   * Filters: Category, Size, Color, Price.
   * Sorting: Newest, Price Low → High, Best Sellers.
   * Product cards with quick “Add to Cart”.

3. **Product Page**

   * High‑quality images with zoom.
   * Variants (size, color, material).
   * Price with discount option.
   * Add to cart + wishlist.

4. **Cart & Checkout**

   * Side drawer cart with live subtotal.
   * Checkout with **Paystack** integration.
   * Discount code entry.
   * Shipping & delivery options.

5. **Customer Account**

   * Order tracking (Track Order page).
   * Order history.
   * Wishlist / Saved items.

---

## 🎨 Branding & Design

* **Colors**: Deep Indigo, Gold, Burgundy, Off‑white, Neutral Gray.
* **Typography**: Serif (headings), Sans‑serif (body text).
* **Style**: Premium, elegant, grid‑based layouts.
* **Logo/Wordmark**: Bold modern typography with cultural motif.

---

## ⚙️ Tech Stack

* **Frontend**: Next.js 14 + Tailwind CSS + Zustand (cart state).
* **Backend**: Express.js + Node.js + Prisma/Mongo for DB.
* **Payments**: Paystack.
* **Deployment**: Vercel (frontend) + Render/Heroku/Railway (backend).
* **Admin/CMS**: Basic product management (CRUD) for clothes, shoes, caps, watches.

---

## 🚀 Roadmap

* [ ] Homepage design with category highlights.
* [ ] Catalog page with filters.
* [ ] Product details page with variants.
* [ ] Cart and Paystack checkout integration.
* [ ] Webhooks for order confirmation.
* [ ] Admin dashboard for product uploads.

---

✨ Priyon will be positioned as a **modern lifestyle fashion store**, merging **heritage + style** in one platform.



frontend/
 ├─ src/
 │   ├─ app/                     # App Router pages
 │   │   ├─ layout.tsx           # Main layout (Navbar, Footer, etc.)
 │   │   ├─ page.tsx             # Homepage (Hero, Categories, etc.)
 │   │   ├─ shop/
 │   │   │   └─ page.tsx         # Shop page (grid + filters)
 │   │   ├─ product/
 │   │   │   └─ [id]/page.tsx    # Dynamic Product Detail page
 │   │   ├─ cart/
 │   │   │   └─ page.tsx         # Cart page
 │   │   ├─ checkout/
 │   │   │   └─ page.tsx         # Checkout page
 │   │   ├─ about/
 │   │   │   └─ page.tsx         # About page
 │   │   ├─ contact/
 │   │   │   └─ page.tsx         # Contact page
 │   │   └─ globals.css          # Your global styles + Tailwind
 │   │
 │   ├─ components/              # Reusable UI components
 │   │   ├─ Navbar.tsx
 │   │   ├─ HeroSlider.tsx
 │   │   ├─ CategoryGrid.tsx
 │   │   ├─ ProductCard.tsx
 │   │   ├─ ProductGallery.tsx
 │   │   ├─ CartDrawer.tsx
 │   │   └─ Footer.tsx
 │   │
 │   ├─ store/                   # Zustand state stores
 │   │   └─ cart.ts              # Cart store
 │   │
 │   └─ lib/                     # Utilities, API helpers
 │       └─ api.ts               # Fetch wrapper for backend API

