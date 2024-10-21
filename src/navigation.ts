import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '#about',
    },
    {
      text: 'About',
      href: '#about',
    },
    {
      text: 'Services',
      href: '#services',
    },
    {
      text: 'Portfolio',
      href: '#portfolio',
    },
    {
      text: 'Contact',
      href: '#contact',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Links',
      links: [
        { text: 'About', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    Design by Me and Hand-Coded by <a class="text-blue-600 underline dark:text-muted" href="https://lightlaunchstudio.com/">LightLaunchStudio</a> · All rights reserved.
  `,
};
