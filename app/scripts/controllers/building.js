'use strict';

angular.module('eduardomarinFsApp')
  .controller('BuildingCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  })

.directive('countDown', [function (){
    return {
      template: '<canvas width="47" height="30" style="margin-top: 100px;"></canvas>',
      restrict: 'A',
      replace: true,
      scope: {
            canvasWidth : "="
          , canvasHeight : "="
          , progressValue : "="
          , progressTotal : "="
          , outerCircleWidth : "="
          , innerCircleWidth : "="
          , outerCircleBackgroundColor : "="
          , outerCircleForegroundColor : "="
          , innerCircleColor : "="
          , labelColor : "="
          , outerCircleRadius : "="
          , innerCircleRadius : "="
          , labelFont : "="
      },
      controller: ['$scope', '$element', '$interval', function($scope, $element, $interval){
    	
            $scope.width = $scope.canvasWidth || '47';
            $scope.height = $scope.canvasHeight || '30';
            $scope.canvas = $element[0];

            var outerCircleWidth = $scope.outerCircleWidth ||'9';
            var innerCircleWidth = $scope.innerCircleWidth ||'9';

            var outerCircleBackgroundColor = $scope.outerCircleBackgroundColor || '#ffffff';
            var outerCircleForegroundColor = $scope.outerCircleForegroundColor || '#c3165b';
            var innerCircleColor = $scope.innerCircleColor || '#ffffff';
            var labelColor = $scope.labelColor || '#c3165b';

            var outerCircleRadius = $scope.outerCircleRadius || '9';
            var innerCircleRadius = $scope.innerCircleRadius || '6';

            var labelFont = $scope.labelFont || '13px';

            var ctx = $scope.canvas.getContext('2d');
            
            _draw($scope.progressValue, $scope.progressTotal);

            function _draw( p_value, p_total ){

              var   _auxLabel = Math.round(p_value)
                  , label = ( _auxLabel <= 0 ) ? 1 : _auxLabel
                  , percentage = p_value / p_total;

              // The "background" circle
              var x = $scope.height / 2;
              var y = $scope.height / 2;

              ctx.clearRect(0, 0, $scope.width, $scope.height);
              ctx.beginPath();
              ctx.arc(x, y, parseInt(outerCircleRadius), 0, Math.PI * 2, false);
              ctx.lineWidth = parseInt(outerCircleWidth);
              ctx.strokeStyle = outerCircleBackgroundColor;
              ctx.stroke();

              // The border circle
              ctx.beginPath();
              ctx.arc(x, y, parseInt(outerCircleRadius) + 5, 0, Math.PI * 2, false);
              ctx.lineWidth = 1;
              ctx.strokeStyle = outerCircleForegroundColor;
              ctx.stroke();

              // The "foreground" circle
              var startAngle = - (Math.PI / 2);
              var endAngle = ((Math.PI * 2 ) * percentage) - (Math.PI / 2);
              var anticlockwise = false;
              ctx.beginPath();
              ctx.arc(x, y, parseInt(outerCircleRadius), startAngle, endAngle, anticlockwise);
              ctx.lineWidth = parseInt(outerCircleWidth);
              ctx.strokeStyle = outerCircleForegroundColor;
              ctx.stroke();

              // The inner circle
              ctx.beginPath();
              ctx.arc(x, y, parseInt(innerCircleRadius), 0, Math.PI * 2, false);
              ctx.lineWidth = parseInt(innerCircleWidth);
              ctx.strokeStyle = innerCircleColor;
              ctx.stroke();

              // The inner label
              ctx.font = labelFont;
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillStyle = labelColor;
              if(p_value < 1){
                if(p_value < (60/3600)){
                  ctx.fillText(Math.round(3600 * p_value), x, y);
                }else{
                  ctx.fillText(Math.round(60 * p_value), x, y);
                }
              }else{
                ctx.fillText(label, x, y);
              }  

              // The outter label
              ctx.font = "12px bbvaDefaultFont, Arial, 'Helvetica Neue'";
              ctx.textAlign = 'right';
              ctx.textBaseline = 'middle';
              ctx.fillStyle = labelColor;
              var _xOffset = 30;
              if(p_value < 1){
                if(p_value < (60/3600)){
                  ctx.fillText(" s.", x + _xOffset, y);
                }else{
                  ctx.fillText(" m.", x + _xOffset, y);
                }
              }else{
                ctx.fillText(" h.", x + _xOffset, y);
              }             

            }

            $scope.$watch('progressValue', function(){_draw($scope.progressValue, $scope.progressTotal);});

      }]
    };
  }]);


