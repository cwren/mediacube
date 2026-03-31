// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
    plugins: [viteSingleFile()],
    build: {
        target: 'esnext', // Use a modern target for compatibility with inlined modules
        assetsInlineLimit: 100000000, // A very high limit (e.g., 100MB) to inline all assets
        cssCodeSplit: false, // Ensure all CSS is in a single chunk for the plugin to work
        // Sets the output format to IIFE for compatibility
        rollupOptions: {
            output: {
                format: 'iife',
                inlineDynamicImports: true,
            },
        },
    },
});
