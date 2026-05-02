import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";
import { seo, site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seo.title,
    template: "%s | Tigran Atoyan"
  },
  description: seo.description,
  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Tigran Atoyan AI Systems & Operations Builder proof portal"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: false,
    follow: false
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ink text-slate-100 antialiased">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(141,220,255,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(183,255,122,0.10),transparent_34%)]" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
