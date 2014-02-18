(function() {
	'use strict';
	
	myApp.factory('StopwatchService', [function() {
		var _seconds = 10;
		
		var seconds = '00';
		var minutes = '00';
		var hours = '00';		
		var intervalId = 0;		
		
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
			Start: function(sec) {
				seconds = sec;
				if(intervalId === 0) {
					intervalId = setInterval(function(){
						seconds++;
						FormatTime();
						//console.log(seconds);						
					},1000);	
				}											
			},
			
			Pause: function() {
				clearInterval(intervalId);
				intervalId = 0;
			},

			Stop: function() {
				clearInterval(intervalId);
				intervalId = 0;

				seconds = '00';
				minutes = '00';
				hours = '00';	
			}, 
			GetSeconds: function() {
				return seconds;
			}
			
		};
	}]);
	
})();

