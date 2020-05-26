import axios from "axios";

let instance = axios.create({
  baseURL: "https://desolate-anchorage-69638.herokuapp.com",
  timeout: 120000,
});

export default instance;
