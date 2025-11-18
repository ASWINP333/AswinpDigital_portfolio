import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import ogimage from "../assets/DigitalMarketingExpertInMalappuram-Aswinp.webp";

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
    "seo expert malappuram",
    "social media marketing malappuram",
    "ppc services malappuram",
    "performance marketing malappuram",
    "digital marketing services kerala",
    "aswin p digital marketing",
    "meta ads expert malappuram",
    "google ads expert malappuram",
    "content marketing malappuram",
    "email marketing malappuram",
    "online marketing malappuram",
    "digital marketing consultant malappuram",
  ],

  openGraph: {
    title: "Digital Marketing Expert in Malappuram — Aswin P",
    description:
      "Digital marketing expert in Malappuram offering SEO, social media, PPC, performance marketing and web development services.",
    url: "https://theaswinp.in",
    siteName: "Aswin P - Digital Marketing",
    type: "website",
    images: [
      {
        url: "https://theaswinp.in/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Expert in Malappuram — Aswin P",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Expert in Malappuram — Aswin P",
    description:
      "SEO, social media marketing, PPC, performance marketing and web development in Malappuram.",
    images: ["https://theaswinp.in/og-image.webp"],
  },

  alternates: {
    canonical: "https://theaswinp.in",
  },
};

