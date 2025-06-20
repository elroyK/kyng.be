// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  redirects: {
    '/github': 'https://github.com/elroyK/',
    '/linkedin': 'https://www.linkedin.com/in/kyngstudio/',
  },
});
