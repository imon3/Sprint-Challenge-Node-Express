const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const apiRouter = require('./data/router/api-router');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan());
server.use('/', apiRouter);

server.get('/', (req, res) => {
    res.send('Server Running');
});

module.exports = server;