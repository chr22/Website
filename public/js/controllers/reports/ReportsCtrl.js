'use strict';

myApp.controller('ReportsCtrl', ["$scope", "$location", "$routeParams", "ReportService", function ReportsCtrl($scope, $location, $routeParams, ReportService) {
    $scope.reports = [];
	
	$scope.GetReports = function() {
		if(ReportService.GetReportCount() <= 0) {
			ReportService.GetReportsFromServer().success(function(data) {
				$scope.reports = data.reports;				
			});
		}
		else {
			$scope.reports = ReportService.GetReportsFromClient();
		}
	}();
	
	$scope.ReadReport = function(id) {
		$location.path("/readReport/" + id);
	};
}]);