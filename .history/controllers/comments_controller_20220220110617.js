const Comment = require('../model/comment');
const Post = require('../model/post');



module.exports.create = async function(req, res) {

        try {
            let post = await Post.findById(req.body.post, function(err, post) {
                if (post) {
                    let comment = await Comment.create({
                        content: req.body.content,
                        post: req.body.post,
                        user: req.user._id
                    });
                    //handle error 

                    post.comments.push(comment);
                    post.save();

                    res.redirect('/');

                    comment = await comment.populate('user', 'name').execPopulate();

                    if (req.xhr) {
                        return res.status(200).json({
                            data: {
                                comment: comment
                            },
                            message: "Post created!"
                        })
                    }
                }
            });
        }

        module.exports.destroy = function(req, res) {
            Comment.findById(req.params.id, function(err, comment) {
                if (comment.user == req.user.id) {
                    let postId = comment.post;
                    comment.remove();

                    Post.findByIdAndUpdate(postId, { $pull: { comments: req.params.id } }, function(err, post) {
                        return res.redirect('back');
                    });
                } else {
                    return res.redirect('back');
                }
            });
        }