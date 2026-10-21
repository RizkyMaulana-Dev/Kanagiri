# DESIGN.md --- Kanigiri Restaurant Landing Page

> Spesifikasi visual implementasi berdasarkan screenshot referensi.
> Nilai di bawah adalah design system awal yang diturunkan dari proporsi
> visual gambar, bukan pengukuran source design asli. Gunakan token
> secara konsisten dan sesuaikan setelah melihat hasil di browser.

## 1. Arah Visual

**Karakter:** hangat, elegan, appetizing, bersih, sedikit editorial.\
**Kesan:** restoran premium yang ramah, bukan aplikasi delivery yang
padat.\
**Prinsip utama:** fotografi makanan menjadi pusat perhatian; teks
singkat; warna aksen digunakan dengan hemat; bentuk organik dipakai
sebagai aksen section, bukan dekorasi di setiap elemen.

Hindari: - Gradient dekoratif yang tidak ada fungsi. - Shadow gelap dan
tebal pada semua kartu. - Banyak pill/badge tanpa kebutuhan. - Animasi
masuk yang berlebihan. - Font display pada paragraf panjang. - Menaruh
teks langsung di atas foto jika kontras tidak terjamin. - Meniru
ketidaksempurnaan screenshot yang berasal dari kompresi gambar.

## 2. Design Tokens

Gunakan CSS custom properties atau token setara.

``` css
:root {
  /* Brand */
  --color-brand-gold: #DFA844;
  --color-brand-gold-hover: #C9902F;
  --color-olive: #7F8D2C;
  --color-olive-dark: #657322;
  --color-brown: #4B2B1E;
  --color-brown-deep: #3B2118;

  /* Surface */
  --color-page: #F4F2F4;
  --color-surface: #FFFFFF;
  --color-surface-soft: #F9F7F5;
  --color-border: #E7DFD3;

  /* Text */
  --color-text: #382820;
  --color-text-muted: #77716B;
  --color-text-on-dark: #FFFFFF;
  --color-text-on-olive: #FFFFFF;

  /* Rating */
  --color-rating: #DFA844;

  /* Typography */
  --font-body: "Inter", "Helvetica Neue", Arial, sans-serif;
  --font-display: "Playfair Display", Georgia, serif;
  --font-script: "Allura", "Brush Script MT", cursive;

  /* Layout */
  --container-max: 1200px;
  --page-gutter-desktop: 48px;
  --page-gutter-tablet: 32px;
  --page-gutter-mobile: 20px;

  /* Spacing scale: multiples of 4px */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  /* Shape */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-pill: 999px;

  /* Shadow: restrained */
  --shadow-card: 0 8px 24px rgba(59, 33, 24, 0.06);
  --shadow-image: 0 14px 28px rgba(44, 30, 22, 0.12);
}
```

### Aturan penggunaan warna

-   **Gold** untuk CTA utama, harga, bintang rating, dan aksen kecil.
-   **Olive** untuk kartu menu tertentu dan aksen visual utama.
-   **Brown** untuk heading, teks penting, dan tombol gelap.
-   **Page background** abu-abu hangat sangat pucat untuk header/hero
    dan area footer.
-   **White** untuk area konten, kartu deskripsi hero, dan ruang kosong.
-   Jangan gunakan semua warna dengan intensitas tinggi di satu area.
    Satu komponen idealnya memiliki satu warna aksen dominan.

## 3. Tipografi

Gunakan maksimum tiga keluarga font: 1. **Inter** atau sans-serif serupa
untuk UI dan body. 2. **Playfair Display** atau serif elegan untuk
heading editorial jika diperlukan. 3. **Allura** atau script yang ringan
untuk eyebrow dekoratif seperti "Mutton" dan label kategori. Script
hanya untuk kata pendek, tidak untuk informasi penting.

### Skala font desktop

  Token                 Ukuran   Line-height   Weight Penggunaan
  ---------------- ----------- ------------- -------- -------------------------
  Display XL             60 px    0.98--1.05      700 Judul "Biryani"
  Display L              48 px          1.05      700 Alternatif heading hero
  H2                     32 px          1.15      700 Judul section
  H3                     24 px           1.2      700 Nama menu di kartu
  H4                     18 px           1.3      600 Subjudul
  Body                   14 px          1.55      400 Deskripsi hero
  Body Small             12 px          1.45      400 Deskripsi kartu, detail
  Label              10--11 px           1.2      600 Label harga, badge
  Button             11--12 px           1.0      700 Teks CTA
  Eyebrow Script     32--40 px           1.0      400 "Mutton", kategori menu
  Footer             11--12 px           1.4      400 Link dan copyright

