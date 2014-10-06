/**
 * Created by ines on 10/5/14.
 */
'use strict';

angular.module('biarq.proposta2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/proposta2', {
            templateUrl: 'proposta2/proposta2.html',
            controller: 'proposta2Ctrl'
        })

    }])

    .controller('proposta2Ctrl', ['$scope', function ($scope) {


var headerF = document.getElementById('headerF');



        var winHeight = window.screen.height;

        var ourHeight = winHeight-50;

        headerF.style.height=ourHeight+"px";




        console.log(winHeight+"px")
        console.log(ourHeight+"px")




       /* headerF.style.height="100px";*/


    }]);