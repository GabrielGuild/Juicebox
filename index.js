const PORT = 3000;
const { urlencoded } = require('express');
const express = require('express');
const morgan = require('morgan');
const server = express();
const apiRouter = require('./api');
require('dotenv').config();

const {
    client 
} = require("./db")

client.connect()

server.use(express.json())
server.use(morgan('dev'));
server.use('/api', apiRouter);

server.get('/add/:first/to/:second', (req, res, next) => {
  res.send(`<h1>${ req.params.first } + ${ req.params.second } = ${
    Number(req.params.first) + Number(req.params.second)
   }</h1>`);
});

server.listen(PORT, () => {

  console.log('The server is up on port', PORT)
});