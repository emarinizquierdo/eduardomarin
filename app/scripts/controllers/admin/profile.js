'use strict';

angular.module('eduardomarinFsApp')
.controller('AdminProfileCtrl', function ($rootScope, $scope, $location, $http, Auth, UserProfile, Lang) {

    $scope.userProfile = {};
    $scope.postData = null;
    $scope.loading = false;
    $scope.lang = Lang;

    function _LoadUserProfile(){
    	$scope.loading = true;
        UserProfile.get({}, function(data) {

       		$scope.userProfile = data;

       		$scope.loading = false;

        },function(error){
            $scope.loading = false;
        });
    }

    $scope.savePost = function(p_data){

        UserProfile.update(p_data, _OnSuccess, _OnError);        

    }

    function _OnSuccess(){
    	_LoadUserProfile();
    }

    function _OnError( err ){
    	 $scope.errors.other = err.message;
    }

    _LoadUserProfile();

});
