(function() {
	'use strict';
	
	myApp.factory('StopwatchService', ["$interval", "$rootScope", function($interval, $rootScope) {	
		
		var seconds = '00';
		var minutes = '00';
		var hours = '00';		
		var intervalId = 0;		
		$rootScope.stopWatchTime = '00:00:00';
		$rootScope.stopWatchLaps = [];
				
		var FormatTime = function() {
			if(seconds < 10 && seconds != '00') {
				seconds = '0' + seconds;
			}

			if(seconds % 60 === 0){
				seconds = '00';
				minutes++;

				if(minutes < 10 && minutes != '00') {
					minutes = '0' + minutes;
				}

				if(minutes % 60 === 0) {
					minutes = '00';
					hours++;

					if(hours < 10 && hours != '00') {
						hours = '0' + hours;
					}
				}
			}			
		};
		
		return {
			Start: function() {				
				if(intervalId === 0) {
					intervalId = $interval(function(){
						seconds++;
						FormatTime();
						$rootScope.stopWatchTime = hours + ":" + minutes + ":" + seconds;											
					},1000);	
				}											
			},
			
			Pause: function() {				
				$interval.cancel(intervalId);
				intervalId = 0;
			},

			Stop: function() {				
				$interval.cancel(intervalId);
				intervalId = 0;
				
				$rootScope.stopWatchTime = '00:00:00';
				$rootScope.stopWatchLaps = [];
				seconds = '00';
				minutes = '00';
				hours = '00';	
			},
			
			NewLap: function() {
				$rootScope.stopWatchLaps.push($rootScope.stopWatchTime);
			}
		};
	}]);
	
})();

