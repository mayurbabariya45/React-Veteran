import axios from 'axios';
import { API_URL } from '../config';

function makeHeaders() {
  let headerObj = {};

  if (localStorage.getItem('access_token')) {
    const token = `Bearer ${localStorage.getItem('access_token')}`;
    headerObj = {
      Authorization: token,
    };
  }

  return headerObj;
}

const axiosApi = axios.create({
  withCredentials: true,
  baseURL: `${API_URL}/`,
});

axiosApi.interceptors.request.use((request) => {
  request.headers = makeHeaders();
  return request;
});

export default axiosApi;
