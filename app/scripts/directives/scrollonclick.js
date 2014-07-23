'use strict';

angular.module('eduardomarinFsApp')
.directive('scrollOnClick', function () {
    return {
    restrict: 'A',
    controller : function($rootScope, $scope, $location){

    	$scope.onclick = function( p_target ){

    		var $target;
			if (p_target) {
				$target = $(p_target);
			} else {
				$target = $elm;
			}

			if($location.path() == "/"){
				$("body").animate({scrollTop: $target.offset().top}, "slow");
			}else{
				$rootScope.idToScroll = p_target;
			}			

    	}
    },
    link: function(scope, $elm, attrs) {

		var idToScroll = attrs.scTarget;

		$elm.on('click', function() {
			scope.onclick(idToScroll);			
		});
    }
  }
});