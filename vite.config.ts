import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Defines process.env globally to prevent "process is not defined" crashes
    'process.env': {},
    // Specific replacement for the API key
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});