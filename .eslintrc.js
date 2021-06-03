module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    semi: [2, 'never'],
    'class-methods-use-this': 'off',
    'comma-dangle': [2, 'never'],
    'no-alert': 'off',
    'no-restricted-syntax': 'off',
    'space-before-function-paren': ['error', 'always']
  }
}
