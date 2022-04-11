const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../model/user');

//authentication using passport