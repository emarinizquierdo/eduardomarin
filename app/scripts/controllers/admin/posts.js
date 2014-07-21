'use strict';

angular.module('eduardomarinFsApp')
.controller('AdminPostsCtrl', function ($rootScope, $scope, $location, $http, Auth, Post) {
    $scope.posts = [];
    $scope.postData = null;
    $scope.isAdmin = Auth.isAdminLoggedIn();

    function _LoadPost(){
        $http.get('/api/post/').success(function(data) {
       		
       		$scope.posts = data.data;

        }).error(function(error){
            
        });
    }

    $scope.DeletePost = function( p_id ){
        Post.delete({id : p_id}, function(data) {
       		
       		 _LoadPost();

        }, function(error){
            
        });
    }

    $scope.goTo = function( p_entry ){
    	$location.path("/admin/post/" + p_entry);
    }

    _LoadPost();

});
