import { stringifiedThemeProperties } from './themeProperties';

const clientCode = `!function(){const e=function(){const e=window.localStorage.getItem("theme");if("string"==typeof e)return e;const t=window.matchMedia("(prefers-color-scheme: dark)");return"boolean"==typeof t.matches&&t.matches?"dark":"light"}(),t=document.documentElement;Object.entries(${stringifiedThemeProperties}).forEach(([o,n])=>{const r="--color-"+o;t.style.setProperty(r,n[e])}),t.style.setProperty("--initial-theme",e)}()`;

const ThemeScriptTag = (): JSX.Element => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <script dangerouslySetInnerHTML={{ __html: clientCode }} />;
};

export default ThemeScriptTag;
