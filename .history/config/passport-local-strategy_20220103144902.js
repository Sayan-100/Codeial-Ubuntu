const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../model/user');

//authentication using passport

passport.use(new LocalStrategy({
        usernameField: 'email'
    },

    function(email, passport, done) {


        //find a user and establish the identity
        User.findOne({ email: email })
    }


))