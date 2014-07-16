'use strict';

angular.module('eduardomarinFsApp')
  .controller('BlogCtrl', function ($rootScope, $scope, $location, $http, Auth, Post) {
    
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

    $scope.goTo = function( p_entry ){
    	$location.path("/blog/entry/" + p_entry);
    }

    var   $haHeader = $( '.ha-header' )
		, $mainTitle = $( '.main-title' )
		, $photoProfile = $('.photo-profile');

	$( '.ha-waypoint' ).each( function(i) {
		var $el = $( this ),
			animClassDown = $el.data( 'animateDown' ),
			animClassUp = $el.data( 'animateUp' );

		$el.waypoint( function( direction ){
			if( direction === 'down' && animClassDown ) {
				$haHeader.addClass(animClassDown);
				$mainTitle.addClass(animClassDown);
				$photoProfile.addClass(animClassDown);
				$haHeader.removeClass(animClassUp);
				$mainTitle.removeClass(animClassUp);
				$photoProfile.removeClass(animClassUp);
			}
			else if( direction === 'up' && animClassUp ){
				$haHeader.addClass(animClassUp);
				$mainTitle.addClass(animClassUp);
				$photoProfile.addClass(animClassUp);
				$haHeader.removeClass(animClassDown);
				$mainTitle.removeClass(animClassDown);
				$photoProfile.removeClass(animClassDown);
			}
		}, { offset: '100%' } );
	} );


    _LoadPost();

  });
