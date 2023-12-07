import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'

const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets']
const aliases = layers.reduce<Record<string, string>>(
  (acc, item) => ({ ...acc, [`@${item}`]: resolve('src', item) }),
  {}
)

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: { alias: { ...aliases } },
  plugins: [react()],
})
