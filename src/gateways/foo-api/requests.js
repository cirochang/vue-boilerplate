import axios from 'axios';
import Cookies from 'js-cookie';

const BACKEND_EXAMPLE = () => {
  const req = axios.create({
    baseURL: process.env.BACKEND_API_URI_EXAMPLE,
    headers: {
      'token': Cookies.get('token'),
    },
  });
  return req;
}

export default {

  login (credentials) {
    return BACKEND_API().post('/auth', credentials);
  },

  getCurrentUser () {
    return BACKEND_API().get('/current_user');
  },

};