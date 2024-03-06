import axios from 'axios';

const baseURL = 'https://dev-betstats-node.onrender.com';

const api = axios.create({
  baseURL,
});

export { api, baseURL };
