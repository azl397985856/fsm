module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    jest: true
  },
  extends: ['airbnb-base'],
  // add your custom rules here
  rules: {
    'function-paren-newline': 'off',
    // don't require .vue extension when importing
    indent: 'off', // 交给prettier解决
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never'
      }
    ],
    'no-restricted-properties': 'off',
    'no-caller': 'off',
    'prefer-destructuring': 'off',
    'no-param-reassign': 'off',
    'prefer-template': 'off',
    'no-restricted-syntax': 'off',
    'prefer-rest-params': 'off',
    'prefer-arrow-callback': 'off',
    'no-useless-return': 'off',
    'no-extend-native': 'off',
    'func-names': 'off',
    'object-curly-newline': 'off',
    'no-plusplus': 'off',
    camelcase: 'off',
    'no-underscore-dangle': 0,
    'no-confusing-arrow': 1,
    'no-tabs': 'off',
    radix: 'off',
    'quote-props': 'off',
    'no-return-assign': 'off',
    'no-unused-expressions': 0,
    'no-trailing-spaces': 'off',
    'max-len': 'off',
    'no-mixed-operators': 'off',
    'no-bitwise': 'off',
    'arrow-parens': 'off',
    'comma-dangle': ['error', 'never'],
    'no-extra-semi': 2,
    'global-require': ['off'],
    'space-before-function-paren': ['off'],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: ['test/unit/index.js']
      }
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
