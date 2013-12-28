'use strict';

myApp.controller('AddPostCtrl', ["$scope", "$http", "$location", "PostService", function AddPostCtrl($scope, $http, $location, PostService) {
	$scope.form = {};

	$scope.AddPost = function () {
        PostService.AddPost($scope.form).success(function (data) {
			console.log(data);
			$location.path('/posts');
		});
    };
}]);