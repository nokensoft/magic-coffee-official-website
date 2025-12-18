# Magic Coffee - Official Website

Website resmi **Magic Coffee**, coffee shop santai yang menyajikan kopi asli Papua di Sentani, Kabupaten Jayapura.

**Live URL:** [https://magiccoffee.id](https://magiccoffee.id)

## Deskripsi Proyek

Website satu halaman (single-page) modern yang menampilkan informasi tentang Magic Coffee, meliputi:
- Hero section dengan background slider
- About / video profil
- Menu dinamis dengan filter kategori
- Highlight produk roasted coffee beans
- Galeri foto
- Informasi kontak, jam operasional, dan lokasi
- Optimasi SEO lengkap (meta tags, Open Graph, Twitter Card, JSON-LD Structured Data)

Website ini dirancang responsif, cepat dimuat, dan ramah mobile.

## Teknologi yang Digunakan

- **HTML5** – Struktur utama halaman
- **Tailwind CSS** (via CDN) – Styling utility-first, cepat dan ringan
- **Alpine.js** (v3 via CDN) – Interaktivitas ringan (mobile menu, dll.)
- **Font Awesome** (v6.5) – Ikon-ikon sosial media dan dekoratif
- **Vanilla JavaScript** – 
  - Hero background slider otomatis
  - Render menu dinamis dari file eksternal `js/menuData.js`
  - Filter kategori menu
- **Custom CSS** – Animasi zoom hero, smooth scroll, scrollbar hide, dll.
- **Video MP4** – Video autoplay loop muted pada section About
- **JSON-LD** – Structured data Schema.org untuk CafeOrCoffeeShop (mendukung rich snippet Google)

Tidak menggunakan framework berat seperti React/Vue atau build tools (Webpack, Vite, dll.), sehingga performa sangat baik dan mudah di-maintain.

## Struktur File Utama
```
/
├── index.html          ← File utama (yang Anda lihat)
├── js/
│   └── menuData.js     ← Data menu (array JavaScript)
├── images/             ← Logo, slide hero, galeri, produk, dll.
├── videos/
│   └── magic-coffee-ai-video-2.mp4 ← Video profil
└── (assets lain seperti favicon)
```


## Fitur Utama

- Navbar fixed dengan mobile menu hamburger (Alpine.js)
- Smooth scroll ke section
- Hero slider dengan 12 gambar background + animasi zoom
- Menu dinamis dengan tombol filter kategori (default: Signature Drink)
- Tombol floating WhatsApp & Instagram
- SEO-friendly lengkap + Open Graph untuk share media sosial
- Structured Data (JSON-LD) untuk meningkatkan visibilitas di Google

## Lisensi (Open Source)

**MIT License**

Copyright © 2025 Nokensoft

Dengan ini diberikan izin secara gratis kepada setiap orang yang mendapatkan salinan dari source code dan file-file terkait website ini untuk menggunakan, menyalin, memodifikasi, menggabungkan, mempublikasikan, mendistribusikan, mensublisensikan, dan/atau menjual salinan dari source code ini, dengan syarat berikut:

- Pemberitahuan hak cipta di atas dan pemberitahuan izin ini harus disertakan dalam semua salinan atau bagian substansial dari source code ini.

SOURCE CODE INI DISEDIAKAN "SEBAGAIMANA ADANYA", TANPA JAMINAN APAPUN, BAIK TERSIRAT MAUPUN TERSURAT, TERMASUK TETAPI TIDAK TERBATAS PADA JAMINAN DAPAT DIPERDAGANGKAN, KESESUAIAN UNTUK TUJUAN TERTENTU, DAN TIDAK MELANGGAR HAK. DALAM HAL APAPUN, PENGEMBANG ATAU PEMEGANG HAK CIPTA TIDAK BERTANGGUNG JAWAB ATAS KLAIM, KERUGIAN, ATAU TANGGUNG JAWAB LAINNYA, BAIK DALAM TINDAKAN KONTRAK, KERUGIAN, ATAU LAINNYA, YANG TIMBUL DARI, KELUAR DARI, ATAU SEHUBUNGAN DENGAN SOURCE CODE INI ATAU PENGGUNAAN ATAU TRANSAKSI LAIN DALAM SOURCE CODE INI.

> **Catatan penting:**  
> Lisensi MIT ini hanya berlaku untuk **source code** (HTML, CSS, JavaScript, struktur file, dan aset teknis lainnya).  
> **Konten kreatif** seperti foto galeri, logo, video, teks deskripsi bisnis, dan aset branding tetap menjadi hak cipta eksklusif **Magic Coffee** dan **Nokensoft**, dan tidak boleh digunakan ulang tanpa izin tertulis.

## Cara Menjalankan / Deploy

Cukup upload semua file ke hosting statis (GitHub Pages, Netlify, Vercel, Cloudflare Pages, atau hosting biasa).

Tidak perlu build process – semua asset di-load langsung via CDN atau file lokal.

## Kontribusi / Update

Kami terbuka untuk kontribusi! Silakan fork repository ini, buat perubahan, dan ajukan Pull Request.

- Untuk menambah menu → edit file `js/menuData.js`
- Untuk mengganti gambar galeri / slider → ganti file di folder `images/`
- Untuk update jam operasional / kontak → edit langsung di HTML atau JSON-LD

## Credit

Dibuat dan dikelola oleh  
**Nokensoft** – [https://nokensoft.com](https://nokensoft.com)

© 2025 Magic Coffee Sentani