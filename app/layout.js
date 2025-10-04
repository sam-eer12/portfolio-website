import { Outfit,Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: '--font-Outfit',
  subsets: ["latin"], weight:["400","500","600","700"],
});

const ovo = Ovo({
  subsets: ["latin"], weight:["400"],
  variable: '--font-Ovo',
});

export const metadata = {
  title: "Portfolio - Sameer Gupta",
  description: "Portfolio website of Sameer Gupta - Instrumentation and Control Engineer NSUT 2028 Batch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.variable} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
