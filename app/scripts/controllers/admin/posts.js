'use strict';

angular.module('eduardomarinFsApp')
    .controller('AdminPostsCtrl', function($rootScope, $scope, $location, $http, $mdDialog, Auth, Post, Lang) {

        $scope.posts = [];
        $scope.postData = null;
        $scope.offset = 0;
        $scope.readedAll = false;
        $scope.loading = false;
        $scope.lang = Lang;

        function _LoadPost() {
            $scope.loading = true;
            Post.get({
                numPosts: 20,
                cursor: $scope.offset
            }, function(data) {

                $scope.posts = $scope.posts.concat(data.data);
                $scope.posts.total = data.total;
                $scope.offset += $scope.posts.length;

                if ($scope.offset >= $scope.posts.total) {
                    $scope.readedall = true;
                }

                $scope.loading = false;

            }, function(error) {
                $scope.loading = false;
            });
        }

        $scope.DeletePost = function(p_id) {
            Post.delete({
                id: p_id
            }, function(data) {

                _LoadPost();

            }, function(error) {

            });
        }

        $scope.goTo = function(p_hash) {
            $location.path(p_hash);
        }

        $scope.loadMore = function() {
            if (!$scope.readedall) {
                _LoadPost();
            }
        }

        $scope.dialogBasic = function(ev, p_id) {
            $mdDialog.show({
                templateUrl: 'partials/admin/deleteDialog.html',
                targetEvent: ev,
                controller: DialogController
            }).then(function() {
                $scope.DeletePost(p_id);
            }, function() {
            });
        };

        function DialogController($scope, $mdDialog, Lang) {

            $scope.lang = Lang;

            $scope.hide = function() {
                $mdDialog.hide();
            };

            $scope.cancel = function() {
                $mdDialog.cancel();
            };

            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        }

        _LoadPost();

    });
