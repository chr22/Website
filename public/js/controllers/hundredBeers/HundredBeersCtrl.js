(function () {
	'use strict';

	myApp.controller('HundredBeersCtrl', ["$scope", "$location", "$routeParams", function HundredBeersCtrl($scope, $location, $routeParams) {

		$scope.persons = [
			{
				"name": "Hans",
				"beers": 10
			},
			{
				"name": "Grete",
				"beers": 5
			}
		];

		$scope.deleteMode = false;
		$scope.beersLeft = 100;

		var CreatenewPerson = function() {
			return {
				"name": "",
				"beers": 0
			};
		};

		$scope.newPersons = undefined;
		
		$scope.AddPerson = function () {
			$scope.newPersons = (new CreatenewPerson());
		};

		$scope.FinalizePerson = function () {			
			$scope.persons.push($scope.newPersons);
			$scope.newPersons = undefined;
		};

		$scope.CancelNewPerson = function () {						
			$scope.newPersons = undefined;
		};		

		$scope.AddBeer = function (person) {
			person.beers += 1;
		};
		
		$scope.SubtractBeer = function (person) {
			person.beers -= 1;
		};

		$scope.Reset = function () {
			if(confirm("Are you sure you want to reset the counter to 100?")) {
				$scope.beersLeft = 100;	

				$scope.persons.forEach(function(element) {
					element.beers = 0;	
				});
			}			
		};

		$scope.Delete = function () {
			if(confirm("Are you sure you want to delete the checked persons?")) {
				$scope.persons.forEach(function(element, index) {
					if(element.name == person.name) {
						element = {}
					}
				});
			}			
		};

		$scope.$watch('persons', function() {
			var total = 0;

			$scope.persons.forEach(function(element) {
				total += element.beers;	
			});

			$scope.beersLeft = 100 - total;
		}, true);

	}]);
}());