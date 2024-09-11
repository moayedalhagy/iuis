import type { Metadata } from "next";

import { Alexandria } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import type { Viewport } from "next";
import "../styles/globals.css";
import "react-toastify/ReactToastify.min.css";

const alexandria = Alexandria({
  weight: ["400", "700"],
  subsets: ["arabic", "latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export const metadata: Metadata = {
  title: "IUIS Unversity",
  description:
    "الجامعة الإسلامية في سوريا تقدم تعليمًا عالي الجودة في مختلف المجالات الأكاديمية والدينية.",
  keywords:
    "IUIS, Islamic University, الجامعة الإسلامية, Syria, education , في سوريا",
  authors: { name: "IUIS Unversity" },
  robots: "index, follow",
  metadataBase: new URL("https://iuis.university"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      ar: "/ar",
    },
  },
  openGraph: {
    title: "IUIS University",
    description:
      "الجامعة الإسلامية في سوريا تقدم تعليمًا عالي الجودة في مختلف المجالات الأكاديمية والدينية.",
    url: "https://iuis.university",
    type: "website",
    images: ["/images/seo_logo.png"],
  },
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${alexandria.className}   bg-gray`}>
        <Header />

        {children}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Footer />
      </body>
    </html>
  );
}
