'use strict';

angular.module('eduardomarinFsApp')
  .directive('skrollr', function() {
    var directiveDefinitionObject = {
      link: function() {
        skrollr.init();
      }
    };

    return directiveDefinitionObject;
  });