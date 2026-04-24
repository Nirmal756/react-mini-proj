import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,    // Listen on all local IP addresses
    port: 3000,    // Your custom port
    strictPort: true,
  }
})
