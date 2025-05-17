// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://astronaut.github.io',
    base:'first-web',
    build: {
        assetsPrefix: 'first-web'
    }
});
