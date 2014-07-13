'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    middleware = require('./middleware'),
    session = require('./controllers/session');

/**
 * Application routes
 */
module.exports = function(app) {
  
  //User REST
  app.post('/api/users', users.create);
  app.put('/api/users', middleware.auth, users.changePassword);
  app.get('/api/users/me', middleware.auth, users.me);
  app.get('/api/users/:id', middleware.needsRole('admin'), users.show);

  //Session REST
  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);

  //Post REST
  app.post('/api/post', middleware.needsRole('admin'), api.post.create);
  app.put('/api/post', middleware.needsRole('admin'), api.post.save);
  app.get('/api/post', api.post.all);
  app.get('/api/post/:id', api.post.show);
  app.del('/api/post/:id', middleware.needsRole('admin'), api.post.delete);

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);
};