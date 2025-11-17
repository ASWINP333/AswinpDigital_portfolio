"use client";
import Script from "next/script";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Aswin P - Digital Marketing Expert",
    url: "https://theaswinp.in",
    description:
      "Digital marketing expert in Malappuram offering SEO, PPC, web development and social media management.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Malappuram",
      addressRegion: "Kerala",
      addressCountry: "IN"
    },
    areaServed: "Malappuram",
    sameAs: [
      "https://www.instagram.com/aswinp.in?igsh=MWZobXhwdmpqOGpmOA==",
      "https://www.facebook.com/share/19pLrpw9HF/?mibextid=wwXIfr",
      "https://www.linkedin.com/in/aswinpoonthottathil",
      "https://github.com/ASWINP333/"
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
