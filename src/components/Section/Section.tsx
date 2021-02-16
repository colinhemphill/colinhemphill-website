import React, { ReactNode } from 'react';
import styles from './Section.module.scss';

interface Props {
  children?: ReactNode;
  color?: Background;
  pdf?: boolean;
}

const Section = (props: Props): JSX.Element => {
  const { children, color } = props;

  const sectionClass =
    color === 'standard' ? styles.section : styles.sectionAlternate;

  return (
    <section className={`${sectionClass} py-sm`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
