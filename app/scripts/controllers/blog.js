'use strict';

angular.module('eduardomarinFsApp')
  .controller('BlogCtrl', function ($rootScope, $scope, $location, $http, $sanitize, Auth, Post, Lang) {

    $scope.posts = [];
    $scope.postData = null;
    $scope.offset = 0;
    $scope.readedAll = false;
    $scope.loading = false;
    $scope.lang = Lang;

    function _LoadPost(){
        $scope.loading = true;
        Post.get({numPosts:20, cursor: $scope.offset}, function(data) {
       		
            $scope.posts = $scope.posts.concat(data.data);
            
            $scope.posts = _preformat($scope.posts);

            $scope.posts.total = data.total;
            $scope.offset += $scope.posts.length;
            
            if($scope.offset >= $scope.posts.total){
                $scope.readedall = true;
            }

            $scope.loading = false;

        }, function(error){
            $scope.loading = false; 
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

    $scope.loadMore = function( ){
        if(!$scope.readedall){
            _LoadPost();
        }
    }

    var _preformat = function( p_posts ){

        var _i=0;

        for( _i = 0; _i < p_posts.length; _i++ ){
            var   _raw = p_posts[_i].body
                , _div
                , _imgSrc
                ;

                _div = $("<div>" + _raw + "</div>");
                _div.find('script').remove();
                _div.find('style').remove();
                p_posts[_i].srcImg = (_div.find('img')[0]) ? _div.find('img')[0].src : null;
                _div.find('img').remove();
                _raw = _div.html();
                p_posts[_i].summary = convertHtmlToText(_raw).substr(0,500);

        }

        return p_posts;

        function convertHtmlToText( p_text ) {

            var returnText = "" + p_text;

            //-- remove all else
            returnText=returnText.replace(/<div>/g, "");
            returnText=returnText.replace(/<\/div>/g, "");

            //-- return
            return returnText;
        }

    }

    _LoadPost();

  });
