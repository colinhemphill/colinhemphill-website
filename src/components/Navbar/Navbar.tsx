import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { OutboundLink } from 'react-ga';
import { OffcanvasContext } from '../../pages/_app';
import ThemeSwitch from '../Theme/ThemeSwitch';
import styles from './Navbar.module.scss';

interface NavLink {
  href: string;
  targetBlank?: boolean;
  title: string;
}

export const navLinks: NavLink[] = [
  { href: '/blog', title: 'Blog' },
  {
    href: 'https://resume.colinhemphill.com',
    targetBlank: true,
    title: 'Résumé',
  },
];

const Navbar = (): JSX.Element => {
  const { pathname } = useRouter();
  const { isOpen, toggle } = useContext(OffcanvasContext);

  return (
    <nav
      className={classnames(
        'navbar navbar-expand-sm navbar-dark  sticky-top',
        styles.navbar,
      )}
    >
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Colin Hemphill</a>
        </Link>
        <div className="d-sm-none d-flex">
          <button
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            className="btn btn-primary"
            onClick={toggle}
            type="button"
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-lg-xxxs ms-auto text-decoration-underline align-items-center">
            {navLinks.map((link) => {
              const active = pathname.includes(link.href);
              return (
                <li className="nav-item" key={link.href}>
                  <Link href={link.href}>
                    <a
                      aria-current={active ? 'page' : undefined}
                      className={classnames('nav-link px-xxs text-white', {
                        active,
                        'bg-dark rounded': active,
                      })}
                      target={link.targetBlank ? '_blank' : undefined}
                      rel={link.targetBlank ? 'noopener noreferrer' : undefined}
                    >
                      {link.title}
                    </a>
                  </Link>
                </li>
              );
            })}
            <li className="nav-item">
              <OutboundLink
                className="nav-link"
                eventLabel="GitHub repo"
                rel="noopener noreferrer"
                target="_blank"
                to="https://github.com/colinhemphill/colinhemphill-website"
              >
                <span className="visually-hidden">
                  Access the GitHub repository for colinhemphill.com
                </span>
                <FontAwesomeIcon
                  color="white"
                  icon={['fab', 'github']}
                  size="lg"
                />
              </OutboundLink>
            </li>
          </ul>
        </div>

        <div className="d-none d-sm-block ms-xxs">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
