import { createApp } from "vue";
import App from "./App.vue";
import KonamiCodeDirective from "@/plugins/KonamiCodeDirective";

const app = createApp(App);

app.use(KonamiCodeDirective);

app.mount("#app");
