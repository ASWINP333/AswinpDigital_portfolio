import Script from "next/script";

export default function BlogSchema({ blog }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    image: `https://theaswinp.in${blog.image}`,
    author: {
      "@type": "Person",
      "@id": "https://theaswinp.in/#person",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://theaswinp.in/#organization",
    },
    datePublished: blog.date,
    dateModified: blog.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://theaswinp.in/blog/${blog.slug}`,
    },
  };

  return (
    <Script
      id="blog-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
