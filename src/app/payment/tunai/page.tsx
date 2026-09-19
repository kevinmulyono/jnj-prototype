"use client";

import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Printer, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function TunaiPage() {
  const router = useRouter();
  const { items, customer, getTotalPrice, clearCart } = useCartStore();
  const total = getTotalPrice();
  const [done, setDone] = useState(false);
  const now = new Date().toLocaleString("id-ID", {
    dateStyle: "long",
    timeStyle: "short",
  });
  const orderNumber = `JNJ-${Date.now().toString().slice(-6)}`;

  const handlePrint = () => window.print();

  const handleDone = () => {
    setDone(true);
    setTimeout(() => {
      clearCart();
      router.push("/confirmation");
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4" style={{ background: "var(--green-50)" }}>
      <div className="container-main max-w-md">
        {/* Back (no print) */}
        <div className="no-print mb-6">
          <Link href="/payment" id="tunai-back-btn"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--green-700)] hover:underline">
            <ArrowLeft size={16} /> Kembali
          </Link>
        </div>

        {/* Receipt Card */}
        <div className="card p-6 mb-6" id="cash-receipt">
          {/* Header */}
          <div className="text-center border-b-2 border-dashed border-[var(--green-200)] pb-5 mb-5">
            <div className="relative w-16 h-16 mx-auto mb-3">
              <Image src="/images/logo.png" alt="JnJ Garden Logo" fill className="object-contain" />
            </div>
            <h1 className="text-xl font-extrabold" style={{ color: "var(--green-900)" }}>JnJ Garden</h1>
            <p className="text-xs text-gray-500">Resto & Cafe</p>
            <p className="text-xs text-gray-400 mt-1">Babakan Dramaga, IPB, Bogor</p>
          </div>

          {/* Order Info */}
          <div className="text-sm space-y-1.5 mb-5">
            <div className="flex justify-between">
              <span className="text-gray-500">No. Pesanan</span>
              <span className="font-bold font-mono text-[var(--green-700)]">{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Waktu</span>
              <span className="font-medium">{now}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Nama</span>
              <span className="font-bold">{customer.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Nomor Meja</span>
              <span className="font-bold">{customer.tableNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Pembayaran</span>
              <span className="font-bold text-amber-600">💵 Tunai</span>
            </div>
          </div>

          {/* Items */}
          <div className="border-t border-b border-dashed border-[var(--green-200)] py-4 mb-4">
            <p className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-3">Detail Pesanan</p>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex items-start gap-2">
                  <span className="text-lg shrink-0">{item.emoji}</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800 leading-tight">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.quantity} × Rp {(item.price * 1000).toLocaleString("id-ID")}</p>
                  </div>
                  <p className="text-sm font-bold shrink-0 text-gray-800">
                    Rp {(item.price * item.quantity * 1000).toLocaleString("id-ID")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mb-1">
            <span className="font-bold text-base text-gray-700">TOTAL</span>
            <span className="font-extrabold text-2xl" style={{ color: "var(--green-700)" }}>
              Rp {(total * 1000).toLocaleString("id-ID")}
            </span>
          </div>
          <p className="text-xs text-gray-400 text-right">*belum termasuk pajak</p>

          {/* Instruction box */}
          <div className="mt-5 rounded-xl p-4 text-center"
            style={{ background: "var(--amber)", color: "white" }}>
            <p className="font-bold text-sm">⚠️ TUNJUKKAN HALAMAN INI</p>
            <p className="text-xs mt-1 opacity-90">
              Tunjukkan struk ini ke <strong>kasir</strong> untuk melakukan pembayaran tunai
            </p>
          </div>

          {/* Footer */}
          <div className="mt-5 text-center text-xs text-gray-400">
            <p>Terima kasih telah berkunjung ke JnJ Garden! 🌿</p>
            <p className="mt-0.5">@jnjgarden_restocafe</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 no-print">
          <button
            id="tunai-print-btn"
            onClick={handlePrint}
            className="w-full btn-outline justify-center py-3"
          >
            <Printer size={18} /> Cetak / Screenshot Struk
          </button>
          <button
            id="tunai-confirm-btn"
            onClick={handleDone}
            disabled={done}
            className={`w-full btn-primary justify-center py-4 text-base ${done ? "opacity-75" : ""}`}
          >
            {done ? (
              <><CheckCircle2 size={20} /> Selesai!</>
            ) : (
              "✅ Saya Sudah Bayar ke Kasir"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
