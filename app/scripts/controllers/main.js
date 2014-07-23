'use strict';

angular.module('eduardomarinFsApp')
.controller('MainCtrl', ['$rootScope', '$scope', '$window', '$timeout', 'Lang', function ($rootScope, $scope, $window, $timeout, Lang) {
    
    $scope._LINKEDIN = "https://www.linkedin.com/pub/eduardo-mar%C3%ADn-izquierdo/30/578/8bb";
    $scope._GOOGLEPLUS = "https://plus.google.com/u/0/+EduardoMar%C3%ADnIzquierdodeveloper/about";
    $scope._TWITTER = "https://twitter.com/emarinizquierdo";
    $scope._DUBIDUBA = "http://dubi-duba.com/";
    $scope._GEKO = "http://geko-point.appspot.com/";
    $scope._BOOKING = "https://www.flickr.com/photos/emarin/sets/72157630576198222/";
    $scope._TWITTER = "https://twitter.com/emarinizquierdo";

	$scope.translate = Lang.translate;

	$scope.goTo = function( p_url ){
		$window.open(p_url);
	}

	var _moveToScroll = function(){

		if($rootScope.idToScroll != null){
			var $target;
			$target = $($rootScope.idToScroll);
			$rootScope.idToScroll = null;
			$timeout(function(){
				$("body").animate({scrollTop: $target.offset().top}, "slow");
			},300);
			
		}

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

	_moveToScroll();

}]);
