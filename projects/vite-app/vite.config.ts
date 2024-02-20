import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

const cv = (arr: string[]) => {
  const obj: any = {};
  arr.map((item) => (obj[`@${item}`] = path.resolve(__dirname, `src/${item}`)));
  return obj;
};

const cvPackages = (arr: string[]) => {
  const obj: any = {};
  arr.map(
    (item) =>
      (obj[`@@${item}`] = path.resolve(__dirname, `../../packages/${item}`))
  );
  return obj;
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...cv(["components", "pages", "api", "config", "hooks"]),
      ...cvPackages(["components", "hooks", "models"]),
    },
  },
});
