# PRD --- Kanigiri Restaurant Landing Page

> Dokumen acuan implementasi landing page berdasarkan screenshot
> referensi yang diberikan. Nama brand, teks, harga, rating, dan menu di
> bawah merupakan konten contoh yang terlihat pada referensi; validasi
> ulang sebelum digunakan untuk bisnis nyata.

## 1. Ringkasan Produk

**Nama produk:** Kanigiri --- Taste of Andhra\
**Jenis:** Landing page restoran / promosi menu\
**Tujuan utama:** Membuat pengunjung tertarik pada menu unggulan,
memahami harga dan rating, lalu melakukan pemesanan atau menjelajahi
menu lain.

Halaman mengutamakan hero visual dengan foto makanan besar, informasi
menu unggulan, kartu menu rekomendasi, serta footer ringkas. Nuansa
visualnya hangat dan premium, menggunakan latar putih keabu-abuan, aksen
emas-oranye, hijau zaitun, dan cokelat tua.

## 2. Tujuan dan Indikator Keberhasilan

### Tujuan

-   Menampilkan identitas restoran dan menu unggulan secara langsung.
-   Membuat harga, rating, deskripsi, dan CTA mudah ditemukan.
-   Mengarahkan pengunjung ke alur pemesanan.
-   Memberikan akses ke menu lain, halaman informasi, blog, kontak, dan
    kebijakan.

### Indikator keberhasilan

-   Pengunjung dapat mengenali menu utama dan harga dalam beberapa
    detik.
-   CTA **Order Now** dapat ditemukan tanpa perlu menggulir pada
    desktop.
-   Semua kartu menu memiliki hierarki informasi yang konsisten.
-   Navigasi dan carousel dapat digunakan dengan mouse, keyboard, dan
    layar sentuh.
-   Layout tetap terbaca dan tidak overflow pada mobile, tablet, dan
    desktop.
-   Gambar dioptimalkan agar halaman tetap cepat dimuat.

## 3. Target Pengguna

-   Pengunjung yang sedang memilih makanan dan ingin melihat menu serta
    harga dengan cepat.
-   Calon pelanggan yang ingin memesan melalui telepon, WhatsApp, atau
    sistem pemesanan.
-   Pengunjung baru yang ingin mengenal restoran dan pilihan menunya.

## 4. Ruang Lingkup

### Termasuk

-   Header dan navigasi.
-   Hero menu unggulan.
-   Informasi harga, rating, jumlah ulasan, deskripsi, dan CTA.
-   Bagian menu rekomendasi berbentuk kartu.
-   Kontrol carousel untuk kartu menu.
-   Footer dengan tautan halaman dan media sosial.
-   Responsive layout dan interaksi dasar.
-   Struktur konten yang mudah diganti melalui data terpusat.

### Di luar ruang lingkup awal

-   Keranjang belanja dan checkout penuh.
-   Login pelanggan dan admin.
-   Pembayaran online.
-   Sistem ulasan asli atau sinkronisasi rating eksternal.
-   Manajemen inventori dan pemrosesan pesanan di backend.

Fitur di luar ruang lingkup dapat ditambahkan pada fase berikutnya jika
bisnis memerlukannya.

## 5. Struktur Halaman

Urutan section:

1.  **Header**
    -   Logo / wordmark Kanigiri di kiri.
    -   Tombol telepon dengan ikon dan nomor kontak.
    -   Tombol Login.
    -   Tombol menu hamburger.
2.  **Hero**
    -   Foto menu utama di kolom kiri.
    -   Label kategori / nama menu dalam tipografi dekoratif.
    -   Judul utama "Biryani".
    -   Badge harga dengan harga saat ini dan harga coret.
    -   Rating bintang, skor, dan jumlah ulasan.
    -   Deskripsi singkat.
    -   CTA primer "Order Now".
    -   CTA sekunder "Explore More".
3.  **Menu rekomendasi**
    -   Carousel tiga kartu pada desktop.
    -   Tiap kartu memiliki gambar makanan yang menonjol di bagian atas,
        nama menu, badge harga, rating, deskripsi singkat, dan CTA.
    -   Contoh menu referensi: Jeera Chawal, Chicken, Paneer.
    -   Panah navigasi kiri dan kanan.
