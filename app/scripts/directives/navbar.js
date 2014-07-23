'use strict';

angular.module('eduardomarinFsApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'partials/navbar.html',
      restrict: 'A',
      controller: function($rootScope, $scope, $location, Auth){

        $scope.menu = [

          {
              name : "Home"
            , path : "/"
            , target : "#home"
            , inmain : true
          },
          {
              name : "Skills"
            , path : "/"
            , target : "#skills"
            , inmain : true
          },
          {
              name : "Projects"
            , path : "/"
            , target : "#projects"
            , inmain : true
          },
          {
              name : "Contact"
            , path : "/"
            , target : "#contact"
            , inmain : true
          },
          {
              name : "More info"
            , path : "/"
            , target : "#more-info"
            , inmain : true
          },
          {
              name : "Blog"
            , path : "/blog"
            , target : "#blog"
            , inmain : false
          }

        ];

        $scope.isAdmin = Auth.isAdminLoggedIn();

        $scope.inMain = ($location.$$path == '/');

        $scope.activeTarget = ($location.$$path == '/') ? "#home" : $location.$$path.replace('/','#');

        $scope.setActive = function( p_target ){
          $scope.activeTarget = p_target;
        };

        $scope.logout = function() {
          Auth.logout()
          .then(function() {
            $location.path('/login');
          });
        };

        // Redirect to login if route requires auth and you're not logged in
        $rootScope.$on('$routeChangeStart', function (event, next) {
          $scope.inMain = ($location.$$path == '/');				
        });
      }
    };
  });
