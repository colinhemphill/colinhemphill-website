import { Contact, LucideIcon, Rss } from 'lucide-react';

interface NavLink {
  title: string;
  href: string;
  icon: LucideIcon;
}

export const navLinks: NavLink[] = [
  {
    title: 'Blog',
    href: '/blog',
    icon: Rss,
  },
  {
    title: 'Résumé',
    href: 'https://resume.colinhemphill.com/',
    icon: Contact,
  },
];

export const githubLink =
  'https://github.com/colinhemphill/colinhemphill-website';
