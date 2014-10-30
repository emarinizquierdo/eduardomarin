'use strict';

angular.module('eduardomarinFsApp')
.controller('AdminProfileCtrl', function ($rootScope, $scope, $location, $http, Auth, UserProfile, Lang) {

    $scope.userProfile = {};
    $scope.postData = null;
    $scope.loading = false;
    $scope.lang = Lang;
    $scope.newSkill = null;
    $scope.showOtherTools = true;

    function _LoadUserProfile(){
    	$scope.loading = true;
        UserProfile.get({ lang : Lang.activeLang }, function(data) {

       		$scope.userProfile = data;

       		$scope.loading = false;

        },function(error){
            $scope.loading = false;
        });
    }

    $scope.savePost = function(p_data){

    	p_data.lang = Lang.activeLang;
        UserProfile.update(p_data, _OnSuccess, _OnError);        

    }

    function _OnSuccess(){
    	_LoadUserProfile();
    }

    function _OnError( err ){
    	 $scope.errors.other = err.message;
    }

    $scope.$watch('lang.activeLang', _LoadUserProfile);
    
    _LoadUserProfile();

});
