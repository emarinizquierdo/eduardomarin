'use strict';

angular.module('eduardomarinFsApp')
  .directive('skillsAdminMngr', function () {
    return {
      templateUrl: 'partials/admin/skillsAdminMngr.html',
      restrict: 'A',
      replace: true,
      scope : {
        userProfile : "=",
        saveHandler : "="
      },
      controller: function($rootScope, $scope, Lang){

        $scope.lang = Lang;

        $scope.newSkill = function(){

          var _auxSkill = {
            title : $scope.lang.translate.PROFILE.SKILLS.CLICK_TO_EDIT,
            description : "",
            link : "",
            logo : ""
          };

          $scope.userProfile.skills.push(_auxSkill);

        };

        $scope.remove = function( p_index ){
          $scope.userProfile.skills.splice(p_index,1);
        }

        $scope.saveSkills = function(){
          $scope.saveHandler($scope.userProfile);
        }

      }
    };
  });
