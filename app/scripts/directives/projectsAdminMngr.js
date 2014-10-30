'use strict';

angular.module('eduardomarinFsApp')
  .directive('projectsAdminMngr', function () {
    return {
      templateUrl: 'partials/admin/projectsAdminMngr.html',
      restrict: 'A',
      replace: true,
      scope : {
        userProfile : "=",
        saveHandler : "="
      },
      controller: function($rootScope, $scope, Lang){

        $scope.lang = Lang;

        $scope.newProject = function(){

          var _auxProject = {
            title : $scope.lang.translate.PROFILE.PROJECTS.CLICK_TO_EDIT,
            description : "",
            link : ""
          };

          $scope.userProfile.projects.push(_auxProject);

        };

        $scope.remove = function( p_index ){
          $scope.userProfile.projects.splice(p_index,1);
        }

        $scope.saveProjects = function(){
          $scope.saveHandler($scope.userProfile);
        }

      }
    };
  });
