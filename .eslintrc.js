module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    jest: true,
  },
  rules: {
    'global-require': 'off',
    'max-len': ['warn', {code: 120}],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['warn'],
    '@typescript-eslint/no-unused-vars': ['warn'],

    'react/no-children-prop': ['warn'],

    'react/require-default-props': ['off'],

    'import/prefer-default-export': ['off'],
    'nonblock-statement-body-position': ['warn'],
    'linebreak-style': ['off'],
    'react/jsx-filename-extension': 'off',
    'react/tsx-filename-extension': 'off',
    'arrow-parens': 'warn',

    'no-nested-ternary': ['off'],

    'react/jsx-props-no-spreading': 'off',

    'react/prop-types': 'off',

    'react/no-array-index-key': 'warn',

    'comma-dangle': 'off',

    'no-underscore-dangle': 'off',

    'import/extensions': [
      'off',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        multilineDetection: 'brackets',
      },
    ],

    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    '@typescript-eslint/type-annotation-spacing': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',

    'react/state-in-constructor': 'off',
  },
  globals: {
    fetch: false,
  },
};
