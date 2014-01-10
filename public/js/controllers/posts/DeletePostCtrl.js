(function () {
	'use strict';
	
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
}());