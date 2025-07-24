// services/extension/axios.js
import axios from 'axios';

const instance = axios.create({
 /*  baseURL: 'https://api.site.com',  */
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;
