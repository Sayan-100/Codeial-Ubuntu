const express = require('express');

const router = express.Router();

router.post('/create-session', require('./posts'));

module.exports = router;