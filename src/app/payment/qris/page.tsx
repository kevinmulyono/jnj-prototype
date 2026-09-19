"use client";

import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function QrisPage() {
  const router = useRouter();
  const { items, customer, getTotalPrice, clearCart } = useCartStore();
  const total = getTotalPrice();
  const [confirmed, setConfirmed] = useState(false);

  const handleDone = () => {
    setConfirmed(true);
    setTimeout(() => {
      clearCart();
      router.push("/confirmation");
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4" style={{ background: "var(--green-50)" }}>
      <div className="container-main max-w-md text-center">
        <Link href="/payment" id="qris-back-btn"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--green-700)] hover:underline mb-6">
          <ArrowLeft size={16} /> Kembali
        </Link>

        <span className="section-tag">📱 Pembayaran QRIS</span>
        <h1 className="text-3xl font-extrabold mb-2" style={{ color: "var(--green-900)" }}>
          Scan QR Code
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Gunakan aplikasi dompet digital atau mobile banking kamu untuk scan QR di bawah ini
        </p>

        {/* QR Card */}
        <div className="card p-8 mb-6 mx-auto max-w-sm">
          {/* QRIS branding */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-xs font-bold tracking-widest px-3 py-1 rounded"
              style={{ background: "var(--green-700)", color: "white" }}>
              QRIS
            </div>
            <span className="text-xs text-gray-500">JnJ Garden Resto & Cafe</span>
          </div>

          {/* QR Image */}
          <div className="relative w-56 h-56 mx-auto mb-4 rounded-2xl overflow-hidden border-4 border-[var(--green-200)] shadow-lg">
            <Image
              src="/images/qris.jpg"
              alt="QR Code Pembayaran JnJ Garden"
              fill
              className="object-contain p-2"
            />
          </div>

          <p className="font-bold text-lg mb-1" style={{ color: "var(--green-900)" }}>
            Total: Rp {(total * 1000).toLocaleString("id-ID")}
          </p>
          <p className="text-xs text-gray-500">
            Atas nama: <strong>{customer.name}</strong> · Meja: {customer.tableNumber}
          </p>
        </div>

        {/* Accepted wallets */}
        <div className="card p-4 mb-6">
          <p className="text-xs text-gray-500 mb-3 font-medium">Diterima oleh semua aplikasi:</p>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            {["GoPay", "OVO", "DANA", "ShopeePay", "LinkAja", "BCA Mobile", "BRI", "Mandiri"].map(w => (
              <span key={w} className="px-2.5 py-1 rounded-full font-medium"
                style={{ background: "var(--green-100)", color: "var(--green-800)" }}>
                {w}
              </span>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="text-left mb-8 space-y-3">
          {[
            { n: 1, text: "Buka aplikasi dompet digital atau mobile banking kamu" },
            { n: 2, text: "Pilih menu 'Scan QR' atau 'Bayar'" },
            { n: 3, text: "Scan QR Code di atas" },
            { n: 4, text: "Pastikan nominal benar, lalu konfirmasi pembayaran" },
            { n: 5, text: "Tekan tombol 'Konfirmasi Pembayaran' di bawah" },
          ].map(s => (
            <div key={s.n} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0"
                style={{ background: "var(--green-600)" }}>
                {s.n}
              </span>
              <p className="text-sm text-gray-600">{s.text}</p>
            </div>
          ))}
        </div>

        <button
          id="qris-confirm-btn"
          onClick={handleDone}
          disabled={confirmed}
          className={`w-full btn-primary justify-center py-4 text-base ${confirmed ? "bg-green-400" : ""}`}
        >
          {confirmed ? (
            <><CheckCircle2 size={20} /> Memproses...</>
          ) : (
            "✅ Konfirmasi Pembayaran Selesai"
          )}
        </button>
        <p className="text-xs text-gray-400 mt-3">
          Tekan tombol di atas setelah pembayaran berhasil dilakukan
        </p>
      </div>
    </div>
  );
}
