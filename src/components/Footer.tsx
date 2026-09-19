import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Phone, Music2, ShoppingBag, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--green-900)] text-white">
      {/* Wave top */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12" style={{display:'block'}}>
          <path d="M0 60L48 50C96 40 192 20 288 16.7C384 13 480 27 576 33.3C672 40 768 40 864 33.3C960 27 1056 13 1152 10C1248 7 1344 13 1392 16.7L1440 20V60H0Z" fill="#1a3a1a"/>
        </svg>
      </div>

      <div className="container-main pb-10 pt-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image src="/images/logo.png" alt="JnJ Garden" fill className="object-contain" />
              </div>
              <div>
                <p className="font-bold text-white text-lg leading-tight">JnJ Garden</p>
                <p className="text-[var(--green-300)] text-sm">Resto & Cafe</p>
              </div>
            </div>
            <p className="text-[var(--green-300)] text-sm leading-relaxed">
              Hidden gem cafe harga warkop rasa cafe. Titik kumpul keseruan keluarga, sahabat, pasangan, dan komunitas mu.
            </p>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-bold text-white mb-4 text-base">Informasi</h3>
            <ul className="space-y-3 text-sm text-[var(--green-300)]">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[var(--amber)]" />
                <span>Cangkurawok RT02/RW04, Babakan Dramaga, Kampus Dalam Belakang IPB, Bogor</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={15} className="shrink-0 text-[var(--amber)]" />
                <span>Setiap hari, 08.00 – 03.00 WIB</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="shrink-0 text-[var(--amber)]" />
                <a href="https://wa.me/6285188221799" target="_blank" rel="noopener noreferrer"
                  className="hover:text-white transition-colors">
                  0851 8822 1799 (WhatsApp)
                </a>
              </li>
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h3 className="font-bold text-white mb-4 text-base">Temukan Kami</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/jnjgarden_restocafe"
                target="_blank" rel="noopener noreferrer"
                id="footer-instagram-link"
                className="flex items-center gap-2 text-sm text-[var(--green-300)] hover:text-white transition-colors group"
              >
                <ExternalLink size={16} className="text-pink-400 group-hover:scale-110 transition-transform" />
                📷 @jnjgarden_restocafe
              </a>
              <a
                href="https://vt.tiktok.com/ZSqXs9Edr/"
                target="_blank" rel="noopener noreferrer"
                id="footer-tiktok-link"
                className="flex items-center gap-2 text-sm text-[var(--green-300)] hover:text-white transition-colors group"
              >
                <Music2 size={16} className="text-[var(--green-400)] group-hover:scale-110 transition-transform" />
                TikTok JnJ Garden
              </a>
              <a
                href="#"
                id="footer-gofood-link"
                className="flex items-center gap-2 text-sm text-[var(--green-300)] hover:text-white transition-colors group"
              >
                <ShoppingBag size={16} className="text-red-400 group-hover:scale-110 transition-transform" />
                GoFood: jnjgardenrestocafe
              </a>
            </div>

            <div className="mt-5">
              <Link
                href="/menu"
                className="btn-amber text-sm"
                id="footer-order-btn"
              >
                Pesan Sekarang 🍃
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--green-700)] mt-10 pt-6 text-center text-xs text-[var(--green-400)]">
          © {new Date().getFullYear()} JnJ Garden Resto & Cafe. All rights reserved. Made with 💚 in Bogor.
        </div>
      </div>
    </footer>
  );
}