### Skala font tablet dan mobile

-   Mobile hero title: `clamp(40px, 11vw, 52px)`.
-   Mobile H2: 28 px.
-   Mobile nama menu kartu: 22--24 px.
-   Body mobile: 14 px.
-   Detail kecil jangan turun di bawah 11 px untuk konten penting.
-   Gunakan `font-size: clamp()` untuk heading responsif, bukan
    breakpoint yang terlalu banyak.

### Aturan teks

-   Heading utama maksimal dua baris.
-   Deskripsi hero idealnya 3--5 baris pada desktop.
-   Deskripsi kartu maksimal 3--4 baris; gunakan copy ringkas, bukan
    memotong teks penting dengan ellipsis.
-   Tombol memakai sentence case atau uppercase secara konsisten;
    referensi menggunakan uppercase.
-   Jangan menggunakan font script untuk harga, rating, atau tombol.

## 4. Grid dan Container

### Desktop besar (≥ 1200 px)

-   `max-width` container: 1200 px.
-   Gutter halaman: 48 px.
-   Header: tinggi visual sekitar 72--84 px.
-   Hero: dua kolom dengan rasio kurang lebih 55% gambar dan 45% konten.
-   Gap hero: 32--48 px.
-   Konten utama sejajar dengan container, bukan melebar penuh ke tepi
    viewport.

### Desktop (1024--1199 px)

-   Gutter: 32 px.
-   Hero columns: 52% / 48%.
-   Gap: 24--32 px.
-   Heading utama dapat turun ke 52--56 px.

### Tablet (768--1023 px)

-   Gutter: 28--32 px.
-   Hero tetap dua kolom hanya jika tiap kolom memiliki lebar memadai;
    jika tidak, pindah ke satu kolom.
-   Heading utama: 44--52 px.
-   Menu cards: dua item terlihat atau carousel horizontal.

### Mobile (≤ 767 px)

-   Gutter: 20 px.
-   Header tinggi 64--72 px.
-   Hero satu kolom; gambar berada di atas konten.
-   Heading utama 40--48 px.
-   Menu cards: satu kartu dominan per viewport, dengan swipe horizontal
    atau stack vertikal.
-   Tombol utama minimal tinggi 44 px.
-   Hindari memaksa layout screenshot desktop ke layar kecil.

## 5. Header

### Struktur

-   Kiri: logo.
-   Kanan: nomor telepon, Login, hamburger.
-   Header berada di atas background page yang pucat.
-   Hindari garis pemisah tebal di bawah header.

### Ukuran dan jarak

-   Desktop padding horizontal mengikuti container.
-   Tinggi header: 76 px target, 64 px minimum.
-   Logo: lebar 130--160 px, tinggi mengikuti rasio asli.
-   Jarak logo ke kontrol kanan fleksibel.
-   Call button: tinggi 36--40 px, padding horizontal 14--18 px, border
    1 px warna border.
-   Login button: tinggi 34--38 px, padding horizontal 16 px.
-   Gap antar kontrol: 8--12 px.
-   Hamburger target klik minimal 44 × 44 px meskipun ikon visual hanya
    18--22 px.

### Bentuk

-   Tombol telepon: outline halus, radius pill.
-   Login: gold solid, teks putih atau cokelat gelap sesuai kontras.
-   Hamburger: tiga garis sederhana atau ikon yang setara.
-   Logo jangan direkonstruksi dengan teks biasa jika aset logo
    tersedia; gunakan aset gambar/SVG yang disediakan.

### Mobile

-   Logo sekitar 112--132 px.
-   Sembunyikan label telepon panjang jika diperlukan, tetapi
    pertahankan akses ke nomor melalui menu atau ikon yang memiliki
    label aksesibel.
-   Login dapat dipindahkan ke drawer bila ruang terlalu sempit.
-   Jangan menghilangkan tombol menu tanpa menyediakan navigasi
    alternatif.

## 6. Hero Section

### Layout desktop

-   Latar: `--color-page`.
-   Min-height visual: sekitar 480--540 px setelah header, menyesuaikan
    konten dan viewport.
-   Padding atas: 24--32 px.
-   Padding bawah: 64--88 px, memberi ruang bagi bentuk gelombang
    pemisah.
-   Kolom gambar: 54--56%.
-   Kolom konten: 44--46%.
-   Vertikal alignment konten: center.
-   Gap antar kolom: 28--44 px.

### Gambar hero

-   Foto makanan merupakan fokus visual terbesar.
-   Gunakan gambar asli dengan latar yang serasi dan objek makanan
    terbaca jelas.
