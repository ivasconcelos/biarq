'use strict';

// Declare app level module which depends on views, and components
angular.module('biarq', [
  'ngRoute',
  'myApp.view1',
  'myApp.home',
  'myApp.contactos',
  'myApp.about',
  'myApp.portfolio',
  'myApp.version',
  'myApp.comon',
  'google-maps'



]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
