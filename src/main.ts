import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './components/Router/router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.use(Antd);
app.use(router);
app.mount('#app');
