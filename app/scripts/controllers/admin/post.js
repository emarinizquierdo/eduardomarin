'use strict';

angular.module('eduardomarinFsApp')
.controller('AdminPostCtrl', function ($scope, $http, $location, $routeParams, $timeout, $mdToast, Auth, Post, Lang, Utils) {

    $scope.hasSession = false;
    $scope.errors = {};
    $scope.postData = null;
    $scope.lang = Lang;
    
    $scope.dt = new Date();

    $scope.opened = false;
	$scope.format = 'dd-MMMM-yyyy';

    $scope.toastPosition = {
            bottom: false,
            top: true,
            left: false,
            right: true
        };

    var _staticPermalink;

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

  	$scope.savePost = function(p_data, p_stay){

        p_data.tags = (!p_data.stringTags || p_data.stringTags == "") ? [] : p_data.stringTags.split(",");
        for(var _i=0; _i < p_data.tags.length; _i++){
            p_data.tags[_i] = Utils.amigable(p_data.tags[_i].trim());
        }
  		p_data.date = $scope.dt.getTime();
        p_data.permalink = Utils.amigable(p_data.title);

        var _onSuccess = (p_stay) ? _OnAutoSaveSuccess : _OnSuccess;
        if($routeParams.id){
            Post.update(p_data, _onSuccess, _OnError);
        }else{
            Post.create(p_data, _onSuccess, _OnError); 
        }
        
    }

    $scope.getToastPosition = function() {
            return Object.keys($scope.toastPosition)
                .filter(function(pos) {
                    return $scope.toastPosition[pos];
                })
                .join(' ');
        };

        $scope.toastIt = function() {
            $mdToast.show({
                template: '<md-toast>Post guardado automáticamente</md-toast>',
                hideDelay: 2000,
                position: $scope.getToastPosition()
            });
        };

    function _OnSuccess(){
    	$location.path("/admin/posts");
    }

    function _OnAutoSaveSuccess( p_data ) {
            $routeParams.id = p_data.permalink;
            $scope.postData._id = p_data._id
        }

    function _OnError( err ){
    	 $scope.errors.other = err.message;
    }

    function _LoadPost(){
        if($routeParams.id){
            $http.get('/api/post/' + $routeParams.id).success(function(post) {
           		$scope.postData = post;
                $scope.postData.stringTags = post.tags.join(", ").replace(/-/g, " ");
                _staticPermalink = $scope.postData.permalink;
           		$scope.dt = new Date($scope.postData.date);
            }).error(function(error){
                
            });
        }
    } 

    function _AutoSave(){
            
            $timeout(function(){
                var _path = ($scope.postData.title) ? "/admin/post/" + _staticPermalink : "";
                if($location.$$path == _path){
                    if($scope.postData.title && $scope.postData.title != "") {
                        $scope.savePost($scope.postData, true);
                    }
                    $scope.toastIt();
                    _AutoSave();
                }
            },60000);

        }

    _LoadPost();

    _AutoSave();

});
