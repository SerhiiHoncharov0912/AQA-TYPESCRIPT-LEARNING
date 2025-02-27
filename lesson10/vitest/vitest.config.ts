import { defineConfig } from 'vitest/config';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    resolve: {
        alias: {
            '@src/*': path.resolve(__dirname, 'src/*')
        }
    },
    test: {
        include: ['tests/**/*.test.ts'],
        setupFiles: ['setupFiles/setup.ts']
    },
    plugins: [tsconfigPaths()]
});
