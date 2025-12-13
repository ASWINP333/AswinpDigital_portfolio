import Script from "next/script";

export default function HomeServicesSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Marketing Services in Malappuram",
    provider: {
      "@type": "Organization",
      "@id": "https://theaswinp.in/#organization",
    },
    areaServed: "Malappuram, Kerala, India",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "PPC Advertising",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Marketing",
          },
        },
        {
          "@type": "Service",
            name: "Web Design & Development",
        },
        {
          "@type": "Service",
            name: "Brand Marketing",
        },
      ],
    },
  };

  return (
    <Script
      id="home-services-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
