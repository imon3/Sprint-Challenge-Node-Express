const express = require('express');

const Project = require('../helpers/projectModel');

const router = express.Router();

// TIMEOUT ERROR
router.use((req, res) => {
    res.status(404).send('Page could not load');
});

module.exports = router;