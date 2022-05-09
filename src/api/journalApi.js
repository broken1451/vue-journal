import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://vue-demo-5aebe-default-rtdb.firebaseio.com",
});

// interceptar las request
journalApi.interceptors.request.use((config) => {
  // para la authenticacion de firebase ellos piden el auth como query params
  config.params = {
    auth: localStorage.getItem("idToken"),
  };
  return config;
});

export default journalApi;