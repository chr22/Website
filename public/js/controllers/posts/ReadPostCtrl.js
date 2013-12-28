'use strict';

myApp.controller('ReadPostCtrl', ["$scope", "$routeParams", "PostService", function ReadPostCtrl($scope, $routeParams, PostService) {
	$scope.post = {};

	$scope.ReadPost = function() {
		$scope.post = PostService.GetPost($routeParams.id);
	}();

}]);
