import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Uncomment this if deploying to GitHub Pages with a repo name
  // base: '/your-repo-name/',
})
