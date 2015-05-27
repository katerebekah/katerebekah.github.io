var controllers = angular.module('kateApp.controllers', []);

controllers.controller('indexController', ['$scope', function($scope){
	$scope.message = "Index Called"
}]);

controllers.controller('aboutController', ['$scope', function($scope){
	$scope.message = "About Called";
}]);