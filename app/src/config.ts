import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
  title: "Abdo .AlGhoul",
  subtitle:
    "A developer's blog that's meant to be creative, inspirational, educational, and to list my portfolio projects.",
  lang: "en", // 'en', 'ar'
  themeColor: {
    hue: 270, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false, // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: "assets/images/banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false, // Display the credit text of the banner image
      text: "", // Credit text to be displayed
      url: "", // (Optional) URL link to the original artwork or artist's page
    },
  },
  toc: {
    enable: true, // Display the table of contents on the right side of the post
    depth: 2, // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [
    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ],
};

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.Projects,
    LinkPreset.About,
    {
      name: "GitHub",
      url: "https://github.com/Al-Ghoul/blog", // Internal links should not include the base path, as it is automatically added
      external: true, // Show an external link icon and will open in a new tab
    },
  ],
};

export const profileConfig: ProfileConfig = {
  avatar: "https://avatars.githubusercontent.com/u/29547307", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: "Abdo .AlGhoul",
  bio: "مادام في القلبِ نية و في العقل رأيٌ و في النفس عزمٌ و في الوقتِ متسع، فكل شئٍ يمكن تداركهْ.",
  links: [
    {
      name: "GitHub",
      icon: "fa6-brands:github",
      url: "https://github.com/Al-Ghoul",
    },
  ],
};

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: "CC BY-NC-SA 4.0",
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
