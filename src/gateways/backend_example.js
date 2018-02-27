import axios from 'axios';

export var BACKEND_EXAMPLE = axios.create({
  baseURL: process.env.BACKEND_API_URI_EXAMPLE,
  headers: {
    'x-access-token': localStorage.getItem("token")
  }
});
