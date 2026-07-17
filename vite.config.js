import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Changed '@reactjs' to '@vitejs'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})