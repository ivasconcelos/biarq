/**
 * Created by ines on 10/5/14.
 */
'use strict';

angular.module('biarq.proposta4', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/proposta4', {
            templateUrl: 'proposta4/proposta4.html',
            controller: 'portfolioCtrl'
        })

    }])