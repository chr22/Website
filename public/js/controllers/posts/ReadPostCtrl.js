'use strict';

myApp.controller('ReadPostCtrl', ["$scope", "$routeParams", "PostService", "$location", function ReadPostCtrl($scope, $routeParams, PostService, $location) {
	$scope.post = {};

	$scope.ReadPost = function() {
		$scope.post = PostService.GetPost($routeParams.id);
	}();
	
	$scope.EditPost = function(id) {
		$location.path("/editPost/" + id);
	};
	
	$scope.DeletePost = function(id) {
		$location.path("/deletePost/" + id);
	};

}]);
