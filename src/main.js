import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "view-design/dist/styles/iview.css";
import axios from "./config/request";

Vue.prototype.axios = axios;
Vue.use(ElementUi);
Vue.config.productionTip = false;

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app1");
