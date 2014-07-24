'use strict';

angular.module('eduardomarinFsApp')
  .controller('BlogCtrl', function ($rootScope, $scope, $location, $http, Auth, Post) {
    
    $scope.isAdmin = Auth.isAdminLoggedIn();

    $scope.posts = [];
    $scope.postData = null;
    $scope.offset = 0;
    $scope.readedAll = false;
    $scope.loading = false;    

    function _LoadPost(){
        $scope.loading = true;
        Post.get({numPosts:10, cursor: $scope.offset}, function(data) {
       		
            $scope.posts = $scope.posts.concat(data.data);
            $scope.posts.total = data.total;
            $scope.offset += $scope.posts.length;
            
            if($scope.offset >= $scope.posts.total){
                $scope.readedall = true;
            }

            $scope.loading = false;

        }, function(error){
            $scope.loading = false; 
        });
    }

    $scope.savePost = function(p_data){

        Post.create(p_data, function(){
        	_LoadPost();
        }); 
        
    }

    $scope.goTo = function( p_entry ){
    	$location.path("/blog/entry/" + p_entry);
    }

    $scope.loadMore = function( ){
        if(!$scope.readedall){
            _LoadPost();
        }
    }

    _LoadPost();

  });
