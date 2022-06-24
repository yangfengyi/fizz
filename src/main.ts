import { createApp } from "vue";
import App from './app.vue'
import router from '@/router'
import './index.css'

const VueApp = createApp(App);
VueApp.use(router);
VueApp.mount('#app');
