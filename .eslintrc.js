module.exports = {
  plugins: ["@html-eslint"],
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/essential'
  ],
  overrides: [
    {
      files: ["*.html"],
      parser: "@html-eslint/parser",
      extends: ["plugin:@html-eslint/recommended"],
      rules: {
        "@html-eslint/require-img-alt": "off",
        "@html-eslint/no-multiple-h1": "off"
      }
    },
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "@html-eslint/indent": ["error", 2]
  }
}
