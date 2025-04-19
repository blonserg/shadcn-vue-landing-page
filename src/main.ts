import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

createApp(App).mount("#app");
