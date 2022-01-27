import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import eslintPlugin from "vite-plugin-eslint";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import { VitePWA } from "vite-plugin-pwa";
import { nativeUi } from "unplugin-vue-components/resolvers";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  plugins: [
    vue(),
    VitePWA(),
    Components({
      importPathTransform: (path) =>
        path.startsWith("C:") ? path.replaceAll("\\", "\\\\") : path,
      resolvers: [
        // example of importing Vant
        (name) => {
          // where `name` is always CapitalCase
          if (name.match(/^N[A-Z]/))
            return { importName: name, path: "naive-ui" };
        }
      ]
    }),
    Pages(),
    Layouts({
      layoutsDir: "src/layouts",
      defaultLayout: "defaultLayout"
    }),
    eslintPlugin()
  ]
});
