(function () {
	'use strict';

	myApp.controller('StopwatchCtrl', ["$scope", "StopwatchService", "$rootScope", function StopwatchCtrl($scope, StopwatchService, $rootScope) {
				
		$scope.seconds = '00';
		$scope.minutes = '00';
		$scope.hours = '00';
		$scope.laps = [];
		$scope.timeOut = 1000;
		$scope.intervalId = 0;
		$scope.clockSize = 60;		
		
		$scope.Start = function($scope) {
			StopwatchService.Start();	
		};
		
		$scope.Pause = function() {
			StopwatchService.Pause();
		};
		
		$scope.Stop = function() {
			StopwatchService.Stop();
		};

		$scope.NewLap = function() {
			StopwatchService.NewLap();
		};

		$scope.IncreaseClockSize = function() {
			$scope.clockSize += 15;
		};
		
		$scope.DecreaseClockSize = function() {
			$scope.clockSize -= 15;
			
			if($scope.clockSize <= 0) {
				$scope.clockSize = 10;
			}
		};
		
		$scope.DefaultClockSize = function() {
			$scope.clockSize = 50;
		};
		
	}]);
}());