import { createApp } from "vue";
import App from "./App.vue";
import VueCountdown from "@chenfengyuan/vue-countdown";
import router from "./router";

const app = createApp(App);

app.component(VueCountdown.name, VueCountdown);

app.use(router);

app.mount("#app");
