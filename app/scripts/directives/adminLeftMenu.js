'use strict';

angular.module('eduardomarinFsApp')
  .directive('adminLeftMenu', function () {
    return {
      templateUrl: 'partials/admin/adminLeftMenu.html',
      restrict: 'A',
      replace: true,
      scope : true,
      controller: function($rootScope, $scope, Lang){

        $scope.lang = Lang;

      }
    };
  });
