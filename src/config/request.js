import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1";
axios.interceptors.response.use(
  data => {
    window.console.log(data)
  },
  error => {
    window.console.log(error)
  }
);
export default axios;
