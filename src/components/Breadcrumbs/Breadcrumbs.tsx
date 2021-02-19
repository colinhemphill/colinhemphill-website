import classnames from 'classnames';
import Link from 'next/link';
import React from 'react';
import styles from './Breadcrumbs.module.scss';

interface Props {
  currentPage: string;
  previousPage?: { href: string; title: string };
}

const Breadcrumbs = (props: Props): JSX.Element => {
  const { currentPage, previousPage } = props;

  return (
    <div className="container mt-xxs">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-xs">
          <li className={classnames('breadcrumb-item', styles.breadcrumbItem)}>
            <Link href="/">
              <a>colinhemphill.com</a>
            </Link>
          </li>
          {previousPage && (
            <li
              className={classnames('breadcrumb-item', styles.breadcrumbItem)}
            >
              <Link href={previousPage.href}>
                <a>{previousPage.title}</a>
              </Link>
            </li>
          )}
          <li
            className={classnames(
              'breadcrumb-item',
              styles.breadcrumbItemActive,
            )}
            aria-current="page"
          >
            {currentPage}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
