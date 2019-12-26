import axios from "axios";
import { Message } from "element-ui";
axios.defaults.baseURL = "http://192.168.1.100:8088";
axios.interceptors.response.use(
  res => {
    let data = res.data;
    let code = data.code;
    let msg = data.msg;
    if (code < 0) {
      if (code === -99) {
        Message.error({ duration: 10000, message: msg });
        return;
      }
      Message.error(msg);
      return;
    }
    window.console.log(data);
    return data.data;
  },
  error => {
    window.console.log(error);
      Message.error("网络异常");
    return error;
  }
);
export default axios;
