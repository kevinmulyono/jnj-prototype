// ============================================================
// JnJ Garden Resto & Cafe — Static Menu Data
// Extracted from cafe's official menu
// ============================================================

export type Category =
  | "Makanan Spesial"
  | "Cemilan Spesial"
  | "Aneka Indomie"
  | "Minuman"
  | "Soda Series"
  | "Milk Blend Series"
  | "Coffee Series"
  | "Juice Series"
  | "Gen Z Drink"
  | "Hot Drinks"
  | "BBQ Set Menu";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // in thousands IDR
  category: Category;
  emoji: string;
  popular?: boolean;
}

export const CATEGORIES: Category[] = [
  "Makanan Spesial",
  "Cemilan Spesial",
  "Aneka Indomie",
  "Coffee Series",
  "Minuman",
  "Soda Series",
  "Milk Blend Series",
  "Juice Series",
  "Gen Z Drink",
  "Hot Drinks",
  "BBQ Set Menu",
];

export const MENU_ITEMS: MenuItem[] = [
  // ── MAKANAN SPESIAL ──────────────────────────────────────
  { id: "ms-001", name: "Ayam Bakar Nasi Putih", description: "Ayam bakar juicy dengan bumbu rempah khas JnJ, disajikan dengan nasi putih hangat dan lalapan segar.", price: 26, category: "Makanan Spesial", emoji: "🍗", popular: true },
  { id: "ms-002", name: "Ayam Goreng Kriuk Nasi Putih", description: "Ayam goreng super kriuk dengan tepung bumbu renyah, disajikan bersama nasi putih pulen.", price: 26, category: "Makanan Spesial", emoji: "🍗", popular: true },
  { id: "ms-003", name: "Ayam Goreng Kriuk Nasi Daun Jeruk", description: "Ayam goreng kriuk dengan nasi daun jeruk yang harum dan wangi.", price: 26, category: "Makanan Spesial", emoji: "🍗" },
  { id: "ms-004", name: "Ayam Bakar Nasi Daun Jeruk", description: "Ayam bakar bumbu meresap, disajikan dengan nasi daun jeruk aromatik.", price: 26, category: "Makanan Spesial", emoji: "🍖" },
  { id: "ms-005", name: "Rice Chicken Katsu BBQ", description: "Chicken katsu crispy dengan saus BBQ khas, disajikan bersama nasi hangat.", price: 26, category: "Makanan Spesial", emoji: "🍱", popular: true },
  { id: "ms-006", name: "Rice Chicken Katsu Teriyaki", description: "Chicken katsu dengan saus teriyaki manis gurih, plating ala restoran Jepang.", price: 26, category: "Makanan Spesial", emoji: "🍱" },
  { id: "ms-007", name: "Nasi Goreng Merah", description: "Nasi goreng dengan bumbu merah pedas khas, lengkap dengan telur ceplok.", price: 16, category: "Makanan Spesial", emoji: "🍳" },
  { id: "ms-008", name: "Nasi Goreng Ijo", description: "Nasi goreng unik berwarna hijau dengan bumbu kemangi & daun-daunan segar.", price: 16, category: "Makanan Spesial", emoji: "🍳" },
  { id: "ms-009", name: "Cakalang Rica Tanpa Nasi", description: "Ikan cakalang dengan bumbu rica-rica pedas yang menggugah selera.", price: 18, category: "Makanan Spesial", emoji: "🐟" },
  { id: "ms-010", name: "Kwetiaw Siram Beef", description: "Kwetiaw mie lebar disiram kuah beef kental dan gurih.", price: 28, category: "Makanan Spesial", emoji: "🍜", popular: true },
  { id: "ms-011", name: "Bakmi Goreng Komplit", description: "Bakmi goreng dengan topping komplit: bakso, sosis, dan sayuran segar.", price: 18, category: "Makanan Spesial", emoji: "🍜" },
  { id: "ms-012", name: "Kwetiaw Goreng", description: "Kwetiaw goreng klasik dengan bumbu kecap manis dan sayuran.", price: 18, category: "Makanan Spesial", emoji: "🍜" },
  { id: "ms-013", name: "Nasi Cakalang Rica", description: "Nasi dengan ikan cakalang bumbu rica pedas yang menggugah selera.", price: 22, category: "Makanan Spesial", emoji: "🍚" },
  { id: "ms-014", name: "Nasi Udang Crispy Teriyaki", description: "Udang crispy dengan saus teriyaki manis, disajikan bersama nasi hangat.", price: 26, category: "Makanan Spesial", emoji: "🍤", popular: true },
  { id: "ms-015", name: "Nasi Udang Crispy BBQ", description: "Udang crispy saus BBQ smoky, disajikan dengan nasi dan lalap segar.", price: 26, category: "Makanan Spesial", emoji: "🍤" },
  { id: "ms-016", name: "Nasi Udang Crispy Rica Rica", description: "Udang crispy dengan bumbu rica-rica pedas yang bikin nagih.", price: 26, category: "Makanan Spesial", emoji: "🍤" },
  { id: "ms-017", name: "Ayam JnJ Spesial Kriuk", description: "Ayam goreng signature JnJ dengan resep rahasia — super kriuk & gurih!", price: 17, category: "Makanan Spesial", emoji: "🍗", popular: true },
  { id: "ms-018", name: "Sop IGA + Nasi", description: "Sop iga sapi dengan kuah bening gurih dan rempah-rempah pilihan.", price: 28, category: "Makanan Spesial", emoji: "🍲" },
  { id: "ms-019", name: "Udang BBQ Tanpa Nasi", description: "Udang ukuran jumbo dengan saus BBQ gurih, cocok jadi lauk atau camilan.", price: 22, category: "Makanan Spesial", emoji: "🦐" },
  { id: "ms-020", name: "Nasi", description: "Nasi putih hangat pulen.", price: 5, category: "Makanan Spesial", emoji: "🍚" },

  // ── CEMILAN SPESIAL ──────────────────────────────────────
  { id: "cs-001", name: "Pisang Goreng Original", description: "Pisang goreng renyah di luar, lembut di dalam. Cocok untuk teman ngobrol.", price: 13, category: "Cemilan Spesial", emoji: "🍌" },
  { id: "cs-002", name: "Pisang Goreng Coklat Keju", description: "Pisang goreng dengan topping coklat leleh dan keju parut melimpah.", price: 18, category: "Cemilan Spesial", emoji: "🍌", popular: true },
  { id: "cs-003", name: "Pisang Bakar Coklat Keju", description: "Pisang bakar manis dengan lelehan coklat dan keju yang menggoda.", price: 18, category: "Cemilan Spesial", emoji: "🍌", popular: true },
  { id: "cs-004", name: "Roti Bakar Coklat Keju", description: "Roti bakar golden brown dengan coklat dan keju yang lumer di mulut.", price: 18, category: "Cemilan Spesial", emoji: "🍞", popular: true },
  { id: "cs-005", name: "Roti Bakar Keju", description: "Roti bakar dengan keju lembut yang meleleh nikmat.", price: 16, category: "Cemilan Spesial", emoji: "🍞" },
  { id: "cs-006", name: "Roti Bakar Kacang", description: "Roti bakar dengan selai kacang yang kaya rasa.", price: 16, category: "Cemilan Spesial", emoji: "🥜" },
  { id: "cs-007", name: "Roti Bakar Strawberry", description: "Roti bakar dengan selai strawberry segar dan keju parut.", price: 16, category: "Cemilan Spesial", emoji: "🍓" },
  { id: "cs-008", name: "Bakwan Jagung", description: "Bakwan jagung manis dan gurih, garing di luar lembut di dalam.", price: 16, category: "Cemilan Spesial", emoji: "🌽" },
  { id: "cs-009", name: "Sosis Bakar", description: "Sosis sapi/ayam dibakar sempurna dengan saus tomat dan sambal.", price: 18, category: "Cemilan Spesial", emoji: "🌭" },
  { id: "cs-010", name: "Cireng Goreng", description: "Aci goreng khas Sunda yang kenyal gurih, digoreng sampai keemasan.", price: 18, category: "Cemilan Spesial", emoji: "🟡" },
  { id: "cs-011", name: "Singkong Goreng Original", description: "Singkong goreng empuk dengan taburan garam dan sambal pelengkap.", price: 16, category: "Cemilan Spesial", emoji: "🥔" },
  { id: "cs-012", name: "Tape Goreng Coklat Keju", description: "Tape goreng dengan lelehan coklat dan keju — kombinasi unik yang nagih!", price: 18, category: "Cemilan Spesial", emoji: "🍫" },
  { id: "cs-013", name: "Tape Goreng Original", description: "Tape goreng manis dengan tekstur yang unik dan lembut.", price: 13, category: "Cemilan Spesial", emoji: "🫓" },

  // ── ANEKA INDOMIE ────────────────────────────────────────
  { id: "ind-001", name: "Indomie Goreng Spesial", description: "Indomie goreng dengan tambahan telur dan topping spesial JnJ.", price: 16, category: "Aneka Indomie", emoji: "🍜", popular: true },
  { id: "ind-002", name: "Indomie Goreng Telur", description: "Indomie goreng klasik dengan telur ceplok atau orak-arik.", price: 14, category: "Aneka Indomie", emoji: "🍜" },
  { id: "ind-003", name: "Indomie Goreng Polos", description: "Indomie goreng original tanpa topping tambahan — simpel tapi enak.", price: 11, category: "Aneka Indomie", emoji: "🍜" },
  { id: "ind-004", name: "Indomie Kuah Soto Spesial", description: "Indomie kuah dengan bumbu soto gurih dan topping spesial.", price: 16, category: "Aneka Indomie", emoji: "🍲" },
  { id: "ind-005", name: "Indomie Kuah Soto Telur", description: "Indomie kuah soto dengan tambahan telur rebus.", price: 14, category: "Aneka Indomie", emoji: "🍲" },
  { id: "ind-006", name: "Indomie Kuah Soto Polos", description: "Indomie kuah soto klasik yang hangat dan gurih.", price: 11, category: "Aneka Indomie", emoji: "🍲" },
  { id: "ind-007", name: "Indomie Kuah Kari Spesial", description: "Indomie kuah kari dengan rempah-rempah kaya dan telur.", price: 16, category: "Aneka Indomie", emoji: "🍛" },
  { id: "ind-008", name: "Indomie Kuah Kari Telur", description: "Indomie kuah kari dengan tambahan telur rebus.", price: 14, category: "Aneka Indomie", emoji: "🍛" },
  { id: "ind-009", name: "Indomie Kuah Kari Polos", description: "Indomie kuah kari klasik yang hangat.", price: 11, category: "Aneka Indomie", emoji: "🍛" },

  // ── COFFEE SERIES ────────────────────────────────────────
  { id: "cf-001", name: "Ice Coffee Hazelnut", description: "Kopi es dengan sirup hazelnut yang manis dan harum.", price: 18, category: "Coffee Series", emoji: "☕", popular: true },
  { id: "cf-002", name: "Ice Coffee Caramel", description: "Kopi es dengan saus karamel yang kaya dan creamy.", price: 18, category: "Coffee Series", emoji: "☕" },
  { id: "cf-003", name: "Ice Coffee Matcha", description: "Perpaduan kopi dan matcha Jepang yang unik dan enak.", price: 18, category: "Coffee Series", emoji: "🍵" },
  { id: "cf-004", name: "Ice Coffee Palm Sugar", description: "Kopi es dengan pemanis gula aren natural yang khas.", price: 18, category: "Coffee Series", emoji: "☕", popular: true },
  { id: "cf-005", name: "Ice Coffee Cappuccino", description: "Cappuccino dingin dengan busa susu lembut di atasnya.", price: 18, category: "Coffee Series", emoji: "☕" },
  { id: "cf-006", name: "Ice Coffee Latte", description: "Kopi latte dingin dengan susu segar yang creamy.", price: 18, category: "Coffee Series", emoji: "☕" },
  { id: "cf-007", name: "Ice Coffee Americano", description: "Americano dingin untuk kamu yang suka kopi murni tanpa terlalu manis.", price: 12, category: "Coffee Series", emoji: "☕" },
  { id: "cf-008", name: "Ice Coffee Strawberry", description: "Perpaduan kopi dan strawberry yang unik — asam manis yang menyegarkan.", price: 18, category: "Coffee Series", emoji: "🍓" },
  { id: "cf-009", name: "Ice Coffee Banana", description: "Kopi es dengan rasa pisang yang unik dan creamy.", price: 18, category: "Coffee Series", emoji: "🍌" },
  { id: "cf-010", name: "Ice Coffee Choco", description: "Kopi es dengan coklat yang kaya rasa.", price: 18, category: "Coffee Series", emoji: "🍫" },

  // ── MINUMAN ──────────────────────────────────────────────
  { id: "mn-001", name: "Ice Lychee Tea", description: "Teh segar dengan rasa lychee manis yang menyegarkan.", price: 16, category: "Minuman", emoji: "🍵", popular: true },
  { id: "mn-002", name: "Ice Matcha JnJ Fruit", description: "Matcha premium JnJ dicampur buah-buahan segar — minuman signature!", price: 17, category: "Minuman", emoji: "🍵", popular: true },
  { id: "mn-003", name: "Ice Milo Spesial", description: "Milo dingin dengan topping susu kental manis dan milo powder.", price: 16, category: "Minuman", emoji: "🥛" },
  { id: "mn-004", name: "Ice Apple Tea", description: "Teh apel segar dengan es batu yang menyegarkan di hari panas.", price: 16, category: "Minuman", emoji: "🍎" },
  { id: "mn-005", name: "Ice Markisa Tea", description: "Teh dengan rasa markisa tropical yang menyegarkan.", price: 16, category: "Minuman", emoji: "🟡" },
  { id: "mn-006", name: "Ice Mangga Tea", description: "Teh mangga harum dengan potongan buah mangga segar.", price: 16, category: "Minuman", emoji: "🥭" },
  { id: "mn-007", name: "Ice Lemon Tea", description: "Teh lemon segar dan asam manis yang menyegarkan.", price: 16, category: "Minuman", emoji: "🍋" },
  { id: "mn-008", name: "Ice Peach Tea", description: "Teh rasa peach yang harum dan segar.", price: 16, category: "Minuman", emoji: "🍑" },
  { id: "mn-009", name: "Ice Jeruk", description: "Es jeruk klasik segar dengan perasan jeruk asli.", price: 12, category: "Minuman", emoji: "🍊" },
  { id: "mn-010", name: "Ice Kunyit Asem", description: "Minuman tradisional jamu kunyit asem yang menyehatkan dan segar.", price: 12, category: "Minuman", emoji: "🌿" },
  { id: "mn-011", name: "Ice Tea", description: "Teh manis dingin klasik yang selalu pas kapan saja.", price: 4, category: "Minuman", emoji: "🍵" },

  // ── SODA SERIES ──────────────────────────────────────────
  { id: "sd-001", name: "Ice Strawberry Fizz", description: "Soda segar dengan rasa strawberry dan busa yang menggoda.", price: 16, category: "Soda Series", emoji: "🍓", popular: true },
  { id: "sd-002", name: "Ice Mango Fizz", description: "Soda mangga tropical yang segar dan berbuih.", price: 16, category: "Soda Series", emoji: "🥭" },
  { id: "sd-003", name: "Ice Lychee Fizz", description: "Soda lychee dengan aroma buah yang harum.", price: 16, category: "Soda Series", emoji: "🫧" },
  { id: "sd-004", name: "Ice Melon Fizz", description: "Soda melon hijau segar dengan warna yang cantik.", price: 16, category: "Soda Series", emoji: "🍈" },
  { id: "sd-005", name: "Ice Yuzu Fizz", description: "Soda yuzu Jepang dengan rasa asam segar yang unik.", price: 16, category: "Soda Series", emoji: "🍋" },

  // ── MILK BLEND SERIES ────────────────────────────────────
  { id: "mb-001", name: "Choco Triple Biscuit", description: "Milk blend coklat dengan 3 lapis biscuit renyah di atasnya.", price: 18, category: "Milk Blend Series", emoji: "🍫", popular: true },
  { id: "mb-002", name: "Milo Dino Biscuit", description: "Milk blend milo dengan biscuit dinosaurus yang ikonik.", price: 18, category: "Milk Blend Series", emoji: "🦕", popular: true },
  { id: "mb-003", name: "Strawberry Milk Jam Biscuit", description: "Milk blend strawberry dengan selai dan biscuit renyah.", price: 18, category: "Milk Blend Series", emoji: "🍓" },
  { id: "mb-004", name: "Matcha Milk Biscuit", description: "Milk blend matcha premium dengan biscuit sebagai topping.", price: 18, category: "Milk Blend Series", emoji: "🍵" },
  { id: "mb-005", name: "Yuzu Milk Jely", description: "Milk blend yuzu dengan jelly kenyal yang menyegarkan.", price: 18, category: "Milk Blend Series", emoji: "🫐" },

  // ── JUICE SERIES ─────────────────────────────────────────
  { id: "js-001", name: "Juice Buah Naga", description: "Jus buah naga merah segar kaya antioksidan.", price: 16, category: "Juice Series", emoji: "🐉", popular: true },
  { id: "js-002", name: "Juice Mangga", description: "Jus mangga manis harum dari buah mangga pilihan.", price: 16, category: "Juice Series", emoji: "🥭" },
  { id: "js-003", name: "Juice Strawberry", description: "Jus strawberry segar dengan rasa asam manis yang menyegarkan.", price: 16, category: "Juice Series", emoji: "🍓" },
  { id: "js-004", name: "Juice Jambu", description: "Jus jambu biji merah kaya vitamin C yang menyehatkan.", price: 16, category: "Juice Series", emoji: "🍎" },
  { id: "js-005", name: "Juice Alpukat", description: "Jus alpukat creamy dengan susu dan sedikit gula — mengenyangkan!", price: 16, category: "Juice Series", emoji: "🥑" },

  // ── GEN Z DRINK ──────────────────────────────────────────
  { id: "gz-001", name: "Ice Flamingo Sprinkle", description: "Minuman cantik pink flamingo dengan sprinkle warna-warni — hits di Instagram!", price: 18, category: "Gen Z Drink", emoji: "🦩", popular: true },
  { id: "gz-002", name: "Ice Blue Sunset Sprinkle", description: "Gradasi biru-oranye seperti sunset dengan sprinkle yang instagramable.", price: 18, category: "Gen Z Drink", emoji: "🌅", popular: true },
  { id: "gz-003", name: "Ice Blue Ocean Sprinkle", description: "Minuman biru seperti lautan dengan sprinkle putih seperti ombak.", price: 18, category: "Gen Z Drink", emoji: "🌊" },
  { id: "gz-004", name: "Ice Red Yellow Sprinkle", description: "Minuman merah kuning meriah yang eye-catching dan segar.", price: 18, category: "Gen Z Drink", emoji: "🎆" },
  { id: "gz-005", name: "Ice Purple Blue Sprinkle", description: "Gradasi ungu-biru yang cantik dengan sprinkle untuk foto-fotoan!", price: 18, category: "Gen Z Drink", emoji: "💜" },

  // ── HOT DRINKS ───────────────────────────────────────────
  { id: "hd-001", name: "Kopi Hitam", description: "Kopi hitam tradisional panas yang kuat dan aromatik.", price: 7, category: "Hot Drinks", emoji: "☕", popular: true },
  { id: "hd-002", name: "Teh Manis Panas", description: "Teh manis panas klasik yang menenangkan.", price: 3, category: "Hot Drinks", emoji: "🍵" },
  { id: "hd-003", name: "Teh Tawar Panas", description: "Teh tawar panas untuk yang suka minuman sehat.", price: 5, category: "Hot Drinks", emoji: "🍵" },
  { id: "hd-004", name: "Milo Panas", description: "Milo panas creamy yang cocok untuk menemani malam santai.", price: 10, category: "Hot Drinks", emoji: "🥛" },
  { id: "hd-005", name: "Jeruk Panas", description: "Air jeruk hangat yang menyehatkan dan menyegarkan tenggorokan.", price: 10, category: "Hot Drinks", emoji: "🍊" },
  { id: "hd-006", name: "Nipis Panas", description: "Air nipis hangat yang menyegarkan dan kaya vitamin C.", price: 10, category: "Hot Drinks", emoji: "🍋" },
  { id: "hd-007", name: "Mineral 500ml", description: "Air mineral dingin yang menyegarkan.", price: 5, category: "Hot Drinks", emoji: "💧" },

  // ── BBQ SET MENU ─────────────────────────────────────────
  { id: "bbq-001", name: "BBQ Set Menu (3 Item)", description: "Paket BBQ seru isi 3 item pilihan: daging, sosis, jamur, crab stick, dumpling, enoki, dll. Gratis camp 1 malam! Min. order 3 pax.", price: 350, category: "BBQ Set Menu", emoji: "🔥", popular: true },
];

// Get items by category
export function getByCategory(cat: Category): MenuItem[] {
  return MENU_ITEMS.filter((item) => item.category === cat);
}

// Get popular items for homepage preview
export function getPopularItems(limit = 6): MenuItem[] {
  return MENU_ITEMS.filter((item) => item.popular).slice(0, limit);
}
