// export async function apiRequest(
//   endpoint: string,
//   method = "GET",
//   data?: any
// ) {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
//     method,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include", // allows cookies for JWT session
//     body: data ? JSON.stringify(data) : undefined,
//   });

//   const result = await res.json();
//   if (!res.ok) throw new Error(result.message || "Request failed");
//   return result;
// }
// export async function apiRequest<T = unknown>(
//   endpoint: string,
//   method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
//   data?: Record<string, unknown>
// ): Promise<T> {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
//     method,
//     headers: { "Content-Type": "application/json" },
//     credentials: "include", // important for JWT cookies
//     body: data ? JSON.stringify(data) : undefined,
//   });

//   if (!res.ok) {
//     const errorData = await res.json().catch(() => ({}));
//     throw new Error(
//       (errorData && (errorData.message as string)) || "Request failed"
//     );
//   }

//   return (await res.json()) as T;
// }
export async function apiRequest<T = unknown>(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  data?: Record<string, unknown>
): Promise<T> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    method,
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    console.error(`❌ API Error: [${res.status}]`, errorData);
    throw new Error(errorData.error || "Request failed");
  }

  return (await res.json()) as T;
}
