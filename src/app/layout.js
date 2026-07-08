import { Geist, Geist_Mono, Oxanium } from "next/font/google";

import "./globals.css";

const oxanium = Oxanium({
  variable: "--font-oxium",
  subsets: ["latin"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "86 Works | Creative Agency Indonesia",
  description: "86 Works adalah creative agency di Indonesia yang membantu brand membangun identitas visual, strategi kreatif, dan digital campaign yang berdampak.",
  keywords: ["86Works", "86 Works Agency", "86 Works", "creative agency Indonesia", "digital agency", "branding agency", "social management agency indonesia"],
  openGraph: {
    title: "86 Works | Creative Agency Indonesia",
    description: "Creative agency Indonesia yang membantu brand tumbuh lewat strategi kreatif dan digital.",
    url: "https://86works.vercel.app",
    siteName: "86 Works",
    images: ["/images/logo.svg"],
    locale: "id_ID",
    type: "website",
  },
  metadataBase: new URL("https://86works.vercel.app"),
  verification: {
    google: "8psOEjnQphEuKIWQEJU2XQPtsHXY-C65zOWlV1ah8Xo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${oxanium.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
