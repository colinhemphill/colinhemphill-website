import React, { useContext } from 'react';
import darkModeTheme from '../../styles/themeDark.module.scss';
import lightModeTheme from '../../styles/themeLight.module.scss';
import { ThemeContext } from './ThemeContext';

const width = 80;
const height = 35;
const bubbleSize = Math.round(0.8 * height);

const ThemeSwitch = (): JSX.Element => {
  const { darkMode, theme, toggleTheme } = useContext(ThemeContext);

  if (!theme) return null;

  const themeVariables = darkMode ? darkModeTheme : lightModeTheme;

  return (
    <div>
      <input
        checked={darkMode}
        className="theme-toggle"
        id="theme-toggle"
        onChange={toggleTheme}
        type="checkbox"
      />
      <label htmlFor="theme-toggle" className="toggle">
        <span className="visually-hidden">Toggle dark theme</span>
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
      </label>

      <style jsx>{`
        #theme-toggle {
          position: absolute;
          left: -99em;
        }
        .toggle {
          cursor: pointer;
          display: inline-block;
          position: relative;
          width: ${width}px;
          height: ${height}px;
          background-color: ${themeVariables.primaryLight};
          border-radius: ${height}px;
          transition: background-color 200ms
            cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }
        .toggle__handler {
          display: inline-block;
          position: relative;
          z-index: 1;
          top: ${(height - bubbleSize) / 2}px;
          left: 6px;
          width: ${bubbleSize}px;
          height: ${bubbleSize}px;
          background-color: #ffcf96;
          border-radius: ${height}px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
          transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
          transform: rotate(-45deg);
        }
        .toggle__handler .crater {
          position: absolute;
          background-color: #e8cda5;
          opacity: 0;
          transition: opacity 200ms ease-in-out;
          border-radius: 100%;
        }
        .toggle__handler .crater--1 {
          top: ${(bubbleSize / 10) * 2}px;
          left: ${(bubbleSize / 10) * 4}px;
          width: 4px;
          height: 4px;
        }
        .toggle__handler .crater--2 {
          top: ${(bubbleSize / 10) * 6}px;
          left: ${(bubbleSize / 10) * 3}px;
          width: 6px;
          height: 6px;
        }
        .toggle__handler .crater--3 {
          top: ${(bubbleSize / 10) * 4}px;
          left: ${(bubbleSize / 10) * 6}px;
          width: 8px;
          height: 8px;
        }
        .star {
          position: absolute;
          background-color: #fff;
          transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
          border-radius: 50%;
        }
        .star--1 {
          top: ${(height / 10) * 3}px;
          left: ${(width / 12) * 6}px;
          z-index: 0;
          width: 30px;
          height: 3px;
        }
        .star--2 {
          top: ${(height / 10) * 5}px;
          left: ${(width / 12) * 4}px;
          z-index: 1;
          width: 30px;
          height: 3px;
        }
        .star--3 {
          top: ${(height / 10) * 7}px;
          left: ${(width / 12) * 6}px;
          z-index: 0;
          width: 30px;
          height: 3px;
        }
        input:checked + .toggle {
          background-color: ${themeVariables.primaryMedium};
        }
        input:checked + .toggle:before {
          color: #749ed7;
        }
        input:checked + .toggle:after {
          color: #fff;
        }
        input:checked + .toggle .toggle__handler {
          background-color: #ffe5b5;
          transform: translate3d(${width - bubbleSize - 12}px, 0, 0) rotate(0);
        }
        input:checked + .toggle .toggle__handler .crater {
          opacity: 1;
        }
        input:checked + .toggle .star--1 {
          width: 2px;
          height: 2px;
          transform: translate3d(-${width / 7}px, 0, 0);
        }
        input:checked + .toggle .star--2 {
          width: 4px;
          height: 4px;
          transform: translate3d(-${width / 7}px, 0, 0);
        }
        input:checked + .toggle .star--3 {
          width: 3px;
          height: 3px;
          transform: translate3d(-${width / 10}px, 0, 0);
        }
      `}</style>
    </div>
  );
};

export default ThemeSwitch;
