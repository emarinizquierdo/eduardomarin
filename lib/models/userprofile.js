'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * UserProfile Schema
 */
var UserProfileSchema = new Schema({
  "main": {
  	  "mainTitle" : String
  	, "secondaryTitle" : String
  },
  "skills": [],
  "projects" : [],
  "contact" : [],
  "moreInfo" : [],
  "lang" : String
});



mongoose.model('UserProfile', UserProfileSchema);
