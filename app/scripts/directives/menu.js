'use strict';

angular.module('eduardomarinFsApp')
  .directive('menu', function () {
    return {
      templateUrl: 'partials/menu.html',
      restrict: 'A',
      scope : {
        showSidebar : "="
      },
      controller: function($rootScope, $scope, $location, Auth, Lang){

        $scope.lang = Lang;

        $scope.menu = [

          {
              name : $scope.lang.translate.MENU.HOME
            , path : "/"
            , target : "#home"
            , inmain : true
          },
          {
              name : $scope.lang.translate.MENU.SKILLS
            , path : "/"
            , target : "#skills"
            , inmain : true
          },
          {
              name : $scope.lang.translate.MENU.PROJECTS
            , path : "/"
            , target : "#projects"
            , inmain : true
          },
          {
              name : $scope.lang.translate.MENU.CONTACT
            , path : "/"
            , target : "#contact"
            , inmain : true
          },
          {
              name : $scope.lang.translate.MENU.MOREINFO
            , path : "/"
            , target : "#more-info"
            , inmain : true
          },
          {
              name : $scope.lang.translate.MENU.BLOG
            , path : "/blog"
            , target : "#blog"
            , inmain : false
          }

        ];

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

        $scope.changeLang = function( p_lang ){
          Lang.setActiveLang(p_lang);
        };

        $scope.closeSidebar = function(){
          $scope.showSidebar = false;
        }

        // Redirect to login if route requires auth and you're not logged in
        $rootScope.$on('$routeChangeStart', function (event, next) {
          $scope.inMain = ($location.$$path == '/');		
        });
      }
    };
  });
