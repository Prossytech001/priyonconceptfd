// /src/types/filters.ts
export interface Filters {
  availability?: "in" | "out" | string | null | undefined;
  minPrice?: number | "" | undefined;
  maxPrice?: number | "" | undefined;
  category?: string | null;
  subCategory?: string | null;
  size?: string | null;
}
