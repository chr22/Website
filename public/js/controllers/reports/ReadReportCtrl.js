(function () {
	'use strict';

	myApp.controller('ReadReportCtrl', ["$scope", "$routeParams", "ReportService", "$location", function ReadReportCtrl($scope, $routeParams, ReportService, $location) {
		$scope.report = {};
	
		$scope.ReadReport = function() {
			$scope.report = ReportService.GetReport($routeParams.id);
		}();
	}]);
}());