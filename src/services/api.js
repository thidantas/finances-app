import axios from 'axios';

import { LOCAL_HOST } from '@env';

const api = axios.create({
  baseURL: `http://${LOCAL_HOST}:3333`,
});

export default api;
