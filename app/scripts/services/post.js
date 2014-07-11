'use strict';

angular.module('eduardomarinFsApp')
  .factory('Post', function ($resource) {
    return $resource('/api/post/:id', { id: '@id' },
    { //parameters default
      create: {
        method: 'POST'
      },
      update: {
        method: 'PUT'
      },
      get: {
        method: 'GET'
      },
      delete: {
        method: 'DELETE'
      }
	  });
  });