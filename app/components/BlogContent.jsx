"use client";

export default function BlogContent({ html }) {
  return (
    <article
      className="
        prose prose-lg max-w-none
        dark:prose-invert
        prose-headings:font-semibold
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
        prose-p:text-gray-700 dark:prose-p:text-gray-300
        prose-p:leading-relaxed
        prose-ul:list-disc prose-ul:pl-6
        prose-li:my-1
        prose-hr:my-10
        prose-img:rounded-xl prose-img:shadow
      "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
