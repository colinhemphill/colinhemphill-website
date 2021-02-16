import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Navbar from '../components/Navbar/Navbar';
import PageHead from '../components/PageHead';
import Section from '../components/Section/Section';

const Page = (): JSX.Element => {
  return (
    <>
      <PageHead pageTitle="404: Page Not Found" />

      <Navbar />
      <Breadcrumbs currentPage="404" />

      <Section color="standard">
        <div className="text-center">
          <h1>404: Page Not Found</h1>
          <p>The link you tried to visit does not exist.</p>
          <Link href="/">
            <a className="btn btn-primary mt-xxs">
              <FontAwesomeIcon className="me-xxxs" icon={faHome} />
              Home page
            </a>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Page;
