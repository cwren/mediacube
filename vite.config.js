// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
    plugins: [viteSingleFile()],
    build: {
        // Optional: adjust assets directory for correct relative paths
        assetsDir: '',
    },
    rollupOptions: {
        input: {
            main: resolve(__dirname, 'mediacube.html'),
            // Add more entry points as needed
        },
    },
});
