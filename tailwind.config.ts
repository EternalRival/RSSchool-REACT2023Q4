import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/{shared,entities,features,widgets,pages}/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: {} },
  plugins: [],
}
export default config
