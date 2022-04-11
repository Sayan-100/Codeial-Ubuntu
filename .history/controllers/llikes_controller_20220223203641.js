const Like = require('../model/like');
const Post = require('../model/post');
const Comment = require('../model/comment');


module.exports.toggleLike = async function(req, res) {
    try {

        //like/toggle/?id=abcdef&type=Post
        let likable;
        let deleted = false;

        if (req.query.type == 'Post') {
            likable = await Post.findById(req.query.id).populate('likes');
        } else {
            likable = await Comment.findById(req.query.id).populate('likes');
        }

    } catch (err) {
        console.log(err);
        return res.json(500, {
            message: 'Internal Server Error'
        });
    }
}