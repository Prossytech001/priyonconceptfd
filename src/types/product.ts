// /src/types/product.ts

export interface Product {
  _id: string;
  name: string;
  slug: string;
  sku: string;

  category: "men" | "women" | "footwear" | "accessories" | "jewelry";
  subCategory?:
    | "shirt"
    | "senator"
    | "trouser"
    | "suit"
    | "agbada"
    | "ankara"
    | "gown"
    | "blouse"
    | "skirt"
    | "native-top"
    | "accessories"
    | "eyeglass"
    | "cap"
    | "watch"
    | "necklace"
    | "bracelet"
    | "earrings"
    | "slipper"
    | "shoe";

  description?: string;
  price: number;
  currency: string; // e.g., "NGN" or "₦"

  sizes?: string[];
  colors?: string[];

  isBestSeller?: boolean;
  quantity?: number;
  inStock: boolean;
  isNew?: boolean;

  images: string[];
}
