# Jejak Pasar Modal

Website edukasi untuk masyarakat umum dan pemula yang ingin memahami dasar-dasar pasar modal serta cara membaca tren harga saham. Dibangun dengan Next.js 15 App Router, React 19, dan Tailwind CSS v4.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React

## Menjalankan secara lokal

**Prasyarat:** Node.js 22.x dan npm.

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm start
```

Pemeriksaan tambahan:

```bash
npm run lint
npx tsc --noEmit
```

## Deploy ke Vercel

Repo ini sudah disiapkan untuk deploy langsung ke Vercel.

1. Buka [vercel.com/new](https://vercel.com/new).
2. Import repository `kinggsobadisohaa/jejak-pasar-modal`.
3. Framework preset: **Next.js** (terdeteksi otomatis).
4. Build command: `npm run build` (default).
5. Output directory: `.next` (default).
6. Environment variables: **tidak ada yang wajib diisi**.

Atau gunakan tombol berikut:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkinggsobadisohaa%2Fjejak-pasar-modal)

Catatan konfigurasi:

- `next.config.ts` hanya memakai `output: 'standalone'` saat **bukan** di Vercel. Di Vercel, builder Next.js bawaan yang digunakan.
- `package.json` menentukan Node.js `22.x` agar versi runtime konsisten.
- Tidak perlu `vercel.json`; Vercel mendeteksi Next.js secara otomatis.

## Environment variables

Saat ini aplikasi **tidak membutuhkan environment variable** untuk build maupun deploy. Formulir pertanyaan adalah demo UI tanpa backend, dan tidak ada panggilan Gemini/AI di kode.

`.env.example` hanya menyimpan placeholder untuk kompatibilitas AI Studio. Jangan mengisi nilai rahasia ke file yang di-commit.

## Catatan produk

- Seluruh konten berbahasa Indonesia dan berada dalam ruang lingkup edukasi.
- Tidak ada sinyal beli/jual, prediksi harga, atau janji keuntungan.
- Formulir pertanyaan masih berupa demo; tidak mengirim data ke server.
- Disclaimer edukasi wajib tetap tampil di bagian footer.

## Struktur singkat

```text
app/          Halaman utama, layout, dan metadata
components/   Navbar, hero, modul, latihan, glosarium, footer
lib/          Data kurikulum dan renderer konten
public/       Aset publik
```