-   Lebar gambar mengikuti kolom; maksimum sekitar 620 px.
-   Pertahankan rasio gambar sumber; jangan memaksa crop agresif.
-   `object-fit: contain` lebih sesuai untuk foto komposisi makanan yang
    perlu menampilkan piring dan garnish secara penuh.
-   Shadow boleh dipakai jika berasal dari komposisi foto; jangan
    menambahkan glow.
-   Pada mobile, gunakan lebar 100%, batas tinggi sekitar 340 px, dan
    `object-fit: contain`.

### Konten hero

Urutan: 1. Eyebrow script "Mutton". 2. H1 "Biryani". 3. Rating dan
ulasan. 4. Deskripsi. 5. CTA group.

Badge harga dapat diposisikan dekat sisi kanan atas area konten, tetapi
tidak boleh menutupi judul atau membuat layout tidak stabil.

### Ukuran

-   H1 desktop: 60 px, line-height sekitar 0.98.
-   Eyebrow script: 36--40 px.
-   Rating row: margin-top 12--16 px.
-   Deskripsi: margin-top 16--20 px; max-width 360--400 px.
-   CTA group: margin-top 20--24 px; gap 8--12 px.
-   Tombol: tinggi 38--42 px, padding horizontal 20--24 px, radius pill.
-   Kartu deskripsi putih: padding 16--20 px, radius 14--18 px.

### Badge harga

-   Lingkaran 72--88 px desktop.
-   Border/garis dekoratif tipis, warna olive atau gold sesuai varian.
-   Label "PRICE": 9--10 px.
-   Harga utama: 22--26 px, weight 700.
-   Harga lama: 11--12 px, strikethrough.
-   Jangan menyampaikan harga hanya dengan gambar; harga harus tersedia
    sebagai teks HTML.
-   Pada mobile, ukuran sekitar 68--76 px atau ubah menjadi label harga
    horizontal agar tidak menabrak heading.

### Rating

-   Bintang 14--16 px.
-   Warna gold untuk bintang terisi; bintang kosong dapat memakai warna
    border.
-   Skor: 13--14 px, weight 600.
-   Jumlah ulasan: 11--12 px, warna muted, diberi jarak 6--8 px.
-   Sertakan teks alternatif atau label aksesibel, misalnya "Rating 4,5
    dari 5 berdasarkan 521 ulasan".

### CTA

-   Primary: gold solid, teks putih/cokelat gelap dengan kontras yang
    cukup.
-   Secondary: transparan atau putih, border gold 1 px, teks gold gelap.
-   Hover primary: gold lebih gelap, tanpa scale berlebihan.
-   Hover secondary: latar gold sangat pucat.
-   Focus: outline jelas 2 px dengan offset 2 px.
-   Active: sedikit perubahan warna; jangan mengandalkan animasi gerak.

## 7. Pemisah Gelombang

-   Gunakan SVG responsif atau CSS mask untuk membuat gelombang yang
    halus.
-   Gelombang memisahkan background abu-abu hero dari area putih menu.
-   Tinggi visual: 28--48 px desktop, 18--30 px mobile.
-   Hindari pola terlalu tajam, banyak puncak, atau bentuk yang tampak
    seperti grafik acak.
-   Pastikan SVG tidak menyebabkan horizontal overflow.
-   Warna isi gelombang harus sama dengan section berikutnya.

## 8. Section Menu Rekomendasi

### Layout

-   Latar: putih.
-   Padding atas: 24--40 px setelah gelombang.
-   Padding bawah: 72--96 px sebelum footer wave.
-   Tiga kartu sejajar pada desktop lebar.
-   Gap kartu: 28--32 px.
-   Maksimum lebar kartu sekitar 320--350 px; tinggi kartu mengikuti
    konten dengan konsisten.
-   Panah carousel berada di sisi luar daftar jika ruang tersedia.

### Kartu menu

-   Bentuk dasar: rounded rectangle, radius 14--18 px.
-   Background kartu dapat bergantian olive dan gold seperti referensi,
    tetapi gunakan sistem warna yang terkontrol.
-   Padding konten: 16 px.
-   Foto menu menonjol dari tepi atas kartu atau berada di atasnya
    dengan overlap ringan.
-   Hindari overlap yang membuat foto menutupi nama menu, harga, atau
    kontrol.
-   Shadow ringan saja; kartu berwarna solid tidak memerlukan shadow
    berat.

### Foto kartu

-   Lebar sekitar 75--90% lebar kartu.
-   Rasio gambar yang disarankan 1.35:1 sampai 1.6:1.
-   Gunakan `object-fit: cover` bila foto memang cocok untuk crop;
    gunakan `contain` jika seluruh wadah makanan perlu terlihat.
