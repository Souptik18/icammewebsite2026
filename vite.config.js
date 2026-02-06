import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE || '/icamme2026/',
  plugins: [react()],
  server: {
    allowedHosts: ["centuried-tilda-eurhythmic.ngrok-free.dev"],
    strictPort: true,
    host: "0.0.0.0",
    port: 1000,
  }
}
)
