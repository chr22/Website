(function () {
	'use strict';

	myApp.controller('HundredBeersCtrl', ["$scope", "$routeParams", "$http", function HundredBeersCtrl($scope, $routeParams, $http) {

		$scope.persons = [];

		$scope.deleteMode = false;		
		$scope.beersLeft = 100;
		$scope.newPerson = undefined;
		
		$scope.AddPerson = function () {						
			$scope.newPerson = { "Beers": 0 };						
		};

		$scope.FinalizePerson = function () {						
			$http.post("hundredBeers/addPerson", $scope.newPerson).success(function(result) {				
				$scope.persons.push(result);
				$scope.newPerson = undefined;
				$scope.deleteMode = false;				
			});			
		};

		$scope.CancelNewPerson = function () {						
			$scope.newPersons = undefined;
		};		

		$scope.AddBeer = function (person) {						
			$http.post("hundredBeers/addBeer", person).success(function(result)	{
				$scope.persons.forEach(function(element) {				
					if(element._id == result.person._id) {
						element.Beers = result.person.Beers;	
						return false;
					}
				});
			});
		};
		
		$scope.SubtractBeer = function (person) {			
			$http.post("hundredBeers/subtractBeer", person).success(function(result) {				
				$scope.persons.forEach(function(element) {
					if(element._id == result.person._id) {
						element.Beers = result.person.Beers;
						return false;
					}
				});
			});
		};

		$scope.Reset = function () {
			if(confirm("Are you sure you want to reset the counter to 100?")) {
				$scope.beersLeft = 100;	

				$scope.persons.forEach(function(element) {
					element.beers = 0;	
				});
			}			
		};

		$scope.Delete = function (person) {
			if(confirm("Are you sure you want to delete the checked persons?")) {	
				$http.delete("hundredBeers/deletePerson/" + person._id).success(function() {					
					for(var i = $scope.persons.length-1; i >= 0; i--) {
						if($scope.persons[i]._id == person._id) {				
							$scope.persons.splice(i, 1);
							break;
						}
					}
				});
			}
		};			
		

		$scope.$watch('persons', function() {
			var total = 0;

			$scope.persons.forEach(function(element) {
				total += element.Beers;	
			});

			$scope.beersLeft = 100 - total;
		}, true);
		
		$scope.status = function() {
			$http.get('hundredBeers/status').success(function(data, status, headers, config) {				
				$scope.persons = data.status;
			});
		}();

	}]);
}());