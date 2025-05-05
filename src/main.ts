import { createApp } from "vue";
import App from "./App.vue";
import router from './router';
import "./assets/index.css";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

createApp(App).use(router).mount('#app')
