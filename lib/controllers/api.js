'use strict';

var mongoose = require('mongoose'),
    Post = mongoose.model('Post'),
    UserProfile = mongoose.model('UserProfile'),
    ObjectId = mongoose.Types.ObjectId;

/**
 *  Post services
 **/
exports.post = {};

/* Get all Posts */
exports.post.all = function(req, res) {

    var cursorPointer = req.query.cursor,
        numPosts = req.query.numPosts,
        _query = (req.query.published) ? (req.query.tag) ? {
            published: true,
            tags: req.query.tag
        } : {
            published: true
        } : {};

    var query = Post.find(_query)
        .sort({
            date: -1
        })
        .skip(cursorPointer)
        .limit(numPosts);

    Post.count(_query, function(err, total) {
        if (!err) {
            query.execFind(function(err, posts) {
                if (!err) {
                    return res.json({
                        total: total,
                        data: posts
                    });
                } else {
                    return res.send(err);
                }
            });
        } else {
            return res.send(err);
        }
    });

};

/* Show Post details */
exports.post.show = function(req, res, next) {
    var postId = req.params.id,
        _query = {};

    function validHex(p_value) {
        return /^([A-F0-9]{24})$/i.test(p_value);
    }

    if (validHex(postId.substr(0, 24))) {
        _query = {
            _id: ObjectId(postId.substr(0, 24))
        }
    } else {
        _query = {
            permalink: postId
        }
    }

    Post.findOne(_query,
        function(err, p_post) {

            if (err) return next(new Error('Failed to load Post', err));

            if (p_post && p_post) {
                return res.json(p_post);
            } else {
                res.send(404, 'Post_NOT_FOUND');
            }
        });
};

/**
 * Create Post
 */
exports.post.create = function(req, res, next) {
    var newPost = new Post(req.body);
    newPost.provider = 'local';
    newPost.date = new Date().getTime();

    newPost.save(function(err, p_post) {
        if (err) {
            return res.json(400, err);
        }
        return res.json(p_post);
    });
};

/**
 * Update Post
 */
exports.post.save = function(req, res, next) {
    var newPost = req.body;

    Post.update({
            _id: req.body._id
        }, {

            "title": (newPost.title) ? newPost.title : "",
            "author": (newPost.author) ? newPost.author : "",
            "body": (newPost.body) ? newPost.body : "",
            "permalink": (newPost.permalink) ? newPost.permalink : "",
            "tags": (newPost.tags) ? newPost.tags : [],
            "mainImg": (newPost.mainImg) ? newPost.mainImg : "",
            "comments": (newPost.comments) ? newPost.comments : [],
            "date": (newPost.date) ? newPost.date : new Date().getTime(),
            "published": (typeof newPost.published != "undefined") ? newPost.published : true,
        }, {
            multi: false
        },
        function(err, num_affected, p_post) {
            if (err) {
                res.send(500, err);
            } else {
                Post.findOne({
                        _id: req.body._id
                    },
                    function(err, p_post) {

                        if (err) return next(new Error('Failed to load Post', err));

                        if (p_post && p_post) {
                            return res.json(p_post);
                        } else {
                            res.send(404, 'Post_NOT_FOUND');
                        }
                    });
            }
        });
};

/**
 * Remove Post
 */
exports.post.delete = function(req, res, next) {
    Post.remove({
            _id: req.params.id
        },
        function(err, p_post) {
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
exports.userprofile.show = function(req, res, next) {

    var query = UserProfile.find({
        lang: req.query.lang || "es"
    }).limit(1);

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
exports.userprofile.create = function(req, res, next) {
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
exports.userprofile.save = function(req, res, next) {

    var newUserProfile = new UserProfile(req.body);

    UserProfile.findOneAndUpdate({
            lang: req.body.lang
        }, {
            main: {
                mainTitle: (req.body.main.mainTitle) ? req.body.main.mainTitle : "",
                secondaryTitle: (req.body.main.secondaryTitle) ? req.body.main.secondaryTitle : ""
            },
            skills: (req.body.skills) ? req.body.skills : [],
            projects: (req.body.projects) ? req.body.projects : [],
            contact: (req.body.contact) ? req.body.contact : [],
            experiences: (req.body.experiences) ? req.body.experiences : [],
            lang: (req.body.lang) ? req.body.lang : "",
        }, {
            multi: false,
            upsert: true
        },
        function(err, p_userProfile) {
            if (err) {
                res.send(500, err);
            } else {
                res.json(p_userProfile);
            }
        }
    );

};
