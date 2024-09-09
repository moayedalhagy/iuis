import type { Metadata } from "next";

import { Alexandria } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
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
