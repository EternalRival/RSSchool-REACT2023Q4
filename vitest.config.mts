import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

const layers = ['shared', 'entities', 'features', 'widgets', 'pages', 'tests', 'redux']
const aliases = layers.reduce((acc, item) => {
  return { ...acc, [`@${item}`]: resolve('src', item) }
}, {})

export default defineConfig({
  plugins: [react()],
  test: {
    alias: { ...aliases },
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'v8',
      all: true,
      include: ['src'],
      exclude: ['**/*.type.ts', 'src/tests'],
    },
    setupFiles: './src/tests/vitest-setup.ts',
  },
})
