'use strict';

angular.module('eduardomarinFsApp')
  .directive('experiencesAdminMngr', function () {
    return {
      templateUrl: 'partials/admin/experiencesAdminMngr.html',
      restrict: 'A',
      replace: true,
      scope : {
        userProfile : "=",
        saveHandler : "="
      },
      controller: function($rootScope, $scope, Lang){

        $scope.lang = Lang;

        $scope.newExperience = function(){

          var _auxExperience = {
            company : $scope.lang.translate.PROFILE.EXPERIENCES.CLICK_TO_EDIT,
            job : "",
            period : "",
            description : "",
            link : ""
          };

          $scope.userProfile.experiences.push(_auxExperience);

        };

        $scope.remove = function( p_index ){
          $scope.userProfile.experiences.splice(p_index,1);
        }

        $scope.saveExperiences = function(){
          $scope.saveHandler($scope.userProfile);
        }

      }
    };
  });
