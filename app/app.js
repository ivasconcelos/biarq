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
    'biarq.remodelacoes',
    'biarq.construcao',
    'biarq.proposta1',
    'biarq.proposta2',
    'biarq.proposta3',
    'biarq.proposta4'



]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
}]).value('apiAddr', 'http://api.biarq.com');