4.  **Footer**
    -   Pemisah berbentuk gelombang.
    -   Ikon media sosial.
    -   Tautan: Home, About Us, Menu, Blog, Contact, Return Policy.
    -   Copyright.

## 6. Detail Persyaratan Fungsional

### FR-01 --- Header

-   Logo dapat diklik dan mengarah ke bagian atas halaman.
-   Nomor telepon menggunakan tautan `tel:` pada perangkat yang
    mendukung panggilan.
-   Tombol Login mengarah ke halaman login atau tujuan yang ditentukan
    proyek.
-   Tombol hamburger membuka dan menutup navigasi.
-   Menu navigasi harus memiliki state terbuka/tertutup yang jelas dan
    atribut aksesibilitas yang sesuai.

### FR-02 --- Hero menu unggulan

-   Menampilkan satu menu utama dengan gambar berkualitas tinggi.
-   Judul menu menjadi teks paling dominan pada hero.
-   Harga saat ini terlihat jelas; harga lama ditampilkan sebagai harga
    pembanding bila tersedia.
-   Badge harga tidak boleh menutupi bagian penting dari foto atau teks.
-   Rating menampilkan bintang, skor numerik, dan jumlah ulasan jika
    datanya tersedia.
-   Deskripsi dibatasi agar ringkas dan tidak membentuk blok teks
    terlalu panjang.
-   Tombol **Order Now** mengarah ke tujuan pemesanan yang
    dikonfigurasi.
-   Tombol **Explore More** menggulir ke bagian menu rekomendasi atau
    membuka halaman menu.

### FR-03 --- Kartu menu

-   Kartu dibuat dari data menu, bukan markup yang diduplikasi secara
    manual.
-   Data minimum: nama, kategori opsional, gambar, harga, harga lama
    opsional, rating opsional, deskripsi, URL pemesanan.
-   CTA tiap kartu mengarah ke item atau alur pemesanan yang sesuai.
-   Jumlah kartu yang terlihat menyesuaikan lebar layar.
-   Jika jumlah menu tidak melebihi kapasitas tampilan, kontrol carousel
    dapat disembunyikan atau dibuat nonaktif.

### FR-04 --- Carousel

-   Tombol panah kiri dan kanan menggeser daftar menu.
-   Carousel dapat digunakan dengan keyboard dan touch gesture.
-   Fokus keyboard tetap terlihat.
-   Perubahan slide tidak boleh menyebabkan halaman bergeser secara
    vertikal secara tidak terduga.
-   Pada mobile, gunakan pola swipe atau scroll horizontal dengan
    indikator yang jelas.

### FR-05 --- Footer

-   Tautan navigasi mengarah ke halaman atau section yang benar.
-   Ikon sosial hanya ditampilkan jika URL profil tersedia.
-   Copyright menggunakan tahun dinamis atau nilai yang dikelola dari
    konfigurasi.

### FR-06 --- Responsive behavior

-   Desktop: hero dua kolom dan tiga kartu menu terlihat bersamaan jika
    lebar cukup.
-   Tablet: jarak antar elemen dikurangi; kartu dapat tampil dua kolom
    atau carousel.
-   Mobile: header dipadatkan, hero menjadi satu kolom, tombol tetap
    mudah disentuh, dan kartu menu dapat menjadi satu kartu per
    viewport.
-   Tidak ada teks, badge, atau tombol yang terpotong pada viewport
    sempit.

## 7. Konten dan Model Data

Contoh struktur data konseptual:

``` ts
type MenuItem = {
  id: string;
  name: string;
  eyebrow?: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  description: string;
  orderUrl: string;
  featured?: boolean;
};
```

Konten contoh dari referensi: - Featured: Mutton Biryani --- ₹360, harga
pembanding ₹410, rating 4.5, 521 reviews. - Jeera Chawal --- ₹180, harga
pembanding ₹200. - Chicken --- ₹220, harga pembanding ₹260. - Paneer ---
₹200, harga pembanding ₹220.

