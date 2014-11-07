'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Item Schema
 */
var PostSchema = new Schema({
  "title": String,
  "author": String,
  "body": String,
  "permalink": { type: String, index: true },
  "tags": [],
  "mainImg" : String,
  "comments": [],
  "date": Number,
  "published": Boolean
});



mongoose.model('Post', PostSchema);
