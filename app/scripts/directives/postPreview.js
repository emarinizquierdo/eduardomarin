'use strict';

angular.module('eduardomarinFsApp')
    .directive('postPreview', function() {
        return {
            templateUrl: 'partials/postPreview.html',
            restrict: 'A',
            replace: true,
            scope: true,
            controller: function($rootScope, $scope, Lang) {

                $scope.lang = Lang;

                var _prettyColors = [{
                    background: "#E91E63",
                    color: "#FFF"
                }, {
                    background: "#212121",
                    color: "#CCC"
                }, {
                    background: "#8E24AA",
                    color: "#FFF"
                }, {
                    background: "#42A5F5",
                    color: "rgba(0,0,0,0.87)"
                }, {
                    background: "#FFEE58",
                    color: "rgba(0,0,0,0.87)"
                }, {
                    background: "#FF5722",
                    color: "#FFF"
                }, ];


                

                $scope.randomColor = _prettyColors[Math.floor(Math.random() * _prettyColors.length + 1)];

            }
        };
    });
