'use strict';

/* Controllers */

myApp.controller('BaseCtrl', ["$scope", "$http", function BaseCtrl($scope, $http) {

}]);

myApp.controller('IndexCtrl', ["$scope", "$http", function IndexCtrl($scope, $http) {

}]);

myApp.controller('PostsCtrl', ["$scope", "$http", "$location", "$routeParams", "$rootScope", "PostService", function PostCtrl($scope, $http, $location, $routeParams, $rootScope, PostService) {
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

myApp.controller('ReadPostCtrl', ["$scope", "$routeParams", "PostService", function ReadPostCtrl($scope, $routeParams, PostService) {
	$scope.post = {};

	$scope.ReadPost = function() {
		$scope.post = PostService.GetPost($routeParams.id);
	}();

}]);

myApp.controller('AddPostCtrl', ["$scope", "$http", "$location", "PostService", function AddPostCtrl($scope, $http, $location, PostService) {
	$scope.form = {};

	$scope.AddPost = function () {
        PostService.AddPost($scope.form).success(function (data) {
			console.log(data);
			$location.path('/posts');
		});
    };
}]);

myApp.controller('EditPostCtrl', ["$scope", "$http", "$location", "$routeParams", "PostService", function EditPostCtrl($scope, $http, $location, $routeParams, PostService) {
	$scope.form = PostService.GetPost($routeParams.id);

	$scope.EditPost = function () {
        PostService.EditPost($scope.form).success(function (data) {
			$location.path('/posts');
		});
    };
}]);

myApp.controller('DeletePostCtrl', ["$scope", "$http", "$location", "$routeParams", "PostService", function DeletePostCtrl($scope, $http, $location, $routeParams, PostService) {
	$scope.post = {};

	$scope.ReadPost = function() {
		$scope.post = PostService.GetPost($routeParams.id);
	}();

	$scope.DeletePost = function() {
		PostService.DeletePost($routeParams.id).success(function (data) {
			$location.path("/posts");
		});
	};

	$scope.Home = function() {
		$location.path("/posts");
	}
}]);
