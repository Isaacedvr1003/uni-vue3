import { createSSRApp } from "vue"
import App from "./App.vue"
import store from "./store"
import uviewPlus from "uview-plus"
import { routeInterceptor, requestInterceptor, prototypeInterceptor } from "./interceptors"
import "virtual:uno.css"
import "@/style/index.scss"
import "@/static/fonts/style.css"
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  app.use(routeInterceptor)
  app.use(requestInterceptor)
  app.use(prototypeInterceptor)
  app.use(uviewPlus)
  return {
    app,
  }
}