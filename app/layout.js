import { Outfit,Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  
  subsets: ["latin"], weight:["400","500","600","700"],
});

const ovo = Ovo({

  subsets: ["latin"], weight:["400"],
});

export const metadata = {
  title: "Portfolio - Sameer Gupta",
  description: "Portfolio website of Sameer Gupta - Instrumentation and Control Engineer NSUT 2028 Batch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
