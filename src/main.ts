import { createSSRApp } from "vue";
import App from "./App.vue";

console.log(import.meta.env)
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
