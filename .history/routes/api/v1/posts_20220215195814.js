const express = require('express');

const router = express.Router();

const passport = require('passport');

const postApi = require('../../../controllers/api/v1/posts_api');

router.get('/', postApi.index);
router.delete('/:id', passport.authenticatepostApi.destroy);

module.exports = router;