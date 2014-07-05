'use strict';

angular.module('eduardomarinFsApp')
.controller('MainCtrl', ['$scope', '$window', 'Lang', function ($scope, $window, Lang) {
    
    $scope._LINKEDIN = "https://www.linkedin.com/pub/eduardo-mar%C3%ADn-izquierdo/30/578/8bb";
    $scope._GOOGLEPLUS = "https://plus.google.com/u/0/+EduardoMar%C3%ADnIzquierdodeveloper/about";
    $scope._TWITTER = "https://twitter.com/emarinizquierdo";

	$scope.translate = Lang.translate;

	$scope.goTo = function( p_url ){
		$window.open(p_url);
	}

	var   $mainTitle = $( '.main-title' )
		, $photoProfile = $('.photo-profile');

	$( '.ha-waypoint' ).each( function(i) {
		var $el = $( this ),
			animClassDown = $el.data( 'animateDown' ),
			animClassUp = $el.data( 'animateUp' );

		$el.waypoint( function( direction ){
			if( direction === 'down' && animClassDown ) {
				$mainTitle.addClass(animClassDown);
				$photoProfile.addClass(animClassDown);
				$mainTitle.removeClass(animClassUp);
				$photoProfile.removeClass(animClassUp);
			}
			else if( direction === 'up' && animClassUp ){
				$mainTitle.addClass(animClassUp);
				$photoProfile.addClass(animClassUp);
				$mainTitle.removeClass(animClassDown);
				$photoProfile.removeClass(animClassDown);
			}
		}, { offset: '100%' } );
	} );


}]);
