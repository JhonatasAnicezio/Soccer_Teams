import axios from 'axios';

const api = axios.create({
  baseURL: 'http://site.api.espn.com/apis/site/v2/sports/soccer',
});

export default api;