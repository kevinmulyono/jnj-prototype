"use client";

import { useState, useMemo } from "react";
import { MENU_ITEMS, CATEGORIES, type Category } from "@/lib/menuData";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import { ShoppingCart, Search, ChevronRight } from "lucide-react";

const CATEGORY_EMOJIS: Record<Category, string> = {
  "Makanan Spesial": "🍽️",
  "Cemilan Spesial": "🍿",
  "Aneka Indomie": "🍜",
  "Coffee Series": "☕",
  "Minuman": "🥤",
  "Soda Series": "🫧",
  "Milk Blend Series": "🥛",
  "Juice Series": "🍹",
  "Gen Z Drink": "✨",
  "Hot Drinks": "🔥",
  "BBQ Set Menu": "🔥",
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "Semua">("Semua");
  const [search, setSearch] = useState("");
  const addItem = useCartStore((s) => s.addItem);
  const totalItems = useCartStore((s) => s.getTotalItems());
  const [addedId, setAddedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let items = MENU_ITEMS;
    if (activeCategory !== "Semua") {
      items = items.filter((i) => i.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (i) => i.name.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)
      );
    }
    return items;
  }, [activeCategory, search]);

  const handleAdd = (item: typeof MENU_ITEMS[0]) => {
    addItem(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1000);
  };

  return (
    <>
      {/* Header */}
      <div className="pt-24 pb-10" style={{ background: "linear-gradient(135deg, var(--green-50), var(--green-100))" }}>
        <div className="container-main text-center">
          <span className="section-tag">🍽️ Menu Lengkap</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3" style={{ color: "var(--green-900)" }}>
            Daftar Menu JnJ Garden
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Semua menu tersedia dengan harga bersahabat. Pilih favoritmu dan tambahkan ke keranjang!
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto mt-6">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              id="menu-search-input"
              type="text"
              placeholder="Cari menu..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-input pl-11"
            />
          </div>
        </div>
      </div>

      <div className="container-main py-8">
        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide">
          <button
            id="menu-tab-semua"
            onClick={() => setActiveCategory("Semua")}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeCategory === "Semua"
                ? "bg-[var(--green-700)] text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-200 hover:border-[var(--green-400)]"
            }`}
          >
            🌿 Semua
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              id={`menu-tab-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-[var(--green-700)] text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[var(--green-400)]"
              }`}
            >
              {CATEGORY_EMOJIS[cat]} {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-5">
          Menampilkan <strong>{filtered.length}</strong> item
          {activeCategory !== "Semua" && ` dalam "${activeCategory}"`}
          {search && ` untuk "${search}"`}
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-gray-500 font-medium">Menu tidak ditemukan</p>
            <button onClick={() => { setSearch(""); setActiveCategory("Semua"); }}
              className="mt-4 text-[var(--green-600)] underline text-sm">
              Reset pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((item) => (
              <div key={item.id} className="card overflow-hidden group flex flex-col">
                {/* Emoji area */}
                <div className="h-32 flex items-center justify-center text-6xl relative"
                  style={{ background: "linear-gradient(135deg, var(--green-50), var(--green-100))" }}>
                  <span className="group-hover:scale-110 transition-transform duration-300 select-none">
                    {item.emoji}
                  </span>
                  {item.popular && (
                    <span className="absolute top-2 right-2 badge-popular text-xs">⭐</span>
                  )}
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <h3 className="font-bold text-sm leading-tight flex-1" style={{ color: "var(--green-900)" }}>
                      {item.name}
                    </h3>
                    <span className="font-extrabold text-base shrink-0" style={{ color: "var(--green-600)" }}>
                      {item.price >= 100 ? `${item.price}K` : `${item.price}K`}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4">{item.description}</p>

                  <button
                    id={`menu-add-${item.id}`}
                    onClick={() => handleAdd(item)}
                    className={`w-full py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      addedId === item.id
                        ? "bg-[var(--amber)] text-white scale-95"
                        : "bg-[var(--green-100)] text-[var(--green-700)] hover:bg-[var(--green-600)] hover:text-white"
                    }`}
                  >
                    {addedId === item.id ? "✓ Ditambahkan!" : "+ Tambah ke Pesanan"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Floating cart button */}
      {totalItems > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <Link
            href="/cart"
            id="menu-floating-cart"
            className="btn-primary px-6 py-3 shadow-2xl text-base"
            style={{ boxShadow: "0 8px 30px rgba(45,106,45,0.45)" }}
          >
            <ShoppingCart size={20} />
            Lihat Keranjang ({totalItems} item)
            <ChevronRight size={18} />
          </Link>
        </div>
      )}

      <div className="pb-28" />
    </>
  );
}
