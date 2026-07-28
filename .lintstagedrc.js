import path from 'node:path';

const buildLintCommand = (filenames) =>
  `oxlint --fix ${filenames
    .map((f) => `"${path.relative(process.cwd(), f)}"`)
    .join(' ')}`;

const lintConfig = {
  '*.{js,jsx,ts,tsx}': [buildLintCommand],
};

export default lintConfig;
