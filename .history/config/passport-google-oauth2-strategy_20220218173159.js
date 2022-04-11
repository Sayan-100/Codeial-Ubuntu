const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;

const crypto = require('crypto');

const User = require('../model/user');

passport.use(new googleStrategy({
        clientID: "36815387300-ui0j8e4ln3057q52scv2an8i5asu1k13.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:8000/users/auth/google/callback",

    },

    function(accessToken, refreshToken, profile, done) {
        User.findOne({ email: profile.emails[0].value }).exec(function(err, user) {
            if (err) {
                console.log('error in google strategy-passport', err);
                return;
            }

            console.log(profile);

            if (user) {
                return done(null, user);
            } else {
                User.create({
                    name: profile.name,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes[20].toString('hex');
                }, function(err, user) {
                    if (err) {
                        console.log('error user');
                        return;
                    }

                    return done(null, user);
                })
            }


        })
    }


))


module.exports = passport;