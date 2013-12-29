'use strict';

myApp.controller('EditPostCtrl', ["$scope", "$http", "$location", "$routeParams", "PostService", function EditPostCtrl($scope, $http, $location, $routeParams, PostService) {
	$scope.form = PostService.GetPost($routeParams.id);
	$scope.copy = {}
	
	$scope.$watch(function() {
		//console.log($scope.form)
	}, $scope.form);
	
	$scope.copyForm = function () {		
		//$scope.copy = $scope.form;
		angular.copy($scope.form, $scope.copy);
		console.log($scope.copy);
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