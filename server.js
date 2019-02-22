const express = require('express');
const cors = require('cors');

const actionRouter = require('./data/router/action-router')
const projectRouter = require('./data/router/project-router')

const server = express();

server.use(express.json());
server.use(cors());
server.use('/api', actionRouter, projectRouter);

module.exports = server;