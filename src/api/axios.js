import axios from "axios";

let instance = axios.create({
  baseURL: "http://localhost",
  timeout: 1000,
});

export default instance;
