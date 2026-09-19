"use client";

import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Copy, CheckCircle2, MessageCircle } from "lucide-react";
import { useState } from "react";

const BANK_ACCOUNTS = [
  { bank: "BCA", no: "1234567890", name: "JNJ GARDEN RESTO" },
  { bank: "BRI", no: "0987654321", name: "JNJ GARDEN RESTO" },
  { bank: "Mandiri", no: "1122334455", name: "JNJ GARDEN RESTO" },
];

export default function TransferPage() {
  const router = useRouter();
  const { items, customer, getTotalPrice, clearCart } = useCartStore();
  const total = getTotalPrice();
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 2000);
    });
  };

  const handleDone = () => {
    setConfirmed(true);
    const waMsg = encodeURIComponent(
      `Halo JnJ Garden! Saya sudah transfer untuk pesanan:\nNama: ${customer.name}\nMeja: ${customer.tableNumber}\nTotal: Rp ${(total * 1000).toLocaleString("id-ID")}\n\n[Mohon sertakan bukti transfer]`
    );
    window.open(`https://wa.me/6285188221799?text=${waMsg}`, "_blank");
    setTimeout(() => {
      clearCart();
      router.push("/confirmation");
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4" style={{ background: "var(--green-50)" }}>
      <div className="container-main max-w-md">
        <Link href="/payment" id="transfer-back-btn"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--green-700)] hover:underline mb-6">
          <ArrowLeft size={16} /> Kembali
        </Link>

        <span className="section-tag">🏦 Transfer Bank</span>
        <h1 className="text-3xl font-extrabold mb-2" style={{ color: "var(--green-900)" }}>Transfer ke Rekening</h1>
        <p className="text-gray-500 text-sm mb-6">Transfer tepat sesuai nominal yang tertera</p>

        {/* Total to transfer */}
        <div className="rounded-2xl p-5 mb-6 text-center"
          style={{ background: "linear-gradient(135deg, var(--green-700), var(--green-900))", color: "white" }}>
          <p className="text-sm opacity-80 mb-1">Jumlah yang harus ditransfer</p>
          <p className="text-4xl font-extrabold">Rp {(total * 1000).toLocaleString("id-ID")}</p>
          <p className="text-sm opacity-70 mt-1">{customer.name} · Meja {customer.tableNumber}</p>
        </div>

        {/* Bank accounts */}
        <div className="space-y-4 mb-6">
          {BANK_ACCOUNTS.map((acc, i) => (
            <div key={acc.bank} className="card p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="font-extrabold text-lg" style={{ color: "var(--green-700)" }}>
                  {acc.bank}
                </div>
                <span className="text-xs px-2 py-1 rounded-full font-medium"
                  style={{ background: "var(--green-100)", color: "var(--green-800)" }}>
                  Tersedia
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-1">Nomor Rekening</p>
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-xl tracking-wider text-gray-800">
                  {acc.no}
                </span>
                <button
                  id={`transfer-copy-${acc.bank.toLowerCase()}`}
                  onClick={() => handleCopy(acc.no, i)}
                  className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-semibold transition-all"
                  style={
                    copiedIdx === i
                      ? { background: "var(--green-600)", color: "white" }
                      : { background: "var(--green-100)", color: "var(--green-700)" }
                  }
                >
                  {copiedIdx === i ? <><CheckCircle2 size={13} /> Disalin!</> : <><Copy size={13} /> Salin</>}
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-1.5">a/n <strong>{acc.name}</strong></p>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="card p-5 mb-6">
          <p className="font-semibold text-sm mb-3" style={{ color: "var(--green-800)" }}>Langkah Transfer:</p>
          <div className="space-y-2.5">
            {[
              "Buka mobile banking atau ATM pilihan kamu",
              "Pilih Transfer Antar Bank atau sesama bank",
              "Masukkan nomor rekening di atas",
              `Masukkan nominal: Rp ${(total * 1000).toLocaleString("id-ID")}`,
              "Simpan bukti transfer",
              "Tekan tombol 'Sudah Transfer' di bawah & kirim bukti via WhatsApp",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "var(--green-500)" }}>
                  {i + 1}
                </span>
                <p className="text-sm text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          id="transfer-confirm-btn"
          onClick={handleDone}
          disabled={confirmed}
          className={`w-full btn-primary justify-center py-4 text-base gap-2 ${confirmed ? "opacity-75" : ""}`}
        >
          {confirmed ? (
            <><CheckCircle2 size={20} /> Mengarahkan ke WhatsApp...</>
          ) : (
            <><MessageCircle size={20} /> Sudah Transfer — Kirim Bukti</>
          )}
        </button>
        <p className="text-xs text-gray-400 mt-3 text-center">
          Kamu akan diarahkan ke WhatsApp untuk mengirim bukti transfer
        </p>
      </div>
    </div>
  );
}
