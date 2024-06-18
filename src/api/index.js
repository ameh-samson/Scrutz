// src/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://infinion-test-int-test.azurewebsites.net/api/', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
