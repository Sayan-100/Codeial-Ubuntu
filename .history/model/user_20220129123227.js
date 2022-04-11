const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true

    },

    password: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true

});

const User = mongoose.model('User', userSchema);
module.exports = User;