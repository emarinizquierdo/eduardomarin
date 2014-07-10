'use strict';

angular.module('eduardomarinFsApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
