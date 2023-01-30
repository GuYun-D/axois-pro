import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import './service/modules/home'
import './service/modules/entir'
createApp(App).use(router).mount("#app");
