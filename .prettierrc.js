module.exports = {
  semi: false,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  overrides: [
    {
      extends: [
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
      ],
      rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      },
    },
  ],
}