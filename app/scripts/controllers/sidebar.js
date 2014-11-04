angular.module('eduardomarinFsApp')
    .controller('SidebarCtrl', function($scope, $timeout, $mdSidenav) {

    	$scope.showSidebar = false;

    	$scope.$watch('showSidebar', function( p_new, p_old ){
    		if(p_new != p_old) {
    			$mdSidenav('right').toggle();
    		}
    	});

    });
