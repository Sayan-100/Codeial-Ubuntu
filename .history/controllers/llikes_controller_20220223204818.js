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


        //check if a like already exists
        let existingLike = await Like.findOne({
            likable: req.query.id,
            onModel: req.query.type,
            user: req.user._id

        })

        //if a like already exists then delete it
        if (existingLike) {
            likable.likes.pull(existingLike._id);
            likable.save();

            existingLike.remove();



        } else {
            //else make a new like
            let newLike = await Like.create({
                user: req.user._id,
                likeable: req.query.id,
                onModel: req.query.type
            });

            likable.likes.push(like._id);
            likable.save();

        }


        return res.json(200, {
            message: 'Request succesful'
        })


    } catch (err) {
        console.log(err);
        return res.json(500, {
            message: 'Internal Server Error'
        });
    }
}