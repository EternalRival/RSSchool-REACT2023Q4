import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets']
const aliases = layers.reduce<NodeJS.Dict<string>>((acc, item) => {
  return { ...acc, [`@${item}`]: resolve('src', item) }
}, {})

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: { alias: { ...aliases } },
  plugins: [react()],
})
