const User = require('../../../model/user');

module.exports.createSession = function(req, res) {
    // return res.redirect('/users/profile');
    req.flash('success', 'logged in successfully');
    return res.redirect('/');
};