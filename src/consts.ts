// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TAB = "AlGhoul";
export const SITE_TITLE = "AlGhoul's Blog";
export const SITE_DESCRIPTION =
  "A personal blog, for projects, translated content, books and the new things I'm learning.";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "AlGhoul";
export const USER_AVATAR = "/images/profile.jpeg";

// Server and transition settings
export const SERVER_URL = "https://alghoul.dev/";

// Some informative text on the site
export const infoTest = {
  tag: "Tag: ",
  noTag: "untagged",
  tagCard: "Tags",
  tagPage: "Tag - ",
  noCategory: "uncategorized",
  categoryCard: "Categories",
  categoryPage: "Category - ",
  link: "Link: ",
  prevPage: "Recent posts",
  nextPage: "Older posts",
};

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "Home", href: "/", svg: "home", target: "_self" }, // Home page
  { id: "resume", text: "Resume", href: "/resume.pdf", svg: "resume", target: "_self" }, // Home page
  { id: "about", text: "About", href: "/about", svg: "about", target: "_self" }, // About page
  {
    id: "blog",
    text: "Blogs",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "All",
        href: "/blog",
        svg: "post",
        target: "_self",
      }, // All blog
    ],
  }, // Blog page with sub-items
  {
    id: "projects",
    text: "Projects",
    href: "/projects",
    svg: "project",
    target: "_self",
  }, // Projects page
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://ko-fi.com/alghoul",
    ariaLabel: "Support my work",
    title: "Support my work",
    svg: "kofi",
  },
  {
    href: "https://www.linkedin.com/in/abdo-alghoul/",
    ariaLabel: "LinkedIn",
    title: "LinkedIn",
    svg:"linkedin",
  },
  {
    href: "https://github.com/Al-Ghoul",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "rss",
  },
];
