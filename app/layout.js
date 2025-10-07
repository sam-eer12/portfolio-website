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
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="z89_y2w8b2a0dGcpC0S3hy4ObEPHA1A09Ts5T3aHZEU" />
        <link rel="icon" href="./favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="./favicon.png" />
      </head>
      <body
        className={`${outfit.className} ${ovo.variable} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
