# Kopi Senja - Portal Komunitas & Loyalty Program

Repositori ini berisi proyek aplikasi web front-end untuk memenuhi Tugas Ujian Tengah Semester (UTS) mata kuliah Pemrograman Web. Aplikasi ini berfokus pada fitur Program Keanggotaan (Membership) dan Ulasan Pelanggan untuk kedai "Kopi Senja".

## 👨‍💻 Informasi Mahasiswa
* **Nama:** M. Wildan Islami Pasha
* **NIM:** 25091397011
* **Topik/Modul:** Program Keanggotaan (Membership) & Ulasan Pelanggan

## ✨ Fitur Utama
1. **Navigasi Single Page Application (SPA):** Perpindahan antar halaman (Simulasi Poin dan Pendaftaran/Ulasan) dilakukan menggunakan AJAX (`XMLHttpRequest`) murni tanpa melakukan *refresh* halaman.
2. **Simulasi Poin & Tier Otomatis:** Fitur kalkulasi poin reward secara dinamis menggunakan JavaScript murni (Rp 10.000 = 1 Poin) beserta penentuan tier membership (Bronze, Silver, Gold) dan persentase diskon.
3. **Validasi Form Sisi Klien:** Pengecekan input wajib, format email, dan batas minimal karakter password sebelum data pendaftaran dan ulasan disubmit.

## 🛠️ Teknologi yang Digunakan
Proyek ini dibangun sepenuhnya menggunakan teknologi dasar web tanpa *framework* atau *library* pihak ketiga:
* **HTML5:** Struktur semantik halaman web.
* **CSS3:** Tata letak responsif dan penerapan tema warna khusus Kopi Senja (Merah Bata, Krem Hangat, Putih, dan Cokelat Espresso).
* **Vanilla JavaScript:** Logika DOM manipulation, validasi form, dan implementasi AJAX murni.

## 🚀 Cara Menjalankan Proyek
Aplikasi ini berjalan secara lokal di *browser* (Client-side) tanpa memerlukan instalasi server khusus (seperti Node.js atau XAMPP).
1. *Clone* repositori ini atau unduh sebagai file `.zip`.
2. Ekstrak folder `PWUTS_A03_25091397011`.
3. Buka file `index.html` menggunakan *browser* pilihan Anda (Chrome, Firefox, Safari, atau Edge).

## 📁 Struktur Direktori
```text
PWUTS_A03_25091397011/
├── index.html                  # Halaman utama dan penampung navigasi
├── style.css                   # Berkas styling utama
├── script.js                   # Berkas logika JavaScript (AJAX, Kalkulasi, Validasi)
├── simulasi_poin_member.html   # Komponen halaman simulasi poin
└── form_pendaftaran_member.html# Komponen halaman pendaftaran dan ulasan


