import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [react(), tailwindcss()],

    base: '/Nastya-table/',

    optimizeDeps: {
        include: ['react-window'],
    },

    ssr: {
        noExternal: ['react-window'],
    },
})