-   Sudut foto 12--16 px.
-   Overlap ke atas kartu: sekitar 24--40 px jika meniru referensi.
-   Sediakan ruang di bagian atas kartu untuk gambar yang overlap.

### Nama dan detail menu

-   Eyebrow/kategori script: 20--26 px.
-   Nama menu: 24--28 px desktop, 22--24 px mobile.
-   Rating: margin-top 8--10 px.
-   Deskripsi: 11--12 px pada desktop referensi, namun untuk produksi
    sebaiknya 12--13 px agar mudah dibaca.
-   Deskripsi maksimal 3--4 baris.
-   Tombol kartu: tinggi 30--34 px pada desktop visual; untuk
    aksesibilitas mobile minimal 40--44 px.
-   CTA kartu memakai cokelat tua dengan teks putih pada kartu
    olive/gold.

### Badge harga kartu

-   Diameter sekitar 60--72 px.
-   Posisi di pojok kanan atas gambar atau di sisi kanan area foto.
-   Beri ruang agar badge tidak bertabrakan dengan judul.
-   Label harga 8--9 px, harga 18--22 px, harga lama 10--11 px.
-   Pada mobile, pindahkan ke area teks bila overlap mengganggu.

### Panah carousel

-   Tombol lingkaran 32--40 px secara visual; target interaksi minimal
    44 × 44 px.
-   Latar putih, border tipis, ikon panah muted.
-   Nonaktifkan atau sembunyikan dengan benar saat tidak ada item
    tambahan.
-   Jangan membuat panah dekoratif yang tidak berfungsi.

## 9. Footer

### Bentuk dan layout

-   Background abu-abu hangat seperti hero.
-   Pemisah gelombang di bagian atas footer.
-   Padding atas 40--48 px dan bawah 24--32 px.
-   Ikon sosial di tengah.
-   Tautan navigasi satu baris pada desktop; wrap menjadi beberapa baris
    pada mobile.
-   Copyright berada di bawah link dengan jarak 14--18 px.

### Ikon sosial

-   Ukuran visual 16--18 px.
-   Area klik minimal 36--44 px.
-   Gap 8--12 px.
-   Gunakan ikon dari satu library atau aset resmi dengan stroke/berat
    yang seragam.
-   Setiap ikon memiliki accessible name dan URL yang valid.

### Tautan footer

-   Font 11--12 px desktop, 12--13 px mobile.
-   Warna olive atau brown-muted.
-   Gap horizontal 12--16 px.
-   Pemisah slash kecil dapat digunakan jika tidak mengganggu
    aksesibilitas.
-   Hover: underline atau perubahan warna halus.
-   Copyright: 10--11 px, warna muted.

## 10. Spacing Rules

Gunakan kelipatan 4 px dan pilih dari token yang sudah ditetapkan.
Hindari nilai acak per elemen.

  Konteks                                     Jarak
  ---------------------------- --------------------
  Ikon ke label dalam tombol                6--8 px
  Antar kontrol header                     8--12 px
  Eyebrow ke heading                        0--4 px
  Heading ke rating                       12--16 px
  Rating ke deskripsi                     14--18 px
  Deskripsi ke CTA                        20--24 px
  Padding kartu                               16 px
  Nama menu ke rating                      8--10 px
  Rating ke deskripsi kartu               10--12 px
  Antar kartu desktop                     28--32 px
  Antar section besar                     64--96 px
  Padding section mobile         40--56 px vertikal
  Gutter mobile                               20 px
  Gutter tablet                           28--32 px
  Gutter desktop                              48 px

**Aturan:** bila layout terasa padat, tambah whitespace atau ringkas
copy terlebih dahulu sebelum memperkecil ukuran font.

## 11. Border, Radius, dan Shadow

-   Border standar: 1 px `--color-border`.
-   Radius tombol pill: `999px`.
-   Radius kartu: 14--18 px.
-   Radius kotak deskripsi: 14--18 px.
-   Radius gambar: 12--16 px.
-   Shadow utama hanya untuk gambar atau kartu putih yang perlu
    dipisahkan dari background.
-   Gunakan shadow yang lembut dan transparan; hindari outline gelap dan
    efek neumorphism.
-   Tidak semua elemen perlu border dan shadow sekaligus.

## 12. Motion dan Interaction

### Durasi

-   Hover/focus color: 140--180 ms.
-   Menu drawer: 180--240 ms.
-   Carousel: 240--360 ms.
-   Gunakan easing lembut seperti `ease-out` atau cubic-bezier yang
    tidak memantul.

