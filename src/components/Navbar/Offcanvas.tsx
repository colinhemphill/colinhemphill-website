import { faExternalLinkAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useRef } from 'react';
import { OutboundLink } from 'react-ga';
import { Transition } from 'react-transition-group';
import { OffcanvasContext } from '../../pages/_app';
import { navLinks } from './Navbar';
import styles from './Offcanvas.module.scss';

const duration = 400;

const overlayDefaultStyle = {
  opacity: 0,
  transition: `opacity ${duration}ms ease-in-out`,
  zIndex: -1,
};

const defaultStyle = {
  opacity: 0,
  transform: 'scale(0.5)',
  transition: `opacity ${duration}ms cubic-bezier(0.65, 0, 0.35, 1),
    transform ${duration}ms cubic-bezier(0.3, 1.5, 0.65, 1)`,
};

const overlayTransitionStyles = {
  entered: { opacity: 1, zIndex: 2000 },
  entering: { opacity: 1, zIndex: 2000 },
  exited: { opacity: 0 },
  exiting: { opacity: 0 },
};

const transitionStyles = {
  entered: { opacity: 1, transform: 'scale(1.0)' },
  entering: { opacity: 1, transform: 'scale(1.0)' },
  exited: { opacity: 0, transform: 'scale(0.5)' },
  exiting: { opacity: 0, transform: 'scale(0.5)' },
};

const Offcanvas = (): JSX.Element => {
  const { pathname } = useRouter();
  const { isOpen, toggle } = useContext(OffcanvasContext);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      menuRef.current.focus();
    }
  }, [isOpen]);

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      toggle();
    }
  };

  return (
    <>
      <Transition in={isOpen} timeout={duration} unmountOnExit>
        {(state) => (
          <div
            className={styles.overlay}
            style={{
              ...overlayDefaultStyle,
              ...overlayTransitionStyles[state],
            }}
          />
        )}
      </Transition>

      <Transition in={isOpen} timeout={duration} unmountOnExit>
        {(state) => (
          <div onKeyDown={onKeyDown} ref={menuRef} tabIndex={isOpen ? 0 : -1}>
            <nav
              className={styles.offcanvas}
              style={{ ...defaultStyle, ...transitionStyles[state] }}
            >
              <div className={styles.navHeader}>
                <div className="d-flex justify-content-end" onClick={toggle}>
                  <button
                    aria-label="Close"
                    className="btn btn-primary rounded-circle"
                    onClick={toggle}
                    type="button"
                  >
                    <FontAwesomeIcon color="white" icon={faTimes} size="lg" />
                  </button>
                </div>
              </div>
              <div className="container-fluid overflow-auto py-xs">
                <ul className="nav nav-pills nav-fill flex-column">
                  <li className="nav-item">
                    <Link href="/">
                      <a
                        className={classnames('nav-link', {
                          active: pathname === '/',
                          'bg-dark rounded': pathname === '/',
                        })}
                        onClick={toggle}
                      >
                        Home
                      </a>
                    </Link>
                  </li>
                  {navLinks.map((link) => {
                    const active = pathname.includes(link.href);
                    return (
                      <li className="nav-item" key={link.href}>
                        <Link href={link.href}>
                          <a
                            aria-current={active ? 'page' : undefined}
                            className={classnames('nav-link', {
                              active,
                              'bg-dark rounded': active,
                            })}
                            onClick={toggle}
                            target={link.targetBlank ? '_blank' : undefined}
                            rel={
                              link.targetBlank
                                ? 'noopener noreferrer'
                                : undefined
                            }
                          >
                            {link.title}
                            {link.targetBlank && (
                              <FontAwesomeIcon
                                className="ms-xxxs"
                                icon={faExternalLinkAlt}
                              />
                            )}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                  <li className="nav-item">
                    <OutboundLink
                      className="nav-link"
                      eventLabel="GitHub repo"
                      onClick={toggle}
                      rel="noopener noreferrer"
                      target="_blank"
                      to="https://github.com/colinhemphill/colinhemphill-website"
                    >
                      GitHub Repo
                      <FontAwesomeIcon
                        className="ms-xxxs"
                        icon={['fab', 'github']}
                      />
                    </OutboundLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        )}
      </Transition>

      <style jsx global>{`
        body {
          overflow-y: ${isOpen ? 'hidden' : 'auto'};
        }
      `}</style>
    </>
  );
};

export default Offcanvas;
