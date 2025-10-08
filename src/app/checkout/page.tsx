"use client";

import { useCart } from "@/store/cart";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { apiRequest } from "@/lib/api";
import Image from "next/image";

interface ShippingAddress {
  fullName: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  phone: string;
  phone2?: string;
}

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [shipping, setShipping] = useState<ShippingAddress>({
    fullName: "",
    address: "",
    city: "",
    state: "",
    country: "Nigeria",
    postalCode: "",
    phone: "",
    phone2: "",
  });

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (items.length === 0) return alert("Your cart is empty");

    try {
      setLoading(true);
      const orderData = {
        items: items.map((i) => ({
          productId: i._id,
          name: i.name,
          images: [i.image],
          price: i.price,
          quantity: i.qty,
          colors: i.color ? [i.color] : [],
          sizes: i.size ? [i.size] : [],
        })),
        totalAmount: subtotal,
        shippingAddress: shipping,
      };

      const res = await apiRequest<{ orderId: string }>("/api/orders", "POST", orderData);

      clearCart();
      router.push(`/order-success?orderId=${res.orderId}`);
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty 🛍️</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
      {/* LEFT — SHIPPING DETAILS */}
      <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
        <h1 className="text-2xl font-semibold mb-4 tracking-wide" style={{ fontFamily: "var(--font-handwriting)" }}>
          Shipping Information
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(shipping).map(([key, value]) => (
            <input
              key={key}
              type="text"
              placeholder={key.replace("phone2", "Alternative Phone").replace("postalCode", "Postal Code")}
              value={value}
              onChange={(e) => setShipping({ ...shipping, [key]: e.target.value })}
              required={key !== "phone2"}
              className="border p-3 rounded-md w-full"
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full bg-[var(--color-burgundy)] hover:bg-[var(--color-indigo)] text-white font-semibold py-3 rounded-lg transition"
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </form>

      {/* RIGHT — ORDER SUMMARY */}
      <div className="border rounded-lg p-6 bg-white shadow-sm h-fit">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

        {/* {items.map((item) => (
          <div key={item._id} className="flex items-center gap-4 border-b pb-4 mb-4"> */}

          {items.map((item, index) => (
  <div key={`${item._id}-${item.color || ""}-${item.size || ""}-${index}`} className="flex items-center gap-4 border-b pb-4 mb-4">
            <div className="relative w-16 h-16">
              <Image
                src={item.image || "/placeholder.jpg"}
                alt={item.name}
                fill
                className="object-cover rounded-md border"
                sizes="64px"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{item.name}</p>
              {item.color && <p className="text-xs text-gray-500">Color: {item.color}</p>}
              {item.size && <p className="text-xs text-gray-500">Size: {item.size}</p>}
              <p className="text-sm font-semibold text-[var(--color-burgundy)]">
                ₦{(item.price * item.qty).toLocaleString()}
              </p>
            </div>
          </div>
        ))}

        <div className="flex justify-between mt-4 text-sm text-gray-700">
          <span>Subtotal</span>
          <span>₦{subtotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between text-sm text-gray-700">
          <span>Shipping</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>

        <div className="border-t my-4"></div>

        <div className="flex justify-between font-semibold text-gray-900">
          <span>Total</span>
          <span>₦{subtotal.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
