/** @type {import('next-sitemap').IConfig} */
const { blogs } = require('./common/blog');
module.exports = {
  siteUrl: "https://theaswinp.in",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/thankyou", "/404", "/500"],
    additionalPaths: async (config) => {
    return blogs.map((blog) => ({
      loc: `/blog/${blog.slug}`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    }));
  },
};
