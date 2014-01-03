'use strict';

myApp.controller('BaseCtrl', ["$scope", "$window", function BaseCtrl($scope, $window) {
	$scope.back = function() {
		console.log("back");
		$window.history.back();
	};
}]);
