import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useRef } from 'react';
import { OffcanvasContext } from '../../pages/_app';
import { navLinks } from './Navbar';
import styles from './Offcanvas.module.scss';

const defaultSpringOptions = {
  damping: 20,
  stiffness: 300,
  type: 'spring',
  velocity: 2,
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            className={styles.overlay}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={toggle}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      <div onKeyDown={onKeyDown} ref={menuRef} tabIndex={isOpen ? 0 : -1}>
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className={styles.offcanvas}
              exit={{ opacity: 0, scale: 0.5 }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{
                opacity: { duration: 0.3, ease: 'easeInOut', type: 'tween' },
                scale: defaultSpringOptions,
              }}
            >
              <div className={styles.navHeader}>
                <div className="d-flex justify-content-end" onClick={toggle}>
                  <button
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
                    <a
                      className="nav-link"
                      href="https://github.com/colinhemphill/colinhemphill-website"
                      onClick={toggle}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub Repo
                      <FontAwesomeIcon className="ms-xxxs" icon={faGithub} />
                    </a>
                  </li>
                </ul>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

        <style jsx global>{`
          body {
            overflow-y: ${isOpen ? 'hidden' : 'auto'};
          }
        `}</style>
      </div>
    </>
  );
};

export default Offcanvas;
