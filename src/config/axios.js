var axios = require('axios');


var instance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000
});

module.exports =  instance;
