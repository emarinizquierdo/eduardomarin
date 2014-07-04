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

	var $head = $( '#ha-header' );
	$( '.ha-waypoint' ).each( function(i) {
		var $el = $( this ),
			animClassDown = $el.data( 'animateDown' ),
			animClassUp = $el.data( 'animateUp' );

		$el.waypoint( function( direction ) {
			if( direction === 'down' && animClassDown ) {
				$head.attr('class', 'ha-header ' + animClassDown);
			}
			else if( direction === 'up' && animClassUp ){
				$head.attr('class', 'ha-header ' + animClassUp);
			}
		}, { offset: '100%' } );
	} );


}]);
