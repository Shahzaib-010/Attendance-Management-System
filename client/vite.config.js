import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'; // 
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  resolve: { 
    alias: {
      // absolute paths,
      '@': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'),
      'pages': path.resolve(__dirname, './src/pages'),
      'features': path.resolve(__dirname, './src/features'),
      // Add any other top-level folders you want to alias (e.g., 'utils', 'hooks')
    },
  },
})