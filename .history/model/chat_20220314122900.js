const mongoose = require('mongoose');
const chatSchema = new mongoose.Schema({
    chatroom: {
        type: String,
        required: true
    }
})