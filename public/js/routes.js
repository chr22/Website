myApp.config(['$routeProvider', '$locationProvider', function($routePorvider, $locationProvider) {
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
	when('/about', {
		templateUrl: 'partials/about'
	}).
	otherwise({
		redirectTo: '/'
	});
	
	//$locationProvider.html5Mode(true);
}]);
