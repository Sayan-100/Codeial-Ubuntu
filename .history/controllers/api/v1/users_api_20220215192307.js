const User = require('../../../model/user');
const jwt = require('jsonwebtoken');

module.exports.createSession = function(req, res) {
    // return res.redirect('/users/profile');
    let user = User.findOne({ email: req.body.email });
};