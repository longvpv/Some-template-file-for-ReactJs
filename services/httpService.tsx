import axios from "axios";
import jsCookie from "js-cookie";
import authenticateSettings from "../fileSettings/authenticateSettings.json";
import _ from "lodash";
const httpClient = axios.create({
  baseURL: "http://localhost:5000/mobile/v2",
});

httpClient.interceptors.request.use(
  function (config) {
    if (typeof document !== "undefined") {
      const auToken = jsCookie.get(authenticateSettings.tokenName);
      if (auToken)
        config.headers.common["Authorization"] = jsCookie.get(
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
