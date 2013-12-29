'use strict';

myApp.controller('PostsCtrl', ["$scope", "$location", "$routeParams", "PostService", function PostCtrl($scope, $location, $routeParams, PostService) {
    $scope.form = {};
	$scope.posts = {};
	$scope.post = {};

	$scope.GetPosts = function() {
		if(PostService.GetPostCount() <= 0) {
			PostService.GetPostsFromServer().success(function (data) {
				$scope.posts = data.posts;
			});
		}
		else {
			$scope.posts = PostService.GetPostsFromClient();
		}
	}();

	$scope.ReadPost = function(id) {
		$location.path("/readPost/" + id);
	};

	$scope.EditPost = function(id) {
		$location.path("/editPost/" + id);
	};

	$scope.DeletePost = function(id) {
		$location.path("/deletePost/" + id);
	};
}]);