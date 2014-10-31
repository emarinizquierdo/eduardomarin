'use strict';

var mongoose = require('mongoose'),
    Post = mongoose.model('Post'),
    UserProfile = mongoose.model('UserProfile');

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
  Post.findById(postId, function (err, p_post) {
    if (err) return next(new Error('Failed to load Post'));
  
    if (p_post) {
      return res.json(p_post);
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

/**
* Userprofile services
**/
exports.userprofile = {};

/* Show Post details */
exports.userprofile.show = function (req, res, next) {

  var query = UserProfile.find({ lang : req.query.lang || "es" }).limit(1);

  query.execFind(function(err, userProfiles) {
    if (!err) {
      return res.json(userProfiles[0]);
    } else {
      return res.send(err);
    }
  });

};

/**
 * Create Post
 */
exports.userprofile.create = function (req, res, next) {
  var newUserProfile = new UserProfile(req.body);
  newUserProfile.provider = 'local';
  newUserProfile.date = new Date().getTime();
  
  newUserProfile.save(function(err) {
    if (err) {
      return res.json(400, err);
    }
    return res.send(200);
  });
};

/**
 * Update Post
 */
exports.userprofile.save = function (req, res, next) {

  var newUserProfile = new UserProfile(req.body);
  
    UserProfile.findOneAndUpdate({ lang : req.body.lang },
      {
        main: {
          mainTitle : (req.body.main.mainTitle) ? req.body.main.mainTitle : "",
          secondaryTitle : (req.body.main.secondaryTitle) ? req.body.main.secondaryTitle : ""
        },
        skills : (req.body.skills) ? req.body.skills : [],
        projects : (req.body.projects) ? req.body.projects : [],
        contact : (req.body.contact) ? req.body.contact : [],
        experiences : (req.body.experiences) ? req.body.experiences : [],
        lang : (req.body.lang) ? req.body.lang : "",
      },
      { multi : false, upsert : true },
      function (err, p_userProfile) {
        if (err) {
          res.send(500, err);
        } else {
              res.json(p_userProfile);
        }
      }
    );
  
};