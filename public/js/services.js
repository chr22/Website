'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
//angular.module('myApp.services', [])
//  .value('version', '0.1');

//myApp.factory

myApp.factory('PostService', ["$http", function($http) {
	var _posts = [];
	var _post = {};
	return {
		/*AddPost: function(newPost) {
			posts.push(newPost);
			return _posts;
		},*/
		ReplacePosts: function(newPosts) {
			_posts = newPosts;
			return _posts;
		},
		GetPost: function(id) {
			_posts.forEach(function(post) {
				if(post._id == id) {
					_post = post
					return post;
				}
			});
			return _post;
		},
		GetPostsFromServer: function() {
			return $http.get('/api/posts').
				success(function(data, status, headers, config) {
					_posts = data.posts;
				});
		},
		GetPostsFromClient: function() {
			return _posts;
		},
		GetPostCount: function() {
			return _posts.length;
		},
		DeletePost: function(id) {
			return $http.delete('/api/post/' + id).
				success(function(data, status, headers, config) {
					for(var i = 0; i < _posts.length; i++) {
						if(_posts[i]._id == id) {
							_posts.splice(i, 1);
						}
					}
				});
		},
		AddPost: function(form) {
			return $http.post('/api/post', form).
				success(function(data) {
					_posts.push(data[0]);
				});
		},
		EditPost: function(form) {
			return $http.put('/api/post/' + form._id, form).
				success(function(data) {
					for(var i = 0; i < _posts.length; i++) {
						if(_posts[i]._id == id) {
							_posts[i] = form;
						}
					}
				});
		}
	};
}]);
