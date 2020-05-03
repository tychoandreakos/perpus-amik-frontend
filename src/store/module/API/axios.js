import axios from "axios";

let instance = axios.create({
  baseURL: "http://localhost",
  timeout: 120000,
});

export default instance;
