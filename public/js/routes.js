(function() {
	'use strict';
	
	myApp.config(['$routeProvider', '$locationProvider', function($routePorvider, $locationProvider) {
		$locationProvider.html5Mode(true);
//		$locationProvider.html5Mode(false);
//		$locationProvider.hashPrefix("!");
		
		$routePorvider.
		when('/', {
			templateUrl: 'partials/index'	
		}).
		when('/login', {
			templateUrl: 'partials/login'	
		}).
		when('/user', {
			templateUrl: 'partials/user'	
		}).
		when('/posts', {
			templateUrl: 'partials/posts/posts'
		}).
		when('/addPost', {
			templateUrl: 'partials/posts/addPost'
		}).
		when('/readPost/:id', {
			templateUrl: 'partials/posts/readPost'		
		}).
		when('/editPost/:id', {
			templateUrl: 'partials/posts/editPost'		
		}).
		when('/deletePost/:id', {
			templateUrl: 'partials/posts/deletePost'		
		}).
		when('/schedules', {
			templateUrl: 'partials/schedules/schedules'		
		}).
		when('/comments', {
			templateUrl: 'partials/comments/comments'		
		}).	
		when('/reports', {
			templateUrl: 'partials/reports/reports'		
		}).	
		when('/readReport/:id', {
			templateUrl: 'partials/reports/readReport'		
		}).	
		when('/addReport', {
			templateUrl: 'partials/reports/addReport'		
		}).	
		when('/about', {
			templateUrl: 'partials/about'
		}).
		when('/stopwatch', {
			templateUrl: 'partials/stopwatch/stopwatch'
		}).
		when('/google402c9861da425f43.html', {})	
		.otherwise({
			redirectTo: '/'
		});	
	}]);
	
	//format: "#/theView?scrollTo=theId"
//	myApp.run(function($rootScope, $location, $anchorScroll, $routeParams) {
//		$rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
//			$location.hash($routeParams.scrollTo);
//			$anchorScroll();  
//		});
//	});
	
}());