module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "vue/max-attributes-per-line": ["error", {
      "singleline": 20,
      "multiline": {
        "max": 1,
        "allowFirstLine": true
      }
    }]
  }
}
