'use client';

import Button from '@/strum/Button';
import { githubLink, navLinks } from '@/utils/nav-links';
import { Github, Home, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import NavLink from './NavLink';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);

    const body = document.body;
    if (newState === true) {
      body.setAttribute('data-menu-open', 'true');
    } else {
      body.removeAttribute('data-menu-open');
    }
  };

  return (
    <>
      <Button className="z-20 h-8 w-8 rounded-full p-0" onClick={toggleMenu}>
        <span className="sr-only">Toggle nav menu</span>
        {isOpen && <X name="Close" size="1em" />}
        {!isOpen && <Menu name="Menu" size="1em" />}
      </Button>

      {/* overlay */}
      <div
        className={twMerge(
          'fixed left-0 top-0 z-10 h-full w-full bg-neutral-0 transition-opacity duration-300',
          isOpen ? 'opacity-95' : 'pointer-events-none opacity-0',
        )}
        onClick={toggleMenu}
      />

      <nav
        className={twMerge(
          'pointer absolute left-0 top-0 z-10 max-h-full w-full overflow-y-auto bg-neutral-1 px-10 py-24 shadow-lg transition-all duration-500',
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-full opacity-0',
        )}
        role="navigation"
      >
        <ul className="flex flex-col gap-4">
          <NavLink href="/" onClick={toggleMenu} tabIndex={isOpen ? 0 : -1}>
            <div className="flex items-center gap-2">
              <Home name="Home" />
              Home
            </div>
          </NavLink>
          {navLinks.map((navLink) => (
            <NavLink
              href={navLink.href}
              onClick={toggleMenu}
              key={navLink.title}
              tabIndex={isOpen ? 0 : -1}
            >
              <div className="flex items-center gap-2">
                <navLink.icon name={navLink.title} />
                {navLink.title}
              </div>
            </NavLink>
          ))}

          <NavLink
            href={githubLink}
            onClick={toggleMenu}
            tabIndex={isOpen ? 0 : -1}
          >
            <div className="flex items-center gap-2">
              <Github name="GitHub" />
              GitHub
            </div>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}
