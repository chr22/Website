myApp.service("StopwatchService1", function() {
	this.seconds = '00';
	this.minutes = '00';
	this.hours = '00';		
	this.intervalId = 0;		

	var FormatTime = function() {
		if(this.seconds < 10 && this.seconds != '00') {
			this.seconds = '0' + this.seconds;
		}

		if(this.seconds % 60 === 0){
			this.seconds = '00';
			this.minutes++;

			if(this.minutes < 10 && this.minutes != '00') {
				this.minutes = '0' + this.minutes;
			}

			if(this.minutes % 60 === 0) {
				this.minutes = '00';
				this.hours++;

				if(this.hours < 10 && this.hours != '00') {
					this.hours = '0' + this.hours;
				}
			}
		}			
	};

	this.Start = function() {				
		if(this.intervalId === 0) {
			this.intervalId = setInterval(function(){
				this.seconds++;
				FormatTime();
				console.log(this.seconds);						
			},1000);	
		}											
	}

	this.Pause = function() {
		clearInterval(intervalId);
		intervalId = 0;
	}

	this.Stop = function() {
		clearInterval(intervalId);
		intervalId = 0;

		this.seconds = '00';
		this.minutes = '00';
		this.hours = '00';	
	} 

	this.GetTime = function() {
		return this.hours + ":" + this.minutes + ":" + this.seconds;
	};	
});