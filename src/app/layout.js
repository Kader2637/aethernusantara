import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata = {
  title: "AETHER CODE | IT Community & Premium Creative Services",
  description: "Ekosistem IT & Agensi Kreatif UNMER. Solusi modern untuk Web Development, UI/UX Design, Video Editing, dan Marketplace Template Premium.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={jakarta.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}