const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const actionProjectRouter = require('./data/router/action-project-router');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan());
server.use('/api', actionProjectRouter);

server.get('/', (req, res) => {
    res.send('Server Running');
});

module.exports = server;