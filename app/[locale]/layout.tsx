import type { Metadata } from "next";

import { Alexandria } from "next/font/google";
import Header from "../components/Sections/Header";
import Footer from "../components/Sections/Footer";
import "../../styles/globals.css";

const alexandria = Alexandria({
  weight: ["400", "700"],
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "IUIS Unversity",
  description: "الجامعة الإسلامية في سوريا",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${alexandria.className} bg-gray`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
