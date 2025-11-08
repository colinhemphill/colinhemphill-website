import path from 'node:path';

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    .map((f) => `"${path.relative(process.cwd(), f)}"`)
    .join(' ')}`;

const eslintConfig = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};

export default eslintConfig;
