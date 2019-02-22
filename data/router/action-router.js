const express = require('express');

const Action = require('../helpers/actionModel');

const router = express.Router();

// TIMEOUT ERROR
router.use((req, res) => {
    res.status(404).send('Page could not load');
});

module.exports = router;