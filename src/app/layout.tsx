import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FooterMobile from "@/components/Footer/FooterMobile/FooterMobile";

import "./globals.css";

export const metadata = {
  title: "Green Onyx | Ландшафтний Дизайн Київ",
  description: "Ландшафтний Дизайн Київ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <FooterMobile />
      </body>
    </html>
  );
}
