'use strict';

myApp.factory('PostService', ["$http", function($http) {
	var _posts = [];
	var _post = {};
	return {
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
			return $http.get('/posts/posts').
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
			return $http.delete('/posts/post/' + id).
				success(function(data, status, headers, config) {
					for(var i = 0; i < _posts.length; i++) {
						if(_posts[i]._id == id) {
							_posts.splice(i, 1);
						}
					}
				});
		},
		AddPost: function(form) {
			return $http.post('/posts/post', form).
				success(function(data) {
					_posts.push(data[0]);
				});
		},
		EditPost: function(form) {
			return $http.put('/posts/post/' + form._id, form).
				success(function(data) {
					console.log(data);
					for(var i = 0; i < _posts.length; i++) {
						if(_posts[i]._id == form._id) {
							_posts[i] = form;
						}
					}
				});
		}
	};
}]);
