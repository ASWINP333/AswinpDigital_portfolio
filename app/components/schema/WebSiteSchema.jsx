import Script from "next/script";

export default function WebSiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://theaswinp.in/#website",
    url: "https://theaswinp.in",
    name: "Aswin P – Digital Marketing Expert in Malappuram",
    publisher: {
      "@id": "https://theaswinp.in/#organization",
    },
    inLanguage: "en-IN",
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
