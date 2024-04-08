import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

const owner = "astrojs";
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "fr",
    routing: {
      prefixDefaultLocale: false,
    }
  },
  site: 'http://colnup.github.io'
});
