import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { getCMSIntegration } from '../../cms';
import { CMSLink } from '../../_types/CMSLink';
import styles from './Footer.module.scss';

interface Props {
  personalInformation: CMSPersonalInformation<unknown>;
  links: CMSLink[];
}

const Footer = (props: Props): JSX.Element => {
  const { personalInformation, links } = props;
  const CMS = getCMSIntegration();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row row-cols-auto gx-xxxs justify-content-center">
          {links.map((link) => (
            <div className="col" key={link.href}>
              <a
                className="d-block fa-3x"
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="visually-hidden">
                  {personalInformation.given_name} on {link.title}
                </span>
                <span className="fa-layers fa-fw">
                  <FontAwesomeIcon icon={faCircle} />
                  <FontAwesomeIcon
                    aria-hidden
                    color="white"
                    icon={['fab', link.icon_name]}
                    transform="shrink-8"
                  />
                </span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-xxs">
          Copyright ©{new Date().getFullYear()} {personalInformation.given_name}{' '}
          {personalInformation.family_name}
        </div>

        <div className="mt-xxxs">
          <small>
            This site was built with{' '}
            <a
              className={styles.footerLink}
              href="https://nextjs.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Next.js
            </a>{' '}
            and{' '}
            <a
              className={styles.footerLink}
              href={CMS.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {CMS.name}
            </a>
            , and deployed on{' '}
            <a
              className={styles.footerLink}
              href="https://vercel.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Vercel
            </a>
            .
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
