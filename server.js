const express = require('express')

const server = express();


server.get('/', (req, res) => {
  res.status(200).json('API is working')
});

module.exports = server;