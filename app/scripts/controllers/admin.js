'use strict';

angular.module('eduardomarinFsApp')
  .controller('AdminCtrl', function ($scope, $http, $location, $routeParams, Auth, Post, Lang, Utils) {
    
    $scope.lang = Lang;
    $scope.hasSession = false;
    $scope.errors = {};
    $scope.postData = null;
    
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

        p_data.tags = (!p_data.stringTags || p_data.stringTags == "") ? [] : p_data.stringTags.split(",");
        for(var _i=0; _i < p_data.tags.length; _i++){
            p_data.tags[_i] = p_data.tags[_i].trim().replace(/ /g, "-");
        }
        p_data.permalink = Utils.amigable(p_data.title);

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
                $scope.postData.stringTags = Utils.amigable(p_data.tags[_i].trim());
            }).error(function(error){
                
            });
        }
    } 

    _LoadPost();

  });
