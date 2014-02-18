(function () {
	'use strict';

	myApp.controller('ReportsCtrl', ["$scope", "$location", "$routeParams", "ReportService", function ReportsCtrl($scope, $location, $routeParams, ReportService) {
		$scope.reports = [];		
		$scope.AccordId = "";
		$scope.accordCheck = false;
		$scope.accordType = "vertical"
		$scope.loaded = false;
		
		$scope.GetReports = function() {
			if(ReportService.GetReportCount() <= 0) {
				ReportService.GetReportsFromServer().success(function(data) {
					$scope.reports = data.reports;		
					console.log(data.reports);
				});
			}
			else {
				$scope.reports = ReportService.GetReportsFromClient();
				console.log($scope.reports);
			}
			
			$scope.loaded = true;
		}();
		
		$scope.DeleteReports = function() {			
			if(confirm("Are you sure you want to delete all reports?!")) {
				ReportService.DeleteReports().success(function(data) {
					$scope.reports = ReportService.GetReportsFromClient();		
				});	
			}
		};
		
		$scope.ReadReport = function(id) {
			$location.path("/readReport/" + id);
		};
		
		$scope.DeleteReport = function(id) {
			if(confirm("Are you sure you want to delete the report?!")) {
				ReportService.DeleteReport(id).success(function(data) {
					$scope.reports = ReportService.GetReportsFromClient();
				});	
			}			
		};
		
		$scope.check = function() {
			if($scope.accordCheck) {
				$scope.accordType = "vertical";
			} else {
				$scope.accordType = "horizontal";
			}
			console.log($scope.accordType);
		};
		
		$scope.Accordion = function($event) {
			if($scope.AccordId !== $event.currentTarget.id) {
				console.log("sup");
				$('#' + $scope.AccordId).parent().parent().removeClass("checked");
				$scope.AccordId = $event.currentTarget.id;
				$('#' + $scope.AccordId).parent().parent().addClass("checked");		
			} else {
				$('#' + $scope.AccordId).parent().parent().toggleClass("checked");
			}			
		};
	}]);
}());