"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MapPin, Clock, Phone, ChevronRight, Star, Users, Coffee, Utensils } from "lucide-react";
import { getPopularItems } from "@/lib/menuData";
import { useCartStore } from "@/store/cartStore";

/* ─── Scroll Reveal Hook ─────────────────────────────────── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ─── Section wrapper with reveal ───────────────────────────*/
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Stats Bar ──────────────────────────────────────────── */
const stats = [
  { icon: Users, label: "Kapasitas", value: "100+ Kursi" },
  { icon: Utensils, label: "Menu", value: "80+ Item" },
  { icon: Clock, label: "Buka", value: "08.00–03.00" },
  { icon: Coffee, label: "Suasana", value: "Garden Vibes" },
];

export default function HomePage() {
  const popularItems = getPopularItems(6);
  const addItem = useCartStore((s) => s.addItem);
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (item: ReturnType<typeof getPopularItems>[0]) => {
    addItem(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #e8f5e4 0%, #c8e6c0 40%, #f0faf0 100%)",
        }}
      >
        {/* Background decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, var(--green-400), transparent)", transform: "translate(30%, -20%)" }} />
          <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, var(--green-500), transparent)", transform: "translate(-30%, 20%)" }} />
          {/* Leaf emojis floating */}
          {["🌿","🍃","🌱","🍀"].map((leaf, i) => (
            <span key={i} className="absolute text-3xl animate-float opacity-30 select-none"
              style={{
                top: `${15 + i * 20}%`,
                left: `${5 + i * 22}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            >{leaf}</span>
          ))}
        </div>

        <div className="container-main w-full pt-24 pb-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm animate-fade-in">
                <span className="text-lg">🌿</span>
                <span className="text-sm font-semibold" style={{ color: "var(--green-700)" }}>Hidden Gem di Bogor</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-up"
                style={{ color: "var(--green-900)", animationDelay: "100ms" }}>
                JnJ Garden
                <br />
                <span style={{ color: "var(--green-600)" }}>Resto & Cafe</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-lg animate-fade-in-up"
                style={{ animationDelay: "200ms" }}>
                Hidden gem cafe <strong>harga warkop, rasa cafe.</strong> Titik kumpul keseruan keluarga, sahabat, pasangan & komunitas.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                <Link href="/menu" id="hero-order-btn" className="btn-primary text-base">
                  🍽️ Pesan Sekarang
                  <ChevronRight size={18} />
                </Link>
                <a href="#about" className="btn-outline text-base">
                  Tentang Kami
                </a>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                {["🌳 Garden View","🔥 BBQ Area","📸 Instagramable","🎵 Live Music Corner","🕐 Open Late"].map(tag => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{ background: "rgba(255,255,255,0.8)", color: "var(--green-800)", border: "1px solid var(--green-300)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Cafe photo collage */}
            <div className="relative flex justify-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              {/* Main large photo */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl z-20 animate-float"
                style={{ animationDuration: "4s" }}>
                <Image
                  src="/images/cafe-garden.jpg"
                  alt="JnJ Garden suasana cafe"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 glass-card px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="#f5a623" stroke="none" />)}
                    </div>
                    <span className="text-xs font-semibold text-gray-700">4.9 Rating</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-0.5">Buka sampai jam 03.00 WIB!</p>
                </div>
              </div>
              {/* Side photo top */}
              <div className="absolute top-0 right-0 md:-right-8 w-36 h-40 rounded-2xl overflow-hidden shadow-xl z-10 border-4 border-white"
                style={{ transform: "rotate(4deg)" }}>
                <Image src="/images/cafe-food.jpg" alt="Menu JnJ Garden" fill className="object-cover" />
              </div>
              {/* Side photo bottom */}
              <div className="absolute bottom-0 left-0 md:-left-8 w-32 h-36 rounded-2xl overflow-hidden shadow-xl z-10 border-4 border-white"
                style={{ transform: "rotate(-5deg)" }}>
                <Image src="/images/cafe-seating.jpg" alt="Tempat duduk JnJ Garden" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12" style={{display:'block'}}>
            <path d="M0 60L60 50C120 40 240 20 360 16.7C480 13 600 27 720 33.3C840 40 960 40 1080 33.3C1200 27 1320 13 1380 10L1440 7V60H0Z" fill="#fafaf7" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────── */}
      <section className="section-padding py-10" style={{ background: "white" }}>
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-2xl flex items-center justify-center"
                    style={{ background: "var(--green-100)" }}>
                    <s.icon size={22} style={{ color: "var(--green-700)" }} />
                  </div>
                  <p className="font-bold text-lg" style={{ color: "var(--green-900)" }}>{s.value}</p>
                  <p className="text-sm text-gray-500">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────── */}
      <section id="about" className="section-padding" style={{ background: "var(--green-50)" }}>
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Photos grid */}
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg col-span-2">
                  <Image src="/images/cafe-garden.jpg" alt="Taman JnJ Garden" fill className="object-cover" />
                </div>
                <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/cafe-seating.jpg" alt="Area duduk" fill className="object-cover" />
                </div>
                <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/cafe-food.jpg" alt="Menu makanan" fill className="object-cover" />
                </div>
              </div>
            </Reveal>

            {/* Text */}
            <Reveal delay={150}>
              <div>
                <span className="section-tag">🌿 Tentang Kami</span>
                <h2 className="text-4xl font-bold mb-5" style={{ color: "var(--green-900)" }}>
                  Lebih dari Sekadar Cafe
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-5">
                  JnJ Garden adalah <strong>hidden gem</strong> yang tersembunyi di kawasan Babakan Dramaga, belakang IPB Bogor.
                  Kami hadir sebagai ruang santai yang nyaman untuk kamu dan orang-orang tercinta.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Dengan konsep <em>garden natural</em>, suasana kami menawarkan ketenangan di tengah hijaunya taman.
                  Harga terjangkau, tapi kualitas dan nuansanya tetap premium — cocok untuk keluarga, sahabat, pasangan, hingga komunitas.
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { emoji: "🌳", text: "Area garden asri" },
                    { emoji: "🔥", text: "Paket BBQ seru" },
                    { emoji: "📷", text: "Spot foto instagramable" },
                    { emoji: "🌙", text: "Buka hingga jam 3 pagi" },
                  ].map((h) => (
                    <div key={h.text} className="flex items-center gap-3 p-3 rounded-xl"
                      style={{ background: "white", border: "1px solid var(--green-200)" }}>
                      <span className="text-2xl">{h.emoji}</span>
                      <span className="text-sm font-medium text-gray-700">{h.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── POPULAR MENU PREVIEW ───────────────────────────── */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container-main">
          <Reveal>
            <div className="text-center mb-12">
              <span className="section-tag">🍽️ Menu Unggulan</span>
              <h2 className="text-4xl font-bold" style={{ color: "var(--green-900)" }}>
                Favorit Pelanggan
              </h2>
              <p className="text-gray-500 mt-2 max-w-md mx-auto">
                Pilihan terlaris yang paling disukai tamu JnJ Garden
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularItems.map((item, i) => (
              <Reveal key={item.id} delay={i * 80}>
                <div className="card overflow-hidden group">
                  {/* Emoji header */}
                  <div className="h-40 flex items-center justify-center text-7xl relative"
                    style={{ background: "linear-gradient(135deg, var(--green-50), var(--green-100))" }}>
                    <span className="group-hover:scale-110 transition-transform duration-300 select-none">
                      {item.emoji}
                    </span>
                    {item.popular && (
                      <span className="absolute top-3 right-3 badge-popular">⭐ Populer</span>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-base leading-tight" style={{ color: "var(--green-900)" }}>
                        {item.name}
                      </h3>
                      <span className="font-bold text-lg shrink-0 ml-2" style={{ color: "var(--green-600)" }}>
                        {item.price === 350 ? "350K" : `${item.price}K`}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.description}</p>

                    <button
                      id={`home-add-${item.id}`}
                      onClick={() => handleAdd(item)}
                      className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                        addedId === item.id
                          ? "bg-[var(--amber)] text-white"
                          : "bg-[var(--green-100)] text-[var(--green-700)] hover:bg-[var(--green-600)] hover:text-white"
                      }`}
                    >
                      {addedId === item.id ? "✓ Ditambahkan!" : "+ Tambah ke Pesanan"}
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="text-center mt-10">
              <Link href="/menu" id="home-view-all-menu-btn" className="btn-primary">
                Lihat Semua Menu
                <ChevronRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── LOCATION & HOURS ───────────────────────────────── */}
      <section id="location" className="section-padding" style={{ background: "var(--green-900)" }}>
        <div className="container-main">
          <Reveal>
            <div className="text-center mb-12">
              <span className="section-tag" style={{ background: "rgba(255,255,255,0.15)", color: "var(--green-300)" }}>
                📍 Kunjungi Kami
              </span>
              <h2 className="text-4xl font-bold text-white">Lokasi & Jam Buka</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Map placeholder */}
            <Reveal>
              <div className="rounded-3xl overflow-hidden shadow-2xl h-72 md:h-96 relative"
                style={{ border: "3px solid rgba(255,255,255,0.1)" }}>
                <iframe
                  src="https://www.google.com/maps?q=Cangkurawok+Babakan+Dramaga+Bogor&output=embed"
                  width="100%" height="100%" style={{ border: 0 }}
                  allowFullScreen loading="lazy"
                  title="Lokasi JnJ Garden"
                />
              </div>
            </Reveal>

            {/* Info */}
            <Reveal delay={150}>
              <div className="flex flex-col justify-center gap-6">
                <div className="glass-card p-6" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(245,166,35,0.2)" }}>
                      <MapPin size={22} style={{ color: "var(--amber)" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Alamat</p>
                      <p className="text-[var(--green-300)] text-sm leading-relaxed">
                        Cangkurawok RT02/RW04, Babakan Dramaga,<br />
                        Kampus Dalam Belakang IPB, Bogor
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(245,166,35,0.2)" }}>
                      <Clock size={22} style={{ color: "var(--amber)" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Jam Operasional</p>
                      <p className="text-[var(--green-300)] text-sm">Senin – Minggu</p>
                      <p className="text-white font-bold text-xl">08.00 – 03.00 WIB</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(245,166,35,0.2)" }}>
                      <Phone size={22} style={{ color: "var(--amber)" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Hubungi Kami</p>
                      <a href="https://wa.me/6285188221799" target="_blank" rel="noopener noreferrer"
                        id="location-wa-btn"
                        className="inline-flex items-center gap-2 mt-1 px-4 py-2 rounded-xl text-sm font-semibold"
                        style={{ background: "#25D366", color: "white" }}>
                        💬 WhatsApp: 0851 8822 1799
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────── */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, var(--green-600), var(--green-800))" }}>
        <Reveal>
          <div className="container-main text-center">
            <p className="text-white/80 mb-2 text-lg">Yuk, langsung pesan!</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Meja Menunggumu 🌿
            </h2>
            <Link href="/menu" id="cta-order-btn" className="btn-amber text-base">
              🍽️ Lihat Menu & Pesan
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
