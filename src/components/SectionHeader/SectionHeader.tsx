import { faCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import darkModeTheme from '../../styles/themeDark.module.scss';
import lightModeTheme from '../../styles/themeLight.module.scss';
import { ThemeContext } from '../Theme/ThemeContext';

interface Props {
  icon: IconDefinition;
  text: string;
}

const SectionHeader = (props: Props): JSX.Element => {
  const { darkMode } = useContext(ThemeContext);
  const { icon, text } = props;

  return (
    <h2>
      <span className="fa-layers fa-fw me-xxxs">
        <FontAwesomeIcon icon={faCircle} />
        <FontAwesomeIcon
          color={darkMode ? lightModeTheme.text : darkModeTheme.text}
          icon={icon}
          transform="shrink-8"
        />
      </span>
      {text}
    </h2>
  );
};

export default SectionHeader;
