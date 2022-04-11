const Like = require('../model/like');
const Post = require('../model/post');
const Comment = require('../model/comment');


module.exports.toggleLike = async function(req, res) {
    try {

        //like/toggle/?id=abcd


    } catch (err) {
        console.log(err);
        return res.json(500, {
            message: 'Internal Server Error'
        });
    }
}