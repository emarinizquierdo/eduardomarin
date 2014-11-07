'use strict';

angular.module('eduardomarinFsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'textAngular',
  'ui.bootstrap',
  'ngMaterial',
  'angularUtils.directives.dirDisqus'
])
.config(function ($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main',
      controller: 'MainCtrl'
    })
    .when('/login', {
      templateUrl: 'partials/login',
      controller: 'LoginCtrl'
    })
    .when('/building', {
      templateUrl: 'partials/building',
      controller: 'BuildingCtrl'
    })
    .when('/blog/', {
      templateUrl: 'partials/blog',
      controller: 'BlogCtrl'
    })
    .when('/blog/page/:offset/:limit', {
      templateUrl: 'partials/blog',
      controller: 'BlogCtrl'
    })
    .when('/admin', {
      templateUrl: 'partials/admin',
      controller: 'AdminCtrl',
      authenticate: true
    })
    .when('/blog/entry/:id', {
      templateUrl: 'partials/entry',
      controller: 'EntryCtrl'
    })
    .when('/admin/post/:id', {
      templateUrl: 'partials/admin/post',
      controller: 'AdminPostCtrl',
      authenticate: true
    })
    .when('/admin/posts', {
      templateUrl: 'partials/admin/posts',
      controller: 'AdminPostsCtrl',
      authenticate: true
    })
    .when('/admin/profile', {
      templateUrl: 'partials/admin/profile',
      controller: 'AdminProfileCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
    
  $locationProvider.html5Mode(true);

  // Intercept 401s and 403s and redirect you to login
  $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
    return {
      'responseError': function(response) {
        if(response.status === 401 || response.status === 403) {
          $location.path('/login');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  }]);

})
.run(function ($rootScope, $location, $window, Auth, User) {

  // Redirect to login if route requires auth and you're not logged in
  $rootScope.$on('$routeChangeStart', function (event, next) {
    $window.document.title = "Eduardo Marín Izquierdo";
    if (next.authenticate && !Auth.isLoggedIn()) {
      $location.path('/login');
    }
  });
    
});