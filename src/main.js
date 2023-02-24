import { createApp } from "vue"
import App from "./App.vue"
import vue3GoogleLogin from "vue3-google-login"

const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: "425614752001-tngmaevgsjaggk0oh4uvko5lper71mm1.apps.googleusercontent.com",
})
app.mount("#app")
