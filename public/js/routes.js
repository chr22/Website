myApp.config(['$routeProvider', '$locationProvider', function($routePorvider, $locationProvider) {
	$routePorvider.
	when('/', {
		templateUrl: 'partials/index'	
	}).
	when('/posts', {
		templateUrl: 'partials/posts'
	}).
	when('/addPost', {
		templateUrl: 'partials/addPost'
	}).
	when('/readPost/:id', {
		templateUrl: 'partials/readPost'		
	}).
	when('/editPost/:id', {
		templateUrl: 'partials/editPost'		
	}).
	when('/deletePost/:id', {
		templateUrl: 'partials/deletePost'		
	}).
	when('/schedules', {
		templateUrl: 'partials/schedules'		
	}).
	when('/comments', {
		templateUrl: 'partials/comments'		
	}).	
	when('/about', {
		templateUrl: 'partials/about'
	}).
	otherwise({
		redirectTo: '/'
	});
	$locationProvider.html5Mode(true);
}]);
