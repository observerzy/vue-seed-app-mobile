import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button,Icon  } from 'vant';

const app = createApp(App)

app.use(store).use(router)

app.use(Button).use(Icon)

app.mount("#app");
