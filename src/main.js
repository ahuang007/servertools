import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './common/common.css';
import global_ from "./common/Global";
Vue.prototype.GLOBAL = global_;


Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
