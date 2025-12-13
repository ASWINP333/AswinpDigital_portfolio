import Script from "next/script";

export default function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://theaswinp.in/#organization",
    name: "Aswin P Digital Marketing Services",
    url: "https://theaswinp.in",
    logo: "https://theaswinp.in/logo_dark.webp",

    sameAs: [
       "https://www.facebook.com/share/19pLrpw9HF/?mibextid=wwXIfr",
      "https://www.instagram.com/aswinp.in?igsh=MWZobXhwdmpqOGpmOA==",
      "http://www.linkedin.com/in/aswinpoonthottathil",
      "https://github.com/ASWINP333/",
    ],

    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "aswinp916@gmail.com",
    },

    areaServed: "Kerala, India",
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
