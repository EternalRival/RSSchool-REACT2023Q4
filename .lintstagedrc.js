const path = require('path')

const buildEslintCommand = (filenames) => {
  const fileList = filenames.map((f) => path.relative(process.cwd(), f))
  return `next lint --fix --file ${fileList.join(' --file ')}`
}

module.exports = {
  '*': 'prettier -luw',
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*.css': 'stylelint --mw 0 --fix',
}
