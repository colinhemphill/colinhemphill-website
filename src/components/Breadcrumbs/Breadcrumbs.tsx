import Link from 'next/link';
import React from 'react';

interface Props {
  currentPage: string;
  previousPage?: { href: string; title: string };
}

const Breadcrumbs = (props: Props): JSX.Element => {
  const { currentPage, previousPage } = props;

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb mb-xs">
        <li className="breadcrumb-item">
          <Link href="/">
            <a>colinhemphill.com</a>
          </Link>
        </li>
        {previousPage && (
          <li className="breadcrumb-item">
            <Link href={previousPage.href}>
              <a>{previousPage.title}</a>
            </Link>
          </li>
        )}
        <li className="breadcrumb-item active" aria-current="page">
          {currentPage}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
