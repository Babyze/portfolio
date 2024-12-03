import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import localFont from "next/font/local";
import Providers from "./components/Providers";
import "./globals.css";
import { Toaster } from "./components/ui/Toast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const brushKing = localFont({
  src: "./fonts/BrushKing-MVVPp.otf",
  variable: "--font-brush-king",
});

const notoSans = Noto_Sans({
  subsets: ["vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  variable: "--font-noto_sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Huynh Anh",
  description: "Welcome to Huynh Anh portofolio",
  metadataBase: new URL("https://huynhanh.dev/"),
  applicationName: "Dang Huynh Anh",
  keywords: [
    "Dang Huynh Anh",
    "portfolio",
    "personal",
    "website",
    "developer",
    "engineer",
    "software",
    "engineer",
    "backend developer",
    "frontend developer",
  ],
  openGraph: {
    siteName: "Dang Huynh Anh",
    title: "Dang Huynh Anh",
    description: "Welcome to my personal portfolio!",
    type: "website",
    images: ["/assets/images/preview-portfolio.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dang Huynh Anh",
    description: "Welcome to my personal portfolio!",
    images: ["/assets/images/preview-portfolio.png"],
  },
  icons: [
    {
      rel: "icon",
      sizes: "256x256",
      url: "/favicon/favicon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${notoSans.variable} ${brushKing.variable} antialiased text-foreground bg-background`}
      >
        <Providers>
          <Toaster />
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
