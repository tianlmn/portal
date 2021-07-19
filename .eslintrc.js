module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'html', 'react-hooks'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      globalReturn: false,
    },
    babelOptions: {
      configFile: './.babelrc.json',
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'es5',
      },
    ],
    'no-irregular-whitespace': 1,
    'no-unused-vars': 1,
    'react/prop-types': 0,
    'react/display-name': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
  },
  globals: {
    $axios: true,
    React: true,
  },
}
