import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // This allows the code to access process.env.API_KEY as required by the guidelines.
    // IMPORTANT: Ensure you add API_KEY to your Vercel Project Settings > Environment Variables.
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});