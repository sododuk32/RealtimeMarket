module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'no-unused-vars': 'error',
    'no-multiple-empty-lines': 'error',
    '@typescript-eslint/no-var-requires': 'error', // require 구문 사용 금지
    '@typescript-eslint/no-use-before-define': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
