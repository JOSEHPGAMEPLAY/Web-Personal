/** @type {import('prettier').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    pluginSearchDirs: false,
    plugins: ['@ianvs/prettier-plugin-sort-imports'],
    importOrder: ['^@', '^[a-zA-Z0-9-]+', '^[./]'],
  }