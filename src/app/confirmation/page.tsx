"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, UtensilsCrossed } from "lucide-react";
import { useEffect, useState } from "react";

// Animated confetti particle
function Particle({ delay }: { delay: number }) {
  const colors = ["#4a9e4a", "#f5a623", "#6bbf6b", "#a8d5a2", "#2d6a2d"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const left = Math.random() * 100;
  const size = 6 + Math.random() * 8;
  return (
    <div
      className="absolute rounded-full"
      style={{
        left: `${left}%`,
        top: "-10px",
        width: size,
        height: size,
        background: color,
        animation: `fall ${2 + Math.random() * 2}s ease-in ${delay}ms forwards`,
      }}
    />
  );
}

export default function ConfirmationPage() {
  const [showParticles, setShowParticles] = useState(false);
  const estimatedTime = 15 + Math.floor(Math.random() * 10); // 15-25 mins
  const orderNumber = `JNJ-${Date.now().toString().slice(-6)}`;

  useEffect(() => {
    setShowParticles(true);
    const t = setTimeout(() => setShowParticles(false), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden relative"
      style={{ background: "linear-gradient(135deg, var(--green-50) 0%, var(--green-100) 50%, white 100%)" }}>

      {/* Confetti particles */}
      {showParticles && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
          <style>{`
            @keyframes fall {
              0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
              100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
            }
          `}</style>
          {Array.from({ length: 30 }).map((_, i) => (
            <Particle key={i} delay={i * 100} />
          ))}
        </div>
      )}

      <div className="container-main max-w-md text-center">
        {/* Success icon */}
        <div className="relative mb-8">
          <div className="w-28 h-28 mx-auto rounded-full flex items-center justify-center text-6xl animate-float"
            style={{ background: "linear-gradient(135deg, var(--green-500), var(--green-700))", boxShadow: "0 0 0 0 rgba(74,158,74,0.4)" }}
          >
            🎉
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-white"
            style={{ background: "var(--amber)", left: "calc(50% + 32px)" }}>
            ✓
          </div>
        </div>

        {/* Logo */}
        <div className="relative w-14 h-14 mx-auto mb-4">
          <Image src="/images/logo.png" alt="JnJ Garden" fill className="object-contain" />
        </div>

        <span className="section-tag mb-3 inline-block">Pesanan Berhasil! ✅</span>

        <h1 className="text-4xl font-extrabold mb-3" style={{ color: "var(--green-900)" }}>
          Terima Kasih! 🌿
        </h1>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Pesananmu sudah kami terima. Tim JnJ Garden akan segera memproses hidangan terbaiknya!
        </p>

        {/* Order info card */}
        <div className="card p-6 mb-6 text-left">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">No. Pesanan</p>
              <p className="font-bold font-mono" style={{ color: "var(--green-700)" }}>{orderNumber}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Estimasi Waktu</p>
              <p className="font-bold" style={{ color: "var(--green-700)" }}>⏱️ {estimatedTime} menit</p>
            </div>
          </div>
        </div>

        {/* Waiting progress bar */}
        <div className="card p-5 mb-8">
          <div className="flex items-center justify-between mb-3">
            {[
              { label: "Diterima", icon: "✅", active: true },
              { label: "Dimasak", icon: "👨‍🍳", active: true },
              { label: "Siap Saji", icon: "🍽️", active: false },
            ].map((step, i) => (
              <div key={step.label} className="flex flex-col items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg mb-1 transition-all ${
                  step.active
                    ? "shadow-md"
                    : "opacity-40"
                }`}
                  style={step.active ? { background: "var(--green-100)" } : { background: "var(--gray-100)" }}>
                  {step.icon}
                </div>
                <p className={`text-xs font-medium ${step.active ? "text-[var(--green-700)]" : "text-gray-400"}`}>
                  {step.label}
                </p>
                {i < 2 && (
                  <div className="absolute" style={{ display: "none" }} />
                )}
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 rounded-full mt-2" style={{ background: "var(--green-100)" }}>
            <div className="h-2 rounded-full transition-all duration-1000"
              style={{ width: "65%", background: "linear-gradient(90deg, var(--green-500), var(--green-400))" }} />
          </div>
          <p className="text-xs text-center text-gray-500 mt-2">Pesanan sedang diproses...</p>
        </div>

        {/* Social promo */}
        <div className="rounded-2xl p-5 mb-8 text-left"
          style={{ background: "linear-gradient(135deg, var(--green-700), var(--green-900))", color: "white" }}>
          <p className="font-bold mb-2">📸 Share Momen Kamu!</p>
          <p className="text-sm opacity-80 mb-3">
            Tag kami di Instagram dan TikTok untuk berbagi pengalaman seru di JnJ Garden!
          </p>
          <div className="flex gap-2 flex-wrap">
            <a href="https://www.instagram.com/jnjgarden_restocafe" target="_blank" rel="noopener noreferrer"
              id="confirm-instagram-link"
              className="text-xs px-3 py-1.5 rounded-full font-semibold transition-opacity hover:opacity-80"
              style={{ background: "rgba(255,255,255,0.2)" }}>
              📷 @jnjgarden_restocafe
            </a>
            <a href="https://vt.tiktok.com/ZSqXs9Edr/" target="_blank" rel="noopener noreferrer"
              id="confirm-tiktok-link"
              className="text-xs px-3 py-1.5 rounded-full font-semibold transition-opacity hover:opacity-80"
              style={{ background: "rgba(255,255,255,0.2)" }}>
              🎵 TikTok JnJ
            </a>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/" id="confirm-home-btn"
            className="btn-outline flex-1 justify-center py-3">
            <Home size={18} /> Beranda
          </Link>
          <Link href="/menu" id="confirm-order-again-btn"
            className="btn-primary flex-1 justify-center py-3">
            <UtensilsCrossed size={18} /> Pesan Lagi
          </Link>
        </div>
      </div>
    </div>
  );
}
