// "use client";
// import { create } from "zustand";

// type CartItem = {
//   id: string;
//   name: string;
//   price: number;
//   currency: string;
//   qty: number;
//   image?: string;
//   size?: string;
//   color?: string;
// };

// type CartState = {
//   items: CartItem[];
//   add: (item: CartItem) => void;
//   remove: (id: string) => void;
//   clear: () => void;
//   total: () => { amount: number; currency: string };
// };

// export const useCart = create<CartState>((set, get) => ({
//   items: [],
//   add: (item) =>
//     set((state) => ({
//       items: [...state.items, item],
//     })),
//   remove: (id) =>
//     set((state) => ({
//       items: state.items.filter((i) => i.id !== id),
//     })),
//   clear: () => set({ items: [] }),
//   total: () => ({
//     amount: get().items.reduce((sum, i) => sum + i.price * i.qty, 0),
//     currency: get().items[0]?.currency || "NGN",
//   }),
// }));
// import { create } from "zustand";

// type CartItem = {
//   _id: string;
//   name: string;
//   price: number;
//   qty: number;
//   color?: string;
//   image: string;
// };

// interface CartState {
//   items: CartItem[];
//   drawerProduct: CartItem | null;
//   isDrawerOpen: boolean;
//   addItem: (item: CartItem) => void;
//   updateQty: (id: string, qty: number) => void;
//   removeItem: (id: string) => void;
//   clearCart: () => void;
//   openDrawer: (product: CartItem) => void;
//   closeDrawer: () => void;
// }

// export const useCart = create<CartState>((set) => ({
//   items: [],
//   drawerProduct: null,
//   isDrawerOpen: false,

//   addItem: (item) =>
//     set((state) => {
//       const existing = state.items.find(
//         (i) => i._id === item._id && i.color === item.color
//       );
//       if (existing) {
//         return {
//           items: state.items.map((i) =>
//             i._id === item._id && i.color === item.color
//               ? { ...i, qty: i.qty + item.qty }
//               : i
//           ),
//         };
//       }
//       return { items: [...state.items, item] };
//     }),

//   updateQty: (id, qty) =>
//     set((state) => ({
//       items: state.items.map((i) =>
//         i._id === id ? { ...i, qty: Math.max(1, qty) } : i
//       ),
//     })),

//   removeItem: (id) =>
//     set((state) => ({
//       items: state.items.filter((i) => i._id !== id),
//     })),

//   clearCart: () => set({ items: [] }),

//   openDrawer: (product) => set({ drawerProduct: product, isDrawerOpen: true }),
//   closeDrawer: () => set({ drawerProduct: null, isDrawerOpen: false }),
// }));
// "use client";
// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// interface CartItem {
//   _id: string;
//   name: string;
//   price: number;
//   image: string;
//   qty: number;
//   color?: string;
// }

// interface CartState {
//   items: CartItem[];
//   drawerProduct: any | null;
//   isDrawerOpen: boolean;

//   addItem: (item: CartItem) => void;
//   removeItem: (id: string) => void;
//   updateQty: (id: string, qty: number) => void;
//   clearCart: () => void;

//   openDrawer: (product: any) => void;
//   closeDrawer: () => void;
// }

// export const useCart = create<CartState>()(
//   persist(
//     (set, get) => ({
//       items: [],
//       drawerProduct: null,
//       isDrawerOpen: false,

//       addItem: (item) => {
//         const items = get().items;
//         const existing = items.find((i) => i._id === item._id && i.color === item.color);

//         let updated;
//         if (existing) {
//           updated = items.map((i) =>
//             i._id === item._id && i.color === item.color
//               ? { ...i, qty: i.qty + item.qty }
//               : i
//           );
//         } else {
//           updated = [...items, item];
//         }

//         set({ items: updated });
//       },

//       removeItem: (id) =>
//         set({
//           items: get().items.filter((i) => i._id !== id),
//         }),

//       updateQty: (id, qty) =>
//         set({
//           items: get().items.map((i) =>
//             i._id === id ? { ...i, qty: Math.max(1, qty) } : i
//           ),
//         }),

//       clearCart: () => set({ items: [] }),

//       openDrawer: (product) => set({ drawerProduct: product, isDrawerOpen: true }),
//       closeDrawer: () => set({ isDrawerOpen: false }),
//     }),
//     {
//       name: "priyon-cart", // localStorage key
//       partialize: (state) => ({ items: state.items }), // only persist cart items
//     }
//   )
// );
"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  _id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
  color?: string;
  colors?: string[];
  size?: string;
   sizes?: string[];
  currency?: string;
}

interface CartState {
  items: CartItem[];
  drawerProduct: CartItem | null;
  isDrawerOpen: boolean;

  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;

  openDrawer: (product: CartItem) => void;
  closeDrawer: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      drawerProduct: null,
      isDrawerOpen: false,

      addItem: (item) => {
        const items = get().items;
        const existing = items.find(
          (i) => i._id === item._id && i.color === item.color && i.size === item.size
        );

        let updated;
        if (existing) {
          updated = items.map((i) =>
            i._id === item._id && i.color === item.color && i.size === item.size
              ? { ...i, qty: i.qty + item.qty }
              : i
          );
        } else {
          updated = [...items, item];
        }

        set({ items: updated });
      },

      removeItem: (id) =>
        set({
          items: get().items.filter((i) => i._id !== id),
        }),

      updateQty: (id, qty) =>
        set({
          items: get().items.map((i) =>
            i._id === id ? { ...i, qty: Math.max(1, qty) } : i
          ),
        }),

      clearCart: () => set({ items: [] }),

      openDrawer: (product) => set({ drawerProduct: product, isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),
    }),
    {
      name: "priyon-cart", // localStorage key
      partialize: (state) => ({ items: state.items }), // only persist cart items
    }
  )
);