Harga, nama, mata uang, rating, ulasan, telepon, dan tautan merupakan
data yang dapat berubah. Jangan menanamkan nilai contoh sebagai asumsi
bisnis permanen.

## 8. Persyaratan Nonfungsional

### Performa

-   Gunakan gambar WebP/AVIF bila didukung, dengan fallback yang sesuai.
-   Tetapkan `width` dan `height` atau `aspect-ratio` pada gambar untuk
    mengurangi layout shift.
-   Gunakan lazy loading untuk gambar di luar hero; gambar hero utama
    dapat diprioritaskan.
-   Hindari animasi berat dan library besar yang tidak diperlukan.

### Aksesibilitas

-   Kontras teks memenuhi WCAG AA sebisa mungkin.
-   Semua kontrol dapat diakses dengan keyboard.
-   Tombol ikon memiliki nama aksesibel.
-   Gambar menu memiliki alt text deskriptif.
-   Jangan menyampaikan harga atau rating hanya melalui warna.
-   Hormati `prefers-reduced-motion`.

### SEO

-   Satu H1 utama untuk menu unggulan atau pesan halaman.
-   Title dan meta description yang relevan.
-   Open Graph image dan metadata sosial.
-   Gunakan HTML semantik (`header`, `main`, `section`, `nav`,
    `footer`).
-   Tambahkan structured data restoran/menu hanya jika data nyata dan
    sesuai tersedia.

### Maintainability

-   Pisahkan komponen header, hero, menu card, carousel, dan footer.
-   Simpan konten menu dalam satu sumber data.
-   Gunakan design tokens dari `DESIGN.md`.
-   Hindari nilai warna, jarak, dan radius acak di setiap komponen.

## 9. Acceptance Criteria

-   [ ] Header menampilkan brand, nomor telepon, login, dan kontrol
    menu.
-   [ ] Hero memiliki gambar, nama menu, harga, rating, deskripsi, dan
    dua CTA.
-   [ ] Section rekomendasi menampilkan kartu menu konsisten.
-   [ ] Carousel berfungsi dan tombol panah memiliki state yang benar.
-   [ ] Footer menampilkan tautan navigasi dan ikon sosial yang valid.
-   [ ] Tampilan responsif pada lebar 360 px, 768 px, 1024 px, dan 1440
    px.
-   [ ] Tidak ada horizontal overflow yang tidak disengaja.
-   [ ] Semua tautan dan CTA memiliki tujuan nyata atau placeholder yang
    terdokumentasi.
-   [ ] Gambar memiliki alt text dan ukuran eksplisit.
-   [ ] Interaksi dapat digunakan melalui keyboard.
-   [ ] Konten contoh mudah diganti tanpa mengubah struktur komponen.

## 10. Prioritas Implementasi

### P0 --- Wajib untuk versi pertama

-   Struktur section, visual utama, data menu, responsive layout, CTA,
    footer.
-   Navigasi hamburger dan carousel yang berfungsi.
-   Aksesibilitas dasar dan optimasi gambar.

### P1 --- Peningkatan

-   Animasi transisi halus.
-   Integrasi tautan pemesanan nyata.
-   SEO dan metadata lengkap.
-   Loading state / fallback gambar.

### P2 --- Opsional

-   CMS atau dashboard menu.
-   Integrasi ulasan eksternal.
-   Pelacakan analytics dengan persetujuan yang sesuai.
-   Alur pemesanan dan pembayaran lengkap.

## 11. Asumsi dan Pertanyaan Terbuka

-   Apakah pemesanan dilakukan melalui telepon, WhatsApp, aplikasi pihak
    ketiga, atau checkout internal?
-   Apakah Login benar-benar diperlukan untuk pengunjung, atau hanya
    elemen visual pada referensi?
-   Apakah seluruh teks, harga, dan identitas Kanigiri dipertahankan
    atau diganti dengan brand proyek?
-   Apakah menu harus mengambil data dari API/CMS atau cukup dari file
    statis?
-   URL sosial, telepon, dan halaman footer perlu dikonfirmasi sebelum
    rilis.
