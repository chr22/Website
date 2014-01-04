'use strict';

myApp.controller('AddReportCtrl', ["$scope", "$http", "$location", "ReportService", function AddReportCtrl($scope, $http, $location, ReportService) {
	$scope.form = {};

	$scope.AddPost = function () {
        ReportService.AddReport($scope.form).success(function (data) {
			console.log(data);
			$location.path('/reports');
		});
    };
}]);