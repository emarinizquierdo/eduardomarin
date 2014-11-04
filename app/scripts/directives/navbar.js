'use strict';

angular.module('eduardomarinFsApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'partials/navbar.html',
      restrict: 'A',
      scope : {
        showSidebar : "="
      },
      controller: function($rootScope, $scope, $location){

        $scope.inMain = ($location.$$path == '/');

        $scope.activeTarget = ($location.$$path == '/') ? "#home" : $location.$$path.replace('/','#');

        // Redirect to login if route requires auth and you're not logged in
        $rootScope.$on('$routeChangeStart', function (event, next) {
          $scope.inMain = ($location.$$path == '/');				
        });
      }
    };
  });
