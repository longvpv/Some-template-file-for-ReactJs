import axios from "axios";
import jsCookie from "js-cookie";
import authenticateSettings from "../fileSettings/authenticateSettings.json";
import _ from "lodash";
const httpClient = axios.create({
  baseURL: "http://erp-api-dev.vvs.vn",
<<<<<<< HEAD
  // baseURL: "http://192.168.1.21",
=======
>>>>>>> 01ffaecd65c30d12ec8f5fceef40221a4d27a469
});

httpClient.interceptors.request.use(
  function (config) {
    if (typeof document !== "undefined") {
      const auToken = jsCookie.get(authenticateSettings.tokenName);
      if (auToken)
        config.headers.common["Authorization"] = 'Bearer ' + jsCookie.get(
          authenticateSettings.tokenName
        );
    }
    return config;
  },
  function (error) {
    console.log(JSON.stringify(error));
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    if (response.data.result) return response.data.result;
    return response.data;
  },
  (error) => {
    if (error.response && error.response.data) {
      const { data } = error.response;
      return data;
    }

    return Promise.reject(error);
  }
);

export default httpClient;
