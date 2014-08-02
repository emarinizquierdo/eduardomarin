'use strict';

angular.module('eduardomarinFsApp')
.filter('unsafe', function($sce) {
    return function(val, scope) {
        return scope.$eval($sce.trustAsHtml(val));
    };
});