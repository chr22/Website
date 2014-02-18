(function () {
	'use strict';

	myApp.controller('StopwatchCtrl', ["$scope", "StopwatchService", function StopwatchCtrl($scope, StopwatchService) {
				
		$scope.seconds = '00';
		$scope.minutes = '00';
		$scope.hours = '00';
		$scope.laps = [];
		$scope.timeOut = 1000;
		$scope.intervalId = 0;
		$scope.clockSize = 50;
		
		/*$scope.Start = function() {
			StopwatchService.Start($scope.seconds);
			$scope.seconds = StopwatchService.GetSeconds();
		};
		
		$scope.Pause = function() {
			StopwatchService.Pause();
		};
		
		$scope.Stop = function() {
			StopwatchService.Stop();
		};
		
		$scope.print = function(){
			console.log($scope.seconds);	
		};*/
				
		$scope.Start = function() {
			if($scope.intervalId === 0) {
					$scope.intervalId = setInterval(function(){					
					$scope.seconds++;
					$scope.FormatTime();
					$scope.$apply();				
				},$scope.timeOut);	
			}						
		};
		
		$scope.Pause = function() {
			clearInterval($scope.intervalId);
		};
		
		$scope.Stop = function() {
			clearInterval($scope.intervalId);
			
			$scope.seconds = '00';
			$scope.minutes = '00';
			$scope.hours = '00';	
		};
		
		$scope.NewLap = function() {
			$scope.laps.push($scope.hours + ":" + $scope.minutes + ":" + $scope.seconds);
		};
		
		$scope.FormatTime = function() {
			if($scope.seconds < 10 && $scope.seconds != '00') {
				$scope.seconds = '0' + $scope.seconds;
			}
			
			if($scope.seconds % 60 === 0){
				$scope.seconds = '00';
				$scope.minutes++;
				
				if($scope.minutes < 10 && $scope.minutes != '00') {
					$scope.minutes = '0' + $scope.minutes;
				}
				
				if($scope.minutes % 60 === 0) {
					$scope.minutes = '00';
					$scope.hours++;
					
					if($scope.hours < 10 && $scope.hours != '00') {
						$scope.hours = '0' + $scope.hours;
					}
				}
			}			
		};
		
		$scope.IncreaseClock = function() {
			$scope.clockSize += 15;
		};
		
		$scope.DecreaseClock = function() {
			$scope.clockSize -= 15;
		};
		
		$scope.DefaultClockSize = function() {
			$scope.clockSize = 50;
		}
		
	}]);
}());