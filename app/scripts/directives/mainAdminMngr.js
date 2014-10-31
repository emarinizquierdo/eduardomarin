'use strict';

angular.module('eduardomarinFsApp')
  .directive('mainAdminMngr', function () {
    return {
      templateUrl: 'partials/admin/mainAdminMngr.html',
      restrict: 'A',
      replace: true,
      scope : {
        userProfile : "=",
        saveHandler : "="
      },
      controller: function($rootScope, $scope, Lang){

        $scope.lang = Lang;

        $scope.saveMain = function(){
          $scope.saveHandler($scope.userProfile);
        }

      }
    };
  });
