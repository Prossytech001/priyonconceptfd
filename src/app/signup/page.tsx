"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiRequest } from "@/lib/api";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      await apiRequest("/api/auth/signup", "POST", form);
      router.push("/checkout");
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-md">
      <h1 className="text-2xl font-bold text-center mb-6">
        Create an Account
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Have a better experience by creating an account with us
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {["username", "email", "password", "confirmPassword"].map((field) => (
          <input
            key={field}
            type={field.includes("password") ? "password" : field}
            placeholder={field
              .replace("confirmPassword", "Re-enter Password")
              .replace("username", "Username")
              .replace("email", "Email")}
            value={(form as Record<string, string>)[field]}
            onChange={(e) =>
              setForm({ ...form, [field]: e.target.value })
            }
            className="w-full border p-3 rounded-md"
            required
          />
        ))}

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[var(--color-burgundy)] hover:bg-[var(--color-indigo)] text-white py-3 rounded-md font-semibold transition"
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
