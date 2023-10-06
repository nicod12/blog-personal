module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'standard-with-typescript',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
