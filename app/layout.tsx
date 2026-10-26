import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Jejak Pasar Modal — Panduan Dasar & Belajar Membaca Tren Saham',
  description: 'Website edukasi terstruktur untuk masyarakat awam dan investor pemula memahami pasar modal dan tren pergerakan harga saham.',
  openGraph: {
    title: 'Jejak Pasar Modal — Panduan Dasar & Belajar Membaca Tren Saham',
    description: 'Website edukasi terstruktur untuk masyarakat awam dan investor pemula memahami pasar modal dan tren pergerakan harga saham.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jejak Pasar Modal — Panduan Dasar & Belajar Membaca Tren Saham',
    description: 'Website edukasi terstruktur untuk masyarakat awam dan investor pemula memahami pasar modal dan tren pergerakan harga saham.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen bg-[#0c0f14] text-[#e2e8f0] antialiased selection:bg-amber-500/20 selection:text-amber-300" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
