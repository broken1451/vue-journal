import axios from 'axios';

const journalApi = axios.create({
  baseURL: "https://vue-demo-5aebe-default-rtdb.firebaseio.com",
});

export default journalApi;