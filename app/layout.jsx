import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Julius Matheka Charles | AI Engineer",
  description: "Portfolio of Julius Matheka Charles - AI Engineer, Data Scientist, ML Engineer, and Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}