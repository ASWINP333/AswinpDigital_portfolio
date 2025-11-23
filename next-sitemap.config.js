/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://theaswinp.in",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/thankyou", "/404", "/500"],
};