### Interaksi

-   Tombol berubah warna ketika hover.
-   Link footer mendapat underline atau perubahan warna.
-   Drawer memiliki state terbuka/tertutup dan bisa ditutup dengan
    Escape.
-   Carousel tidak auto-play secara default; jika autoplay ditambahkan,
    sediakan cara menghentikannya.
-   Hormati `prefers-reduced-motion: reduce`.
-   Hindari parallax, cursor custom, efek magnetik, dan animasi reveal
    pada setiap elemen tanpa alasan UX.

## 13. Responsive Behavior

### Breakpoint awal

``` css
/* Mobile-first */
@media (min-width: 768px) { /* tablet / small desktop */ }
@media (min-width: 1024px) { /* desktop */ }
@media (min-width: 1280px) { /* wide desktop */ }
```

### Perilaku

-   **360--430 px:** header ringkas; hero stack; foto tidak terpotong;
    CTA boleh stack jika perlu; menu card satu per view.
-   **431--767 px:** hero tetap stack; gunakan ruang lebih luas; kartu
    tetap mudah digeser.
-   **768--1023 px:** hero dapat dua kolom jika konten cukup; menu dua
    kartu atau carousel.
-   **1024--1279 px:** hero dua kolom dan tiga kartu bila memungkinkan.
-   **1280 px ke atas:** gunakan max-width container agar konten tidak
    melebar berlebihan.

Jangan menetapkan tinggi tetap pada section yang berisi teks dinamis.
Gunakan `min-height` bila diperlukan, dan biarkan konten menentukan
tinggi akhir.

## 14. Gambar dan Asset

-   Prioritaskan foto makanan beresolusi tinggi dengan pencahayaan
    natural dan warna realistis.
-   Hindari gambar makanan yang terlalu glossy, tekstur plastik, garnish
    tidak masuk akal, atau komposisi yang tampak sintetis.
-   Gunakan aset brand asli jika tersedia.
-   Jangan mengambil logo atau ikon acak dari sumber yang tidak jelas
    lisensinya.
-   Format yang disarankan: AVIF/WebP untuk foto; SVG untuk logo dan
    ikon sederhana.
-   Hero: preload hanya jika memang merupakan LCP image.
-   Gambar di luar viewport menggunakan lazy loading.
-   Berikan fallback background dan alt text yang sesuai.

## 15. Accessibility Checklist

-   [ ] Kontras teks normal minimal 4.5:1 bila memungkinkan.
-   [ ] Kontras teks besar minimal 3:1.
-   [ ] Tombol dan link memiliki focus state yang jelas.
-   [ ] Target sentuh utama minimal 44 × 44 px.
-   [ ] Ikon tanpa label memiliki accessible name.
-   [ ] Semua gambar informatif memiliki alt text.
-   [ ] Heading mengikuti urutan semantik.
-   [ ] Carousel dapat digunakan dengan keyboard.
-   [ ] Gerakan dapat dikurangi melalui `prefers-reduced-motion`.
-   [ ] Informasi harga dan rating tersedia sebagai teks, bukan hanya
    gambar.

## 16. Quality Gate Anti-Slop

Sebelum dianggap selesai, periksa: - Apakah foto makanan adalah focal
point, bukan dekorasi tambahan? - Apakah semua jarak mengikuti skala
yang konsisten? - Apakah hanya ada satu fokus visual utama per
section? - Apakah shadow digunakan karena kebutuhan layering, bukan
sekadar membuat semua hal terlihat "premium"? - Apakah setiap badge
menyampaikan informasi yang berguna? - Apakah foto dan teks benar-benar
sejajar secara optik? - Apakah tombol memiliki hierarchy yang jelas? -
Apakah animasi membantu memahami interaksi? - Apakah desain tetap terasa
rapi ketika gambar gagal dimuat atau nama menu lebih panjang? - Apakah
mobile dirancang sebagai layout tersendiri, bukan sekadar versi desktop
yang dipersempit?

## 17. Definition of Done

-   Implementasi menggunakan token warna, tipografi, spacing, radius,
    dan shadow yang ditentukan.
-   Semua section mengikuti hierarki dan urutan pada PRD.
-   Layout telah dicek pada lebar 360, 390, 768, 1024, 1280, dan 1440
    px.
-   Tidak ada overflow horizontal yang tidak disengaja.
-   Foto, harga, rating, CTA, dan navigasi terbaca serta tidak saling
    menimpa.
-   Hover, focus, active, disabled, dan open states ditangani.
-   Aksesibilitas dasar terpenuhi.
-   Tidak ada placeholder link yang tertinggal tanpa penanda.
