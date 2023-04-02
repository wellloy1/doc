import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'path';

export default defineConfig({
    plugins: [solidPlugin()],
    base: '/doc',
    server: {
        port: 3001,
    },
    build: {
        target: 'esnext',
    },
    preview: {
        port: 4180,
        open: 'http://mxcore/doc/',
    },
    resolve: {
        alias: {
            root: path.resolve(__dirname),
            '@': path.resolve(__dirname, 'src'),
            assets: path.resolve(__dirname, 'src/assets'),
            db: path.resolve(__dirname, 'src/db'),
            hooks: path.resolve(__dirname, 'src/hooks'),
            css: path.resolve(__dirname, 'src/css'),
            lib: path.resolve(__dirname, 'src/lib'),
            public: path.resolve(__dirname, 'src/public'),
            ui: path.resolve(__dirname, 'src/ui'),
            icons: path.resolve(__dirname, 'src/ui/icons'),
        },
    },
});
