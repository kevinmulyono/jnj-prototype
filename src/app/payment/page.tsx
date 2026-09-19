"use client";

import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CreditCard, Banknote, QrCode, ChevronRight } from "lucide-react";
import { useState } from "react";

const PAYMENT_OPTIONS = [
  {
    id: "qris" as const,
    icon: QrCode,
    label: "QRIS",
    subtitle: "Scan QR, bayar dari dompet digital mana saja",
    description: "GoPay, OVO, DANA, ShopeePay, BRI, BCA, dll",
    color: "var(--green-600)",
    bgColor: "var(--green-50)",
    emoji: "📱",
  },
  {
    id: "transfer" as const,
    icon: CreditCard,
    label: "Transfer Bank",
    subtitle: "Transfer ke rekening JnJ Garden",
    description: "BCA, BRI, Mandiri — konfirmasi via WhatsApp",
    color: "#1a5eb8",
    bgColor: "#eff6ff",
    emoji: "🏦",
  },
  {
    id: "tunai" as const,
    icon: Banknote,
    label: "Tunai / Cash",
    subtitle: "Bayar langsung ke kasir",
    description: "Tunjukkan ringkasan pesanan ke kasir",
    color: "#a16207",
    bgColor: "#fffbeb",
    emoji: "💵",
  },
];

export default function PaymentPage() {
  const router = useRouter();
  const { items, customer, getTotalPrice, setPaymentMethod } = useCartStore();
  const [selected, setSelected] = useState<"qris" | "transfer" | "tunai" | null>(null);
  const total = getTotalPrice();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-24">
        <div className="text-center">
          <p className="text-6xl mb-4">🛒</p>
          <p className="font-bold text-xl mb-2" style={{ color: "var(--green-900)" }}>Keranjang kosong</p>
          <Link href="/menu" className="btn-primary mt-4">Ke Menu</Link>
        </div>
      </div>
    );
  }

  const handleProceed = () => {
    if (!selected) return;
    setPaymentMethod(selected);
    router.push(`/payment/${selected}`);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4" style={{ background: "var(--green-50)" }}>
      <div className="container-main max-w-xl">
        {/* Header */}
        <div className="mb-6">
          <Link href="/cart" id="payment-back-btn"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--green-700)] hover:underline mb-4">
            <ArrowLeft size={16} /> Kembali ke Keranjang
          </Link>
          <h1 className="text-3xl font-extrabold" style={{ color: "var(--green-900)" }}>
            💳 Pilih Pembayaran
          </h1>
          <p className="text-gray-500 mt-1 text-sm">Pilih metode pembayaran yang kamu inginkan</p>
        </div>

        {/* Mini Order Summary */}
        <div className="card p-4 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500">Pesanan atas nama</p>
              <p className="font-bold" style={{ color: "var(--green-900)" }}>{customer.name}</p>
              <p className="text-sm text-gray-500">Meja: {customer.tableNumber}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Total</p>
              <p className="font-extrabold text-xl" style={{ color: "var(--green-700)" }}>
                Rp {(total * 1000).toLocaleString("id-ID")}
              </p>
              <p className="text-xs text-gray-400">{items.reduce((s, i) => s + i.quantity, 0)} item</p>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="space-y-4 mb-8">
          {PAYMENT_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              id={`payment-option-${opt.id}`}
              onClick={() => setSelected(opt.id)}
              className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                selected === opt.id
                  ? "border-[var(--green-500)] shadow-md"
                  : "border-[var(--gray-200)] bg-white hover:border-[var(--green-300)]"
              }`}
              style={selected === opt.id ? { background: opt.bgColor } : {}}
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                  style={{ background: selected === opt.id ? opt.color + "20" : "var(--gray-100)" }}>
                  {opt.emoji}
                </div>

                {/* Text */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-bold text-base" style={{ color: "var(--green-900)" }}>{opt.label}</p>
                    {selected === opt.id && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                        style={{ background: opt.color }}>
                        Dipilih ✓
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-gray-700">{opt.subtitle}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{opt.description}</p>
                </div>

                {/* Radio indicator */}
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  selected === opt.id ? "border-[var(--green-500)]" : "border-gray-300"
                }`}>
                  {selected === opt.id && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--green-500)]" />
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Proceed Button */}
        <button
          id="payment-proceed-btn"
          onClick={handleProceed}
          disabled={!selected}
          className={`w-full btn-primary justify-center py-4 text-base transition-all ${
            !selected ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Lanjutkan Pembayaran
          <ChevronRight size={20} />
        </button>

        {!selected && (
          <p className="text-center text-xs text-gray-400 mt-3">Pilih metode pembayaran terlebih dahulu</p>
        )}
      </div>
    </div>
  );
}
