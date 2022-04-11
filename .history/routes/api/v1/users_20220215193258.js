const express = require('express');

const router = express.Router();

router.post('/posts', require('./posts'));

module.exports = router;