const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const actionRouter = require('./data/router/action-router');
const projectRouter = require('./data/router/project-router');
const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan());
server.use('/api', actionRouter, projectRouter);

server.get('/', (req, res) => {
    res.send('Server Running');
});

module.exports = server;