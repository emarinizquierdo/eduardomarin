'use strict';

angular.module('eduardomarinFsApp')
.controller('EntryCtrl', function ($scope, $http, $routeParams, Post) {
    
    $scope.postData = null;

    function _LoadPost(){
    	if($routeParams.id){

	        Post.get({ id : $routeParams.id }, function(data) {
	       		
	       		$scope.postData = data;

	        },function(error){
	            
	        });
	    }
    };

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
