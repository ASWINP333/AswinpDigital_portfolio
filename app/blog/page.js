import BlogPageClient from "./BlogPageClient";

export const metadata = {
  title: "Blogs — Digital Marketing Insights | Aswin P",
  description:
    "Read expert insights on digital marketing, SEO, web development and business growth strategies in Malappuram by Aswin P.",
  alternates: {
    canonical: "https://theaswinp.in/blog",
  },
  openGraph: {
    title: "Blogs — Digital Marketing Insights | Aswin P",
    description:
      "Latest articles on digital marketing, SEO, and business growth in Malappuram.",
    url: "https://theaswinp.in/blog",
    type: "website",
  },
};

export default function Page() {
  return <BlogPageClient />;
}
