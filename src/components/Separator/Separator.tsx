import classnames from 'classnames';
import React from 'react';
import styles from './Separator.module.scss';

type Color = 'dark' | 'light' | 'primary' | 'white';

interface Props {
  background: Color;
  direction: 'down' | 'up';
  foreground: Color;
}

const Curve = (props: Props) => {
  const { direction, foreground } = props;

  const pathClasses = classnames({
    [styles.foregroundDark]: foreground === 'dark',
    [styles.foregroundLight]: foreground === 'light',
    [styles.foregroundPrimary]: foreground === 'primary',
    [styles.foregroundWhite]: foreground === 'white',
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
    [styles.backgroundDark]: background === 'dark',
    [styles.backgroundLight]: background === 'light',
    [styles.backgroundPrimary]: background === 'primary',
    [styles.backgroundWhite]: background === 'white',
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
