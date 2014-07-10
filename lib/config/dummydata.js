'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');

/**
 * Populate database with sample application data
 */

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Eduardo Marin',
    email: 'e.marin.izquierdo@gmail.com',
    password: 'sesamo',
    role : 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

