import Script from "next/script";

export default function PersonSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://theaswinp.in/#person",
    name: "Aswin P",
    url: "https://theaswinp.in",
    image: "https://theaswinp.in/logo_dark.webp",
    description:
      "Digital marketing expert in Malappuram specializing in SEO, PPC, social media marketing and web development.",
    jobTitle: "Digital Marketing Expert in Malappuram",

    knowsAbout: [
      "Search Engine Optimization",
      "Google Ads",
      "Meta Ads",
      "Social Media Marketing",
      "Web Development",
      "Performance Marketing",
    ],

    sameAs: [
      "https://www.facebook.com/share/19pLrpw9HF/?mibextid=wwXIfr",
      "https://www.instagram.com/aswinp.in?igsh=MWZobXhwdmpqOGpmOA==",
      "http://www.linkedin.com/in/aswinpoonthottathil",
      "https://github.com/ASWINP333/",
    ],

    worksFor: {
      "@type": "Organization",
      "@id": "https://theaswinp.in/#organization",
    },

    address: {
      "@type": "PostalAddress",
      addressLocality: "Malappuram",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },

    areaServed: "Malappuram, Kerala, India",

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://theaswinp.in",
    },
  };

  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
