import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Frontend "/api/..." ga so'rov yuborganda uni backendga (3001-port) yo'naltiradi
      '/api': 'http://localhost:3001',
    },
  },
})