"use client";
import Script from "next/script";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Aswin P",
    url: "https://theaswinp.in",
    image: "https://theaswinp.in/logo_dark.webp",
    description:
      "Digital marketing expert in Malappuram specializing in SEO, PPC, social media marketing and web development.",
    sameAs: [
      "https://www.facebook.com/share/19pLrpw9HF/?mibextid=wwXIfr",
      "https://www.instagram.com/aswinp.in?igsh=MWZobXhwdmpqOGpmOA==",
      "http://www.linkedin.com/in/aswinpoonthottathil",
      "https://github.com/ASWINP333/",
    ],
    jobTitle: "Digital Marketing Expert in Malappuram",
    hasOccupation: {
      "@type": "Occupation",
      name: "Digital Marketer",
      description:
        "Provides SEO, PPC, SMM, branding and website development services.",
      skills: ["SEO", "PPC", "Social Media Marketing", "Web Development"],
    },
    worksFor: {
      "@type": "Organization",
      name: "Aswin P Digital Marketing Services",
      url: "https://theaswinp.in",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Malappuram",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "aswinp916@gmail.com",
    },
    areaServed: "Malappuram, Kerala, India",
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
