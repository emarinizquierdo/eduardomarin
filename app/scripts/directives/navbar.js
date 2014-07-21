'use strict';

angular.module('eduardomarinFsApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'partials/navbar.html',
      restrict: 'A',
      controller: function($rootScope, $scope, $location, Auth){
      	    $scope.isAdmin = Auth.isAdminLoggedIn();
      	    
      	    $scope.inMain = ($location.$$path == '/');

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
