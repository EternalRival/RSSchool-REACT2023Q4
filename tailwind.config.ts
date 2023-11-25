import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      animation: {
        'mirror-spin': '2.5s mirror-smooth infinite linear',
      },
      keyframes: {
        'mirror-smooth': {
          '0%': { transform: 'rotateY(0turn)', filter: 'invert(0)' },
          '50%': { transform: 'rotateY(0.5turn)', filter: 'invert(1)' },
          '100%': { transform: 'rotateY(1turn)', filter: 'invert(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
