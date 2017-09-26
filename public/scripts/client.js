var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    }).when('/spiderman', {
        templateUrl: 'views/spiderman.html',
        controller: 'SpidermanController as SC'
    }).when('/tyrion', {
        templateUrl: 'views/tyrion.html',
        controller: 'TyrionController as TC'
    }).when('/sonic', {
        templateUrl: 'views/sonic.html',
        controller: 'SonicController as SC'
    }).otherwise({ redirectTo: '/' });
});