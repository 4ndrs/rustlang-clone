import "./globals.css";
import { Fira_Sans } from "next/font/google";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

import styles from "./layout.module.css";

const fira = Fira_Sans({ subsets: ["latin"], weight: ["400", "600", "800"] });

export const metadata = {
  title: "Rust Programming Language",
  description: "This is a clone of rust-lang.org made for learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fira.className} ${styles.container}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
