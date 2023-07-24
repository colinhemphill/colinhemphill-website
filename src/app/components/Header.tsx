import NavLink from '@/strum/NavLink';
import { githubLink, navLinks } from '@/utils/nav-links';
import { Github } from 'lucide-react';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header>
      <nav className="container flex items-center justify-between gap-12 py-4 md:py-12">
        <Logo />

        <ul className="hidden flex-1 items-center gap-12 md:flex">
          {navLinks.map((navLink) => (
            <NavLink href={navLink.href} key={navLink.title}>
              {navLink.title}
            </NavLink>
          ))}
        </ul>

        <ul className="hidden md:flex">
          <NavLink href={githubLink}>
            <Github name="GitHub logo" />
            <span className="sr-only">GitHub</span>
          </NavLink>
        </ul>

        <div className="flex self-end md:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
