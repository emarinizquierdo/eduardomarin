'use strict';

angular.module('eduardomarinFsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main',
      controller: 'MainCtrl'
    })
    .when('/building', {
      templateUrl: 'partials/building',
      controller: 'BuildingCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
    
  $locationProvider.html5Mode(true);
});