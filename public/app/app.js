var app = angular.module('kateApp', ['ngRoute', 'kateApp.controllers']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {templateUrl: 'partials/index', controller: 'indexController'})
		.otherwise({redirectTo:'/'})
		.when('/about', {templateUrl: 'partials/about', controller: 'aboutController'})
}]);

.config(['$locationProvider', function($locationProvider){
	$locationProvider.html5Mode(true);
}]);