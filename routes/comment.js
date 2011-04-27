/**
 * @author nttdocomo
 */
var Post = require('../models/models').BlogPost, Comment = require('../models/models').Comments;

module.exports = function(app){
    app.param('comment', function(req, res, next, id){
        Post.findById(id, function(err, post){
            if (err) {
                return next(err);
            }
            if (!post) 
                return next(new Error('failed to load post ' + id));
            req.post = post;
            next();
        });
    });
    app.post('/comment/:post', function(req, res){
        var data = req.body.comment, comment = new Comment(data), id = req.post._id;
        Post.findById(id, function(err, post){
            if (err) {
                return next(err);
            }
            if (!post) 
                return next(new Error('failed to load post ' + id));
            post.comments.push(data);
            post.save(function(err){
                if (!err) {
                    res.header('Content-Type', 'text/plain');
                    res.end(JSON.stringify(data));
                }
            });
        });
    });
}
