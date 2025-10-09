
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { toast } from "sonner";
import { useCart } from "@/store/cart";
import Breadcrumbs from "@/components/Breadcrumbs";
import SkeletonProduct from "@/components/SkeletonProduct";

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

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`)
      .then((r) => r.json())
      .then((data: Product) => {
        setProduct(data);
        setSelectedImage(data.images?.[0] || "");
        fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products?category=${data.category}&limit=6`
        )
          .then((r) => r.json())
          .then((rel: { products: Product[] }) =>
            setRelated(rel.products || [])
          );
      })
      .catch(console.error);
  }, [id]);

  if (!product) return <SkeletonProduct />;

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
