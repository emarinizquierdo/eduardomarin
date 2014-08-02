'use strict';

angular.module('eduardomarinFsApp')
.directive('dynamicDirective', function factory() {
  var directiveDefinitionObject = {
    replace: true,
    restrict: 'A',
    scope: {
      moduleName: '='
    },
    controller: ['$rootScope', '$scope', '$element', '$log', '$window', function($rootScope, $scope, $element, $log, $window) {

      var scope = $scope;
      var element = $element;

      if(scope.moduleName && angular.module(scope.moduleName)){         


          var newElement = angular.element("<div " + scope.moduleName + " ></div>");

          element.append(newElement);
          
          var modules =  ['ngSanitize', scope.moduleName];
          modules.unshift(['$provide', function($provide) {
            $provide.value('$rootScope', scope);
            $provide.value('$rootElement', newElement);
          }]);                
          modules.unshift('ng');

          var injector = angular.injector(modules);
          injector.invoke(['$rootScope', '$rootElement', '$compile', '$injector',
             function(scope, element, compile, injector) {
                element.data('$injector', injector);
                compile(element)(scope);
            }]
          );                
      }

    }]
  };

  return directiveDefinitionObject;

},true);