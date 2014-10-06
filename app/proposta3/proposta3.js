/**
 * Created by ines on 10/5/14.
 */
'use strict';

angular.module('biarq.proposta3', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/proposta3', {
            templateUrl: 'proposta3/proposta3.html',
            controller: 'portfolioCtrl'
        })

    }])