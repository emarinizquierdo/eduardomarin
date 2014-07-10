'use strict';

var mongoose = require('mongoose'),
    Post = mongoose.model('Post');

/**
*	Post services
**/
exports.post = {};

/* Get all Posts */
exports.post.all = function(req, res) {

	var   cursorPointer = req.query.cursor
		, numPosts = req.query.numPosts
		;

	var query = Post.find({})
		.sort({date: -1})
		.skip(cursorPointer)
		.limit(numPosts);

	Post.count({}, function( err, total){
		if(!err){
			query.execFind(function(err, posts) {
			if (!err) {
				return res.json({total: total, data: posts});
			} else {
				return res.send(err);
			}
		});
		}else{
		return res.send(err);
		}
	});
  
};

/* Show Post details */
exports.post.show = function (req, res, next) {
  var postId = req.params.id;
  Post.findById(postId, function (err, Post) {
    if (err) return next(new Error('Failed to load Post'));
  
    if (post) {
      return res.json(post);
    } else {
      res.send(404, 'Post_NOT_FOUND');
    }
  });
};

/**
 * Create Post
 */
exports.post.create = function (req, res, next) {
  var newPost = new Post(req.body);
  newPost.provider = 'local';
  newPost.date = new Date().getTime();
  
  newPost.save(function(err) {
    if (err) {
      return res.json(400, err);
    }
    return res.send(200);
  });
};

/**
 * Update Post
 */
exports.post.save = function (req, res, next) {
  var newPost = req.body;

  Post.update({ _id: req.body._id },
    {

    	"title": (newPost.title) ? newPost.title : "",
		"author": (newPost.author) ? newPost.author : "",
		"body": (newPost.body) ? newPost.body : "",
		"permalink": (newPost.permalink) ? newPost.permalink : "",
		"tags": (newPost.tags) ? newPost.tags : "",
		"comments": (newPost.comments) ? newPost.comments : [],
		"date": (newPost.date) ? newPost.date : new Date().getTime(),
    },
    { multi : false },
    function (err, p_post) {
      if (err) {
        res.send(500, err);
      } else {
            res.json(p_post);
      }
  });
};

/**
 * Remove Post
 */
exports.post.delete = function (req, res, next) {
  Post.remove({ _id: req.params.id },
    function (err, p_post) {
      if (err) {
        res.send(500, err);
      } else {
            res.send(200);
      }
  });
};