import axios from 'axios';

const spaceXApi = axios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'access-control-allow-origin': '*'
  },

  baseURL: 'https://api.spacexdata.com/v5'
});

export default spaceXApi;