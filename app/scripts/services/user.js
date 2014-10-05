'use strict';

angular.module('eduardomarinFsApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id', {
      id: '@id'
    }, { //parameters default
      update: {
        method: 'PUT',
        params: {}
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  });

angular.module('eduardomarinFsApp')
  .factory('UserProfile', function ($resource) {
    return $resource('/api/userprofile', {
    }, { //parameters default
      create: {
        method: 'POST'
      },
      update: {
        method: 'PUT'
      },
      get: {
        method: 'GET',
        params: {
          lang:'@lang'
        }
      }
    });
  });