myApp.config(['$routeProvider', '$locationProvider', function($routePorvider, $locationProvider) {
        $routePorvider.
            when('/', {
                templateUrl: 'partials/index'
                //controller: IndexCtrl
            }).
			when('/posts', {
                templateUrl: 'partials/posts'
                //controller: PostsCtrl
            }).
            when('/addPost', {
                templateUrl: 'partials/addPost'
                //controller: PostsCtrl
            }).
            when('/readPost/:id', {
                templateUrl: 'partials/readPost'
                //controller: PostsCtrl
            }).
            when('/editPost/:id', {
                templateUrl: 'partials/editPost'
                //controller: PostsCtrl
            }).
            when('/deletePost/:id', {
                templateUrl: 'partials/deletePost'
                //controller: PostsCtrl
            }).
			when('/about', {
				templateUrl: 'partials/about'
			}).
            otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    }]);
