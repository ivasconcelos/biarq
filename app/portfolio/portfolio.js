'use strict';

angular.module('myApp.portfolio', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/portfolio', {
            templateUrl: 'portfolio/portfolio.html',
            controller: 'portfolioCtrl'
        })
            .when('/portfolio/:titulo/:id', {
                templateUrl: 'portfolio/ver.html',
                controller: 'verProjectoCtrl'
            });
    }])

    .controller('portfolioCtrl', ['$scope','Projectos', function ($scope,Projectos) {

        $scope.projectos = []
        Projectos.all({ number: 9 },
            function (data) {
       // success handler
                $scope.projectos=data
                console.log(data)
            }, function (error) {
                // error handler
                console.log(error)
            });





        // SPINNER
        $(window).scroll(function() {

            if( $(window).scrollTop() >= $(document).height() - $(window).height() - 300){
                document.getElementById('spinner').style.display="block";

            }
        });


    }])




    .controller('verProjectoCtrl', ['$scope','$routeParams','Projectos', function ($scope,$routeParams,Projectos) {


        Projectos.get({ id: $routeParams.id },
            function (data) {
                // success handler
                console.log(data)
                $scope.projecto= data
            }, function (error) {
                // error handler
                console.log(error)
            });





    }]);


