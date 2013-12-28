'use strict';

myApp.controller('EditPostCtrl', ["$scope", "$http", "$location", "$routeParams", "PostService", function EditPostCtrl($scope, $http, $location, $routeParams, PostService) {
	$scope.form = PostService.GetPost($routeParams.id);

	$scope.EditPost = function () {
        PostService.EditPost($scope.form).success(function (data) {
			$location.path('/posts');
		});
    };
}]);