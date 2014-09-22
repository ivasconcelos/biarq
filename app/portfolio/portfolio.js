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

    .controller('portfolioCtrl', ['$scope', function ($scope) {

        $scope.projectos = []

        var projecto1 = new window.Projecto()
        projecto1._id = "123";
        projecto1.fotoprincipal = 'img/img1.jpg';
        projecto1.titulo = "dr house";
        projecto1.texto = "A LN HOUSE, é uma habitação unifamiliar de custo controlado, que consiste numa construção de apenas 170 metros quadrados, implantada de forma priviligiar a orientação solar e a topografia do terreno. Em resumo trata-se de uma habitação bastante inteligente e sustentável."

        $scope.projectos.push(projecto1);

        var projecto2 = new window.Projecto()
        projecto2._id = "123";
        projecto2.fotoprincipal = 'img/img2.jpg';
        projecto2.titulo = "hr house";
        projecto2.texto = "A LN HOUSE, é uma habitação unifamiliar de custo controlado, que consiste numa construção de apenas 170 metros quadrados, implantada de forma priviligiar a orientação solar e a topografia do terreno. Em resumo trata-se de uma habitação bastante inteligente e sustentável."

        $scope.projectos.push(projecto2);

        var projecto3 = new window.Projecto()
        projecto3._id = "123";
        projecto3.fotoprincipal = 'img/img3.jpg';
        projecto3.titulo = "maria";
        projecto3.texto = "A LN HOUSE, é uma habitação unifamiliar de custo controlado, que consiste numa construção de apenas 170 metros quadrados, implantada de forma priviligiar a orientação solar e a topografia do terreno. Em resumo trata-se de uma habitação bastante inteligente e sustentável."

        $scope.projectos.push(projecto3);

        var projecto4 = new window.Projecto()
        projecto4._id = "123";
        projecto4.fotoprincipal = 'img/img4.jpg';
        projecto4.titulo = "manuel";
        projecto4.texto = "A LN HOUSE, é uma habitação unifamiliar de custo controlado, que consiste numa construção de apenas 170 metros quadrados, implantada de forma priviligiar a orientação solar e a topografia do terreno. Em resumo trata-se de uma habitação bastante inteligente e sustentável."

        $scope.projectos.push(projecto4);

        var projecto5 = new window.Projecto()
        projecto5._id = "123";
        projecto5.fotoprincipal = 'img/img5.jpg';
        projecto5.titulo = "manuel";
        projecto5.texto = "A LN HOUSE, é uma habitação unifamiliar de custo controlado, que consiste numa construção de apenas 170 metros quadrados, implantada de forma priviligiar a orientação solar e a topografia do terreno. Em resumo trata-se de uma habitação bastante inteligente e sustentável."

        $scope.projectos.push(projecto5);

        var projecto6 = new window.Projecto()
        projecto6._id = "123";
        projecto6.fotoprincipal = 'img/img6.jpg';
        projecto6.titulo = "manuel";
        projecto6.texto = "A LN HOUSE, é uma habitação unifamiliar de custo controlado, que consiste numa construção de apenas 170 metros quadrados, implantada de forma priviligiar a orientação solar e a topografia do terreno. Em resumo trata-se de uma habitação bastante inteligente e sustentável."

        $scope.projectos.push(projecto6);


        // SPINNER
        $(window).scroll(function() {

            if( $(window).scrollTop() >= $(document).height() - $(window).height() - 300){
                document.getElementById('spinner').style.display="block";

            }
        });


    }])




    .controller('verProjectoCtrl', ['$scope','$routeParams', function ($scope,$routeParams) {



        var projecto1 = new window.Projecto()
        projecto1._id = "123";
        projecto1.fotoprincipal = 'img/img2.jpg';
        projecto1.titulo = "dr house";
        projecto1.texto = "A LN HOUSE, é uma habitação unifamiliar de custo controlado, que consiste numa construção de apenas 170 metros quadrados, implantada de forma priviligiar a orientação solar e a topografia do terreno. Em resumo trata-se de uma habitação bastante inteligente e sustentável."

        $scope.projecto = projecto1;


    }]);


