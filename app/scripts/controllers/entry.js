'use strict';

angular.module('eduardomarinFsApp')
    .controller('EntryCtrl', function($scope, $http, $location, $routeParams, $window, Post) {

        $scope.postData = null;
        $scope.loading = false;
        $scope.url = $location.$$absUrl;

        function _LoadPost() {

            if ($routeParams.id) {

                $scope.loading = true;

                Post.get({
                    id: $routeParams.id
                }, function(data) {
                    $scope.loading = false;
                    $scope.postData = data;
                    $window.document.title = $scope.postData.title + "- " + "Eduardo Marín Izquierdo ";
                    $scope.contentLoaded = true;
                }, function(error) {
                    $scope.loading = false;
                });
            }
        };

        var $haHeader = $('.ha-header'),
            $mainTitle = $('.main-title'),
            $photoProfile = $('.photo-profile');

        $('.ha-waypoint').each(function(i) {
            var $el = $(this),
                animClassDown = $el.data('animateDown'),
                animClassUp = $el.data('animateUp');

            $el.waypoint(function(direction) {
                if (direction === 'down' && animClassDown) {
                    $haHeader.addClass(animClassDown);
                    $mainTitle.addClass(animClassDown);
                    $photoProfile.addClass(animClassDown);
                    $haHeader.removeClass(animClassUp);
                    $mainTitle.removeClass(animClassUp);
                    $photoProfile.removeClass(animClassUp);
                } else if (direction === 'up' && animClassUp) {
                    $haHeader.addClass(animClassUp);
                    $mainTitle.addClass(animClassUp);
                    $photoProfile.addClass(animClassUp);
                    $haHeader.removeClass(animClassDown);
                    $mainTitle.removeClass(animClassDown);
                    $photoProfile.removeClass(animClassDown);
                }
            }, {
                offset: '100%'
            });
        });

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

        _LoadPost();

       
stButtons.makeButtons();
    });
