import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { OutboundLink } from 'react-ga';
import { CMSLink } from '../../_types/CMSLink';
import styles from './Footer.module.scss';

interface Props {
  personalInformation: CMSPersonalInformation<unknown>;
  links: CMSLink[];
}

const Footer = (props: Props): JSX.Element => {
  const { personalInformation, links } = props;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row row-cols-auto gx-xxxs justify-content-center">
          {links.map((link) => (
            <div className="col" key={link.href}>
              <OutboundLink
                className="d-block fa-3x"
                eventLabel={`${personalInformation.given_name} ${personalInformation.family_name} on ${link.title}`}
                rel="noopener noreferrer"
                target="_blank"
                to={link.href}
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
              </OutboundLink>
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
            <OutboundLink
              className="custom-link"
              eventLabel="Next.js website"
              rel="noopener noreferrer"
              target="_blank"
              to="https://nextjs.org/"
            >
              Next.js
            </OutboundLink>{' '}
            and{' '}
            <OutboundLink
              className="custom-link"
              eventLabel="CMS website"
              rel="noopener noreferrer"
              target="_blank"
              to="https://prismic.io"
            >
              Prismic
            </OutboundLink>
            , and deployed on{' '}
            <OutboundLink
              className="custom-link"
              eventLabel="Vercel website"
              rel="noopener noreferrer"
              target="_blank"
              to="https://vercel.com/"
            >
              Vercel
            </OutboundLink>
            .
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
