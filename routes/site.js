
/**
 * Module dependencies.
 */

var Post = require('../models/models').BlogPost;

module.exports = function(app){
  app.get('/', function(req, res){
    Post.count({},function(err, count){
      Post.find({},function(err, posts){
        res.render('index', {
            count: count
          , posts: posts
        });
      });
    });
  });
};