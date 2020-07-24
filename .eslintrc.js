module.exports = {
  extends: ['standard'],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  globals: {},
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always']
  },
}
