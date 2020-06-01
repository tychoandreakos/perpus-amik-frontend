import axios from 'axios';

const remote = 'https://desolate-anchorage-69638.herokuapp.com';
const local = 'http://localhost';

let instance = axios.create({
  baseURL: remote,
  timeout: 120000,
});

export default instance;
