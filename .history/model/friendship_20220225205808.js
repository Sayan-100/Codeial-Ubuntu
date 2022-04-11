const mongoose = require('mongoose');


const friendshipSchema = new mongoose.Schema({

    //the user who sent this request
    from_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    t
})