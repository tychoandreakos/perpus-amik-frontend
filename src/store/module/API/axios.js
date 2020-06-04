import axios from 'axios';

const remote = 'https://desolate-anchorage-69638.herokuapp.com';
const local = 'http://localhost:8000';

let instance = axios.create({
  baseURL: local,
  timeout: 120000,
});

export default instance;
