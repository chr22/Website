'use strict';

myApp.controller('LoginCtrl', ["$scope", "$http", "$location", function LoginCtrl($scope, $http, $location) {
	$scope.username = "";
	$scope.password = "";
	$scope.formData = {};
	
	$scope.submit = function() {
		$http({
			method: 'POST',
			url: '/login',
			data: $scope.formData			
		}).success(function (data) {
			console.log(data);	
			$location.path("/user");
		}).error(function (data) {
			console.log(data);
			alert("Wrong username / password combo!");
		});				  
	};
}]);