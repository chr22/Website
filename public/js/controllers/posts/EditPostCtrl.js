'use strict';

myApp.controller('EditPostCtrl', ["$scope", "$http", "$location", "$routeParams", "PostService", function EditPostCtrl($scope, $http, $location, $routeParams, PostService) {
	$scope.form = PostService.GetPost($routeParams.id);
	$scope.copy = {}
	
	$scope.copyForm = function () {				
		angular.copy($scope.form, $scope.copy);		
	}();

	$scope.EditPost = function () {		
        PostService.EditPost($scope.copy).success(function (data) {
			$location.path('/posts');
		});
    };
	
	$scope.Cancel = function () {
		$location.path("/posts");	
	};
}]);