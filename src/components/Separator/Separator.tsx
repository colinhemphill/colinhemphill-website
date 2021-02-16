import classnames from 'classnames';
import React from 'react';
import styles from './Separator.module.scss';

interface Props {
  background: Color;
  direction: 'down' | 'up';
  foreground: Color;
}

const Curve = (props: Props) => {
  const { direction, foreground } = props;

  const pathClasses = classnames({
    [styles.foregroundAlternate]: foreground === 'alternate',
    [styles.foregroundDark]: foreground === 'dark',
    [styles.foregroundPrimary]: foreground === 'primary',
    [styles.foregroundStandard]: foreground === 'standard',
  });

  if (direction === 'down') {
    return (
      <path
        className={pathClasses}
        d="M2400,0C1920,66.7,1200,66.7,0,0L2400,0z"
      />
    );
  } else {
    return (
      <path className={pathClasses} d="M0,50c480-66.7,1200-66.7,2400,0H0z" />
    );
  }
};

const Separator = (props: Props): JSX.Element => {
  const { background, direction, foreground } = props;
  const separatorClass = classnames('d-block', {
    [styles.backgroundAlternate]: background === 'alternate',
    [styles.backgroundDark]: background === 'dark',
    [styles.backgroundPrimary]: background === 'primary',
    [styles.backgroundStandard]: background === 'standard',
  });

  return (
    <svg
      className={separatorClass}
      width="100%"
      height="20"
      viewBox="0 0 2400 50"
      preserveAspectRatio="none"
    >
      <Curve
        background={background}
        direction={direction}
        foreground={foreground}
      />
    </svg>
  );
};

export default Separator;
