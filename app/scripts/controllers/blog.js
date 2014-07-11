'use strict';

angular.module('eduardomarinFsApp')
  .controller('BlogCtrl', function ($rootScope, $scope, $http, Auth, Post) {
    
    $scope.posts = [];
    $scope.postData = null;
    $scope.isAdmin = Auth.isAdminLoggedIn();

    function _LoadPost(){
        $http.get('/api/post/').success(function(data) {
       		
       		$scope.posts = data.data;

        }).error(function(error){
            
        });
    }

    $scope.savePost = function(p_data){

        Post.create(p_data, function(){
        	_LoadPost();
        }); 
        
    }

    _LoadPost();

  });
