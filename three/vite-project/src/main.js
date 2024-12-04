import Vue from 'vue';
import ElementUI from 'element-ui';
import "./assets/css/tailwindcss.css"
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router/index.js"
import App from './App.vue';
// 全局挂在axios
import {request} from "@/lib/axios/request.js"

Vue.use(ElementUI);
Vue.prototype.$axios = request;

new Vue({
 router,
  el: '#app',  
  render: h => h(App)
});