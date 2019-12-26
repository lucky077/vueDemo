import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import commonJs from "./common/common.js";
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "view-design/dist/styles/iview.css";
import axios from "./config/request";

Vue.prototype.http = axios;
Vue.use(ElementUi);
Vue.config.productionTip = false;
commonJs(Vue);

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app1");
