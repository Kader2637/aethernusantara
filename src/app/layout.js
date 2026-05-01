import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: {
    default: "AETHER NUSANTARA | Beyond Code, Beyond Creation",
    template: "%s | AETHER NUSANTARA"
  },
  description: "Ekosistem Inovasi Digital. Kami meramu baris kode menjadi mahakarya visual. Spesialis Web Dev, UI/UX Design, dan Video Production.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "AETHER NUSANTARA | Beyond Code, Beyond Creation",
    description: "Dimana logika bertemu dengan estetika. Bangun visi digital Anda bersama kami.",
    url: "http://aethernusantara.web.id/",
    siteName: "AETHER NUSANTARA",
    images: [{ url: "/logo.png", width: 800, height: 800 }],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aether Nusantara",
    "url": "https://aethernusantara.web.id",
    "logo": "https://aethernusantara.web.id/logo.png",
    "description": "Ekosistem Inovasi Digital. Kami meramu baris kode menjadi mahakarya visual. Spesialis Web Dev, UI/UX Design, dan Video Production.",
    "founder": {
      "@type": "Person",
      "name": "Abdul Kader",
      "jobTitle": "Fullstack Dev & Arsitek Utama (Owner)"
    },
    "founder": [
      {
        "@type": "Person",
        "name": "Ezequiel A.",
        "jobTitle": "Junior Dev (Owner)"
      },
      {
        "@type": "Person",
        "name": "Rio Andhika",
        "jobTitle": "UI/UX & Frontend (Owner)"
      },
      {
        "@type": "Person",
        "name": "Viktorinus D.",
        "jobTitle": "Marketing & Admin (Owner)"
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development",
          "description": "Undangan Digital, Landing Page, Web Portfolio, Company Profile, Web Katalog, Blog & Artikel, E-Commerce, Sistem Reservasi, Web App Dashboard"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UI/UX Design",
          "description": "Jasa Desain UI/UX & Interaksi Modern"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Video Production",
          "description": "Jasa Video Production & Editing Cinematic"
        }
      }
    ]
  };

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jakarta.className} antialiased bg-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}