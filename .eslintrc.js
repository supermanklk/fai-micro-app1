module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['prettier', 'react-hooks', 'react', '@typescript-eslint'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jasmine: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        jsxSingleQuote: true,
        singleQuote: true,
        semi: false,
        arrowParens: 'avoid',
        printWidth: 140,
        trailingComma: 'none',
        endOfLine: 'auto'
      }
    ],
    camelcase: ['error', { properties: 'never' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'lines-between-class-members': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-curly-spacing': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'react/no-multi-comp': 0,
    'no-unused-expressions': 0,
    'no-underscore-dangle': 0,
    'no-useless-return': 0,
    'no-lonely-if': 0,
    'no-else-return': 0,
    'consistent-return': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'react/no-access-state-in-setstate': 0,
    'react/sort-comp': 0,
    'react/no-unused-state': 1,
    'react/prefer-stateless-function': 0,
    'no-console': 0,
    eqeqeq: 0,
    'no-undef': 0,
    'no-multi-assign': 0,
    'import/no-unresolved': 0,
    'spaced-comment': 0,
    'no-restricted-globals': 0,
    'no-var': 1,
    'prefer-const': 1,
    'react/no-unused-state': 1,
    'react/no-direct-mutation-state': 0,
    'react/display-name': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true
      }
    ],
    '@typescript-eslint/ban-types': 0
  }
}
