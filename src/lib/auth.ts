export function isLoggedIn(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie.includes("token=");
}
