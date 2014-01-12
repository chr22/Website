(function () {
	'use strict';

	myApp.controller('EditPostCtrl', ["$scope", "$http", "$location", "$routeParams", "PostService", function EditPostCtrl($scope, $http, $location, $routeParams, PostService) {
		$scope.form = PostService.GetPost($routeParams.id);
		$scope.copy = {};
		$scope.test = {};
		
		//nessesary because form and the data in postservice is linked
		$scope.copyForm = function () {								
			$scope.test.title = $scope.form.title;
			$scope.test.text = $scope.form.text;
			$scope.test._id = $scope.form._id;
		}();		
	
		$scope.EditPost = function () {					
			PostService.EditPost($scope.form).success(function (data) {
				$location.path('/posts');
			});
		};
		
		$scope.Cancel = function () {
			//nessesary because form and the data in postservice is linked
			$scope.form.title = $scope.test.title;
			$scope.form.text = $scope.test.text;			
			$location.path("/posts");	
		};
	}]);
}());