var app = angular.module('todoApp', ['ui.router'])

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',  function($stateProvider, $urlRouterProvider, $locationProvider) {
	
	$locationProvider.html5Mode(true);

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/todo.html',
			controller: 'TodoController'
		})

	$urlRouterProvider.otherwise('/');

}]);