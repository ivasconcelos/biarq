'use strict';

angular.module('biarq.home', [])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'homeCtrl'
        });
    }])

    .controller('homeCtrl', ['$scope', function ($scope) {

    }]);