"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Trash2, Plus, Minus, ShoppingCart, ChevronRight, ArrowLeft } from "lucide-react";

export default function CartPage() {
  const router = useRouter();
  const { items, customer, removeItem, updateQuantity, setCustomer, getTotalPrice } = useCartStore();
  const [errors, setErrors] = useState<{ name?: string; table?: string }>({});

  const total = getTotalPrice();

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!customer.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!customer.tableNumber.trim()) newErrors.table = "Nomor meja wajib diisi";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = () => {
    if (!validate()) return;
    router.push("/payment");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-24" style={{ background: "var(--green-50)" }}>
        <div className="text-center max-w-sm">
          <div className="text-8xl mb-6 animate-float">🛒</div>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--green-900)" }}>Keranjang Kosong</h2>
          <p className="text-gray-500 mb-8">Yuk, pilih menu favoritmu dulu!</p>
          <Link href="/menu" id="cart-empty-browse-btn" className="btn-primary">
            🍽️ Lihat Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4" style={{ background: "var(--green-50)" }}>
      <div className="container-main max-w-2xl">
        {/* Header */}
        <div className="mb-6">
          <Link href="/menu" id="cart-back-btn"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--green-700)] hover:underline mb-4">
            <ArrowLeft size={16} /> Kembali ke Menu
          </Link>
          <div className="flex items-center gap-3">
            <ShoppingCart size={28} style={{ color: "var(--green-700)" }} />
            <h1 className="text-3xl font-extrabold" style={{ color: "var(--green-900)" }}>Keranjang Pesanan</h1>
          </div>
        </div>

        {/* Order Items */}
        <div className="card p-6 mb-6">
          <h2 className="font-bold text-base mb-4" style={{ color: "var(--green-800)" }}>
            🍽️ Item Pesanan ({items.length} menu)
          </h2>
          <div className="divide-y divide-gray-100">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 py-4">
                {/* Emoji */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                  style={{ background: "var(--green-100)" }}>
                  {item.emoji}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate" style={{ color: "var(--green-900)" }}>{item.name}</p>
                  <p className="text-xs text-gray-500">{item.price}K / item</p>
                  <p className="font-bold text-sm mt-0.5" style={{ color: "var(--green-600)" }}>
                    Total: {item.price * item.quantity}K
                  </p>
                </div>

                {/* Qty Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    id={`cart-decrease-${item.id}`}
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    aria-label="Kurangi"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                  <button
                    id={`cart-increase-${item.id}`}
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label="Tambah"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                {/* Delete */}
                <button
                  id={`cart-remove-${item.id}`}
                  onClick={() => removeItem(item.id)}
                  className="p-2 rounded-xl text-red-400 hover:bg-red-50 hover:text-red-600 transition-colors shrink-0"
                  aria-label="Hapus item"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-4 pt-4 border-t-2 border-dashed border-[var(--green-200)]">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">Subtotal</span>
              <span className="font-bold text-xl" style={{ color: "var(--green-700)" }}>
                Rp {(total * 1000).toLocaleString("id-ID")}
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1 text-right">*belum termasuk pajak</p>
          </div>
        </div>

        {/* Customer Info Form */}
        <div className="card p-6 mb-6">
          <h2 className="font-bold text-base mb-5" style={{ color: "var(--green-800)" }}>
            👤 Informasi Pemesan
          </h2>

          <div className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="cart-customer-name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                Nama Kamu <span className="text-red-500">*</span>
              </label>
              <input
                id="cart-customer-name"
                type="text"
                placeholder="Contoh: Budi Santoso"
                value={customer.name}
                onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                className="form-input"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Table number */}
            <div>
              <label htmlFor="cart-table-number" className="block text-sm font-semibold text-gray-700 mb-1.5">
                Nomor Meja <span className="text-red-500">*</span>
              </label>
              <input
                id="cart-table-number"
                type="text"
                placeholder="Contoh: Meja 5 / Area Garden"
                value={customer.tableNumber}
                onChange={(e) => setCustomer({ ...customer, tableNumber: e.target.value })}
                className="form-input"
              />
              {errors.table && <p className="text-red-500 text-xs mt-1">{errors.table}</p>}
              <p className="text-xs text-gray-400 mt-1">Lihat nomor/nama pada meja Anda</p>
            </div>
          </div>
        </div>

        {/* Order Summary (mini) */}
        <div className="rounded-2xl p-5 mb-6"
          style={{ background: "linear-gradient(135deg, var(--green-700), var(--green-900))", color: "white" }}>
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold opacity-80">Total Pembayaran</span>
            <span className="font-extrabold text-2xl">Rp {(total * 1000).toLocaleString("id-ID")}</span>
          </div>
          <div className="text-sm opacity-70">
            {items.length} menu &bull; {items.reduce((s, i) => s + i.quantity, 0)} item
          </div>
        </div>

        {/* CTA */}
        <button
          id="cart-checkout-btn"
          onClick={handleCheckout}
          className="btn-primary w-full justify-center text-base py-4"
        >
          Lanjut ke Pembayaran
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
