'use strict';

// Declare app level module which depends on views, and components
angular.module('biarq', [
    'ngRoute',
    'ngResource',
    'ngSanitize',
    'ngAnimate',
    'biarq.home',
    'biarq.contactos',
    'biarq.about',
    'biarq.portfolio',
    'biarq.comon',
    'biarq.util',
    'google-maps',
    'angularSpinner'


]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
}]).value('apiAddr', 'http://192.168.1.64:8888');


