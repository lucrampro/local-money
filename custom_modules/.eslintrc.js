module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    "no-underscore-dangle" : "off",
    "no-param-reassign" : "off",
    "class-methods-use-this" : "off",
    "import/named" : "off",
    "import/prefer-default-export" : "off",
    // "no-unused-vars" : "off",
  },
};
