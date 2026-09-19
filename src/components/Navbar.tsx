"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const totalItems = useCartStore((s) => s.getTotalItems());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/menu", label: "Menu" },
    { href: "/#about", label: "Tentang Kami" },
    { href: "/#location", label: "Lokasi" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/logo.png"
                alt="JnJ Garden Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-[var(--green-800)] leading-tight text-sm md:text-base" style={{color: 'var(--green-700)'}}>
                JnJ Garden
              </p>
              <p className="text-xs text-[var(--gray-600)] leading-tight">Resto & Cafe</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-[var(--green-600)]"
                style={{ color: scrolled ? 'var(--gray-800)' : 'var(--green-900)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <Link
              href="/cart"
              id="navbar-cart-btn"
              className="relative flex items-center gap-2 bg-[var(--green-600)] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-[var(--green-500)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <ShoppingCart size={16} />
              <span className="hidden sm:inline">Keranjang</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--amber)] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile hamburger */}
            <button
              id="navbar-mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-[var(--green-700)] hover:bg-[var(--green-100)] transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(255,255,255,0.98)", backdropFilter: "blur(12px)" }}
      >
        <div className="container-main py-4 flex flex-col gap-1 border-t border-[var(--gray-200)]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 px-3 rounded-lg text-[var(--green-800)] font-medium hover:bg-[var(--green-100)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
