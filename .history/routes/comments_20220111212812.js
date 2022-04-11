const express = require('express');
const router = express.router();

const passport = require('passport');

const commentsController = require('../controllers/comments_controller');

router.post('/create', passport.checkAuthentication, commentsController.create);

module.exports = router;