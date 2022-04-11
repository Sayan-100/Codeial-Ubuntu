const User = require('../../../model/user');
const jwt = require('jsonwebtoken');

module.exports.createSession = function(req, res) {
    // return res.redirect('/users/profile');
    // let user = User.findOne({ email: req.body.email });

    try {
        let user = User.findOne({ email: req.body.email });

        if (!user || user.password != req.body.password) {
            return res.json(422)
        }

    } catch (err) {
        console.log('*********', err);

        return res.json(500, {
            message: "internal server Error"
        });
    }
};