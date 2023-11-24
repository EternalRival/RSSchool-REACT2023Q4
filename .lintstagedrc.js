const path = require('path')

const eslintCmd = (filenames) => {
  const fileList = filenames.map((f) => path.relative(process.cwd(), f))
  return `next lint --fix --file ${fileList.join(' --file ')}`
}

const formatCmd = 'prettier -luw'

const stylelintCmd = 'stylelint --mw 0 --fix'

module.exports = {
  '*': [formatCmd],
  '*.{js,jsx,ts,tsx}': [eslintCmd],
  '*.css': [stylelintCmd],
}
