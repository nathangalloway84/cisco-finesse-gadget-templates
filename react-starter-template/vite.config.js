import { fileURLToPath } from 'url'
import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())}

    return defineConfig({
        base: `/3rdpartygadget/files/${process.env.VITE_GADGET_FOLDER_NAME}/`,
        build: {
            minify: false,
            modulePreload: {
                polyfill: false
            },
            outDir: `./dist/${process.env.VITE_GADGET_FOLDER_NAME}`,
            rollupOptions: {
                input: {
                    gadget: fileURLToPath(new URL('./gadget.html', import.meta.url)),
                    index: fileURLToPath(new URL('./index.html', import.meta.url)),
                },
                output: {
                    entryFileNames: `[name].js`,
                    chunkFileNames: `[name].js`,
                    assetFileNames: `[name].[ext]`
                }
            }
        },
        plugins: [react()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        }
    })    
}
