'use strict';

angular.module('myApp.about', [])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'about/about.html',
            controller: 'aboutCtrl'
        });
    }])

    .controller('aboutCtrl', ['$scope',function($scope) {


    }]);