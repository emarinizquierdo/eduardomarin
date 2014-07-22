'use strict';

angular.module('eduardomarinFsApp')
  .controller('AdminCtrl', function ($scope, $http, $location, $routeParams, Auth, Post) {
    

    $scope.hasSession = false;
    $scope.errors = {};
    $scope.postData = null;
    $scope.isAdmin = Auth.isAdminLoggedIn;
    
    $scope.dt = new Date();

    $scope.opened = false;
    $scope.format = 'dd-MMMM-yyyy';

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = !$scope.opened;
    };
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.goTo = function( p_route ){
		$location.path(p_route);
	}

  	$scope.savePost = function(p_data){

        if($routeParams.id){
            Post.update(p_data, _OnSuccess, _OnError);
        }else{
            Post.create(p_data, _OnSuccess, _OnError); 
        }
        
    }

    function _OnSuccess(){
    	$location.path("/admin");
    }

    function _OnError( err ){
    	 $scope.errors.other = err.message;
    }

    function _LoadPost(){
        if($routeParams.id){
            $http.get('/api/post/' + $routeParams.id).success(function(post) {
           		$scope.postData = post;
            }).error(function(error){
                
            });
        }
    } 

    _LoadPost();

  });
