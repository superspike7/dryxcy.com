import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '#hero',
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
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/grrrrrgeous_dryxcy' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=100064760677996' },
  ],
  footNote: `
    Design by Me and Hand-Coded by <a class="text-primary underline dark:text-muted" href="https://lightlaunchstudio.com/">LightLaunchStudio</a> · All rights reserved.
  `,
};
