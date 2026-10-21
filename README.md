# Kanagiri

> Landing page statis untuk **Kanigiri — Taste of Andhra**, restoran &
> promosi menu khas Andhra.

Landing page statis yang ringan, modern, dan responsif. Tanpa build step,
tanpa dependensi, tanpa backend.

## Fitur

- **Hero** menu unggulan (Mutton Biryani) dengan foto, harga + harga pembanding,
  rating bintang, jumlah ulasan, deskripsi, dan dua CTA.
- **Carousel menu rekomendasi** berisi 8 kartu (Jeera Chawal, Chicken Curry,
  Paneer Tikka, Mutton Curry, Fish Curry, Dal Fry, Garlic Naan, Vegetable Biryani).
  Mendukung panah, drag, swipe sentuh, dan navigasi keyboard.
- **Keanggotaan member** dengan bonus harian (poin ganda + streak 7 hari),
  diskon bertingkat (Silver 5% / Gold 10% / Platinum 20%), dan voucher menu 500 poin.
- **Header responsif** dengan nomor telepon (`tel:`), tombol Login, dan drawer
  navigasi yang bisa ditutup dengan `Escape`.
- **Footer** ringkas dengan tautan halaman, ikon sosial, dan copyright dinamis.
- **Wave separator** antar section.

## Tech Stack

| Layer      | Teknologi                                                  |
| ---------- | ---------------------------------------------------------- |
| Markup     | HTML5 semantik (`header`, `main`, `section`, `nav`, `footer`) |
| Styling    | CSS3 murni — design tokens sebagai custom properties        |
| Interaksi  | Vanilla JavaScript (tanpa framework, tanpa library)         |
| Tipografi  | Inter, Playfair Display, Allura (Google Fonts)             |
| Aset       | SVG untuk logo & ikon, JPEG/WebP untuk foto makanan        |

> Tidak ada `npm install`. Jalankan dengan membuka `index.html` di browser,
> atau deploy langsung sebagai static site.

## Struktur Proyek

```
.
├── index.html              # Struktur halaman
├── css/
│   └── style.css           # Design tokens + seluruh gaya
├── js/
│   └── main.js             # Drawer navigasi + carousel
├── assets/
│   └── images/             # Logo SVG + foto makanan JPEG
├── docs/
│   ├── PRD.md              # Product Requirements Document
│   └── DESIGN.md           # Spesifikasi design system
└── README.md
```

## Menjalankan

```bash
# lokal
python3 -m http.server 8000
# buka http://localhost:8000
```

## Deployment

### Vercel

```bash
npx vercel
```

### GitHub Pages

Aktifkan **Settings → Pages**, pilih branch `main` dan folder `/ (root)`.

## Design Tokens

Semua token warna, tipografi, spacing, radius, dan shadow berasal dari
`docs/DESIGN.md` dan didefinisikan sekali di `css/style.css` pada blok `:root`.

| Token | Nilai | Usage |
| ----- | ----- | ----- |
| `--color-brand-gold` | `#DFA844` | CTA utama, harga, bintang rating |
| `--color-olive` | `#7F8D2C` | Aksen kartu & level member |
| `--color-brown` | `#4B2B1E` | Heading & tombol gelap |
| `--color-page` | `#F4F2F4` | Background header, hero, footer |
| `--font-display` | Playfair Display | Heading editorial |
| `--font-script` | Allura | Eyebrow dekoratif |

## Aksesibilitas

- Kontras teks memenuhi WCAG AA.
- Semua kontrol dapat diakses keyboard, termasuk carousel (← / →).
- Tombol ikon memiliki `aria-label` yang deskriptif.
- Semua gambar informatif memiliki `alt` dan dimensi eksplisit.
- `prefers-reduced-motion` dihormati.

## Lisensi

Konten, harga, rating, dan data kontak merupakan contoh dari referensi.
Validasi ulang sebelum digunakan untuk bisnis nyata.
Foto makanan dari [Unsplash](https://unsplash.com) (Unsplash License).
