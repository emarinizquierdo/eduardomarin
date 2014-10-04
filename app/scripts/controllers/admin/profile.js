'use strict';

angular.module('eduardomarinFsApp')
.controller('AdminProfileCtrl', function ($rootScope, $scope, $location, $http, Auth, Post, Lang) {

    $scope.posts = [];
    $scope.postData = null;
    $scope.offset = 0;
    $scope.readedAll = false;
    $scope.loading = false;
    $scope.lang = Lang;

    function _LoadPost(){
    	$scope.loading = true;
        Post.get({numPosts:20, cursor: $scope.offset}, function(data) {

       		$scope.posts = $scope.posts.concat(data.data);
       		$scope.posts.total = data.total;
       		$scope.offset += $scope.posts.length;
       		
       		if($scope.offset >= $scope.posts.total){
       			$scope.readedall = true;
       		}

       		$scope.loading = false;

        },function(error){
            $scope.loading = false;
        });
    }

    $scope.DeletePost = function( p_id ){
        Post.delete({id : p_id}, function(data) {
       		
       		 _LoadPost();

        }, function(error){
            
        });
    }

    $scope.goTo = function( p_hash ){
    	$location.path( p_hash );
    }

    $scope.loadMore = function( ){
    	if(!$scope.readedall){
    		_LoadPost();
    	}
    }

    _LoadPost();

});
