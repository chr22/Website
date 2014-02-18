(function () {
	'use strict';

	myApp.controller('StopwatchCtrl', ["$scope", "StopwatchService1", function StopwatchCtrl($scope, StopwatchService1) {
				
		$scope.seconds = '00';
		$scope.minutes = '00';
		$scope.hours = '00';
		$scope.laps = [];
		$scope.timeOut = 1000;
		$scope.intervalId = 0;
		$scope.clockSize = 50;
		/*$scope.service = StopwatchService1.GetTime();
		
		$scope.Start = function($scope) {
			StopwatchService1.Start();
			//$scope.service = StopwatchService1.GetTime();			
		};
		
		$scope.Pause = function() {
			StopwatchService1.Pause();
		};
		
		$scope.Stop = function() {
			StopwatchService1.Stop();
		};
		
		$scope.print = function(){
			console.log(StopwatchService1.GetTime());
		};
				
		$scope.$watch(
			function(){
				return StopwatchService1.GetTime();				
			},
			
			function(newVal) {
				$scope.service = newVal;				
			}		
		);*/
				
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
			$scope.intervalId = 0;
		};
		
		$scope.Stop = function() {
			clearInterval($scope.intervalId);
			$scope.intervalId = 0;
			
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
			
			if($scope.clockSize <= 0) {
				$scope.clockSize = 10;
			}
		};
		
		$scope.DefaultClockSize = function() {
			$scope.clockSize = 50;
		}
		
	}]);
}());