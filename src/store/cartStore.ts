// ============================================================
// Cart Store — Zustand global state for order management
// ============================================================
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MenuItem } from "@/lib/menuData";

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface CustomerInfo {
  name: string;
  tableNumber: string;
}

interface CartStore {
  items: CartItem[];
  customer: CustomerInfo;
  paymentMethod: "qris" | "transfer" | "tunai" | null;

  // Actions
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  setCustomer: (info: CustomerInfo) => void;
  setPaymentMethod: (method: "qris" | "transfer" | "tunai") => void;

  // Computed helpers (not stored, just derived)
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      customer: { name: "", tableNumber: "" },
      paymentMethod: null,

      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return { items: [...state.items, { ...item, quantity: 1 }] };
        }),

      removeItem: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),

      updateQuantity: (id, qty) =>
        set((state) => {
          if (qty <= 0) {
            return { items: state.items.filter((i) => i.id !== id) };
          }
          return {
            items: state.items.map((i) =>
              i.id === id ? { ...i, quantity: qty } : i
            ),
          };
        }),

      clearCart: () =>
        set({ items: [], customer: { name: "", tableNumber: "" }, paymentMethod: null }),

      setCustomer: (info) => set({ customer: info }),

      setPaymentMethod: (method) => set({ paymentMethod: method }),

      getTotalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

      getTotalPrice: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }),
    {
      name: "jnj-cart-storage", // localStorage key
    }
  )
);
