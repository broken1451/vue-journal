import axios from 'axios';

const authApi = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
  params: {
    key: "AIzaSyCzbPZWGoCdk_Ka--px83v0mQgDB8qgqRw",
  },
});

export default authApi;