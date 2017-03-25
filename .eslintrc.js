module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 7,
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-unused-vars': ['warn'],

    // react
    'react/jsx-filename-extension': ['off'],

    // resolver
    'import/no-unresolved': ['off'],
  },
}
