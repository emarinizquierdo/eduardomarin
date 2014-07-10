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
  "permalink":String,
  "tags": String,
  "comments": [],
  "date": Number
});



mongoose.model('Post', PostSchema);
