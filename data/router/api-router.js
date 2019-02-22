const express = require('express');

const router = express.Router();

const actionRouter = require('./action-router');
const projectRouter = require('./project-router');

router.use('/api', actionRouter);
router.use('/api', projectRouter);

module.exports = router;