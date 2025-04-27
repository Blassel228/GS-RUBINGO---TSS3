import router from "./route/index.js";

import { createApp } from "vue";
import App from "./App.vue";
import "./styles/globals.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
