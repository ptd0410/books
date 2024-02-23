// vite.config.ts
import { defineConfig } from "file:///E:/A1/node_modules/vite/dist/node/index.js";
import react from "file:///E:/A1/node_modules/@vitejs/plugin-react-swc/index.mjs";
import * as path from "path";
var __vite_injected_original_dirname = "E:\\A1\\projects\\vite-app";
var cv = (arr) => {
  const obj = {};
  arr.map((item) => obj[`@${item}`] = path.resolve(__vite_injected_original_dirname, `src/${item}`));
  return obj;
};
var cvPackages = (arr) => {
  const obj = {};
  arr.map(
    (item) => obj[`@@${item}`] = path.resolve(__vite_injected_original_dirname, `../../packages/${item}`)
  );
  return obj;
};
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...cv(["components", "pages", "api", "config", "hooks"]),
      ...cvPackages(["components", "hooks", "models"])
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxBMVxcXFxwcm9qZWN0c1xcXFx2aXRlLWFwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcQTFcXFxccHJvamVjdHNcXFxcdml0ZS1hcHBcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0ExL3Byb2plY3RzL3ZpdGUtYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuY29uc3QgY3YgPSAoYXJyOiBzdHJpbmdbXSkgPT4ge1xyXG4gIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgYXJyLm1hcCgoaXRlbSkgPT4gKG9ialtgQCR7aXRlbX1gXSA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIGBzcmMvJHtpdGVtfWApKSk7XHJcbiAgcmV0dXJuIG9iajtcclxufTtcclxuXHJcbmNvbnN0IGN2UGFja2FnZXMgPSAoYXJyOiBzdHJpbmdbXSkgPT4ge1xyXG4gIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgYXJyLm1hcChcclxuICAgIChpdGVtKSA9PlxyXG4gICAgICAob2JqW2BAQCR7aXRlbX1gXSA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIGAuLi8uLi9wYWNrYWdlcy8ke2l0ZW19YCkpXHJcbiAgKTtcclxuICByZXR1cm4gb2JqO1xyXG59O1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgLi4uY3YoW1wiY29tcG9uZW50c1wiLCBcInBhZ2VzXCIsIFwiYXBpXCIsIFwiY29uZmlnXCIsIFwiaG9va3NcIl0pLFxyXG4gICAgICAuLi5jdlBhY2thZ2VzKFtcImNvbXBvbmVudHNcIiwgXCJob29rc1wiLCBcIm1vZGVsc1wiXSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStQLFNBQVMsb0JBQW9CO0FBQzVSLE9BQU8sV0FBVztBQUNsQixZQUFZLFVBQVU7QUFGdEIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTSxLQUFLLENBQUMsUUFBa0I7QUFDNUIsUUFBTSxNQUFXLENBQUM7QUFDbEIsTUFBSSxJQUFJLENBQUMsU0FBVSxJQUFJLElBQUksSUFBSSxFQUFFLElBQVMsYUFBUSxrQ0FBVyxPQUFPLElBQUksRUFBRSxDQUFFO0FBQzVFLFNBQU87QUFDVDtBQUVBLElBQU0sYUFBYSxDQUFDLFFBQWtCO0FBQ3BDLFFBQU0sTUFBVyxDQUFDO0FBQ2xCLE1BQUk7QUFBQSxJQUNGLENBQUMsU0FDRSxJQUFJLEtBQUssSUFBSSxFQUFFLElBQVMsYUFBUSxrQ0FBVyxrQkFBa0IsSUFBSSxFQUFFO0FBQUEsRUFDeEU7QUFDQSxTQUFPO0FBQ1Q7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsR0FBRyxHQUFHLENBQUMsY0FBYyxTQUFTLE9BQU8sVUFBVSxPQUFPLENBQUM7QUFBQSxNQUN2RCxHQUFHLFdBQVcsQ0FBQyxjQUFjLFNBQVMsUUFBUSxDQUFDO0FBQUEsSUFDakQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
