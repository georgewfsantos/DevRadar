import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.105:3333"
  // if android emulator: the same ip above or 10.0.2.2:3333
  // if ios emulator: locahost:3333
});

export default api;
