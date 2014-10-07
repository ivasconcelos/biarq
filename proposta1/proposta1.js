/**
 * Created by ines on 10/5/14.
 */
'use strict';

angular.module('biarq.proposta1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/proposta1', {
            templateUrl: '/biarq/proposta1/proposta1.html',
            controller: 'portfolioCtrl'
        })

    }])