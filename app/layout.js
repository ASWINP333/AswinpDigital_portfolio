import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const OutfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const OvoFont = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  metadataBase: new URL("https://theaswinp.in"),

  title: {
    default: "Digital Marketing Expert in Malappuram — Aswin P",
    template: "%s | Aswin P",
  },

  description:
    "Digital marketing expert in Malappuram offering SEO, social media, PPC and web development services.",

  keywords: [
    "digital marketing expert in malappuram",
    "web developer malappuram",
    "seo specialist malappuram",
    "digital marketing malappuram",
    "aswin p",
  ],

  openGraph: {
    title: "Digital Marketing Expert in Malappuram — Aswin P",
    description:
      "Digital marketing expert in Malappuram offering SEO, social media, PPC and web development services.",
    url: "https://theaswinp.in",
    siteName: "Aswin P - Digital Marketing",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Expert in Malappuram",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Expert in Malappuram — Aswin P",
    description:
      "SEO, social media marketing, PPC and web development in Malappuram.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://theaswinp.in",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${OutfitFont.className} ${OvoFont.className} antialiased leading-8
        overflow-x-hidden dark:bg-darkTheme
        dark:text-white`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
