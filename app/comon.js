/**
 * Created by ines on 9/8/14.
 */
'use strict;'

//MODULO COMON -- CONTAINS COMON FUNCTIONS AND HELPER FUNCTIONS
angular.module('biarq.comon', [])

    .controller('headerCtrl', ['$scope', '$location', 'Projectos',
        function($scope, $location, Projectos) {


            //CLOSE and OPEN || TOGGLE || MENU IN MOBILE
            var menu = document.getElementById('navMenuWrp');
            var aberto = false;

            $scope.toggle= function() {
                if (aberto) {
                    menu.className = 'fechaMenu';
            }else{
                    menu.className = 'abreMenu';
            }
            aberto = !aberto
        }


            //NAV Links Header
            var MainMenu = function(link, nome) {
                this.link = link;
                this.nome = nome;
            }

/*            $scope.menu1 = new MainMenu("#/home", "home");
            $scope.menu2 = new MainMenu("#/portfolio", "portefólio");
            $scope.menu3 = new MainMenu("#/construcao", "em construção");
            $scope.menu4 = new MainMenu("#/remodelacoes", "remodelações");
            $scope.menu5 = new MainMenu("#/", "stands");
            $scope.menu6 = new MainMenu("#/about", "biarq");
            $scope.menu7 = new MainMenu("#/contactos", "contactos");*/


            $scope.menu1 = new MainMenu("#/home", "Original");
            $scope.menu2 = new MainMenu("#/proposta1", "teste1");
            $scope.menu3 = new MainMenu("#/proposta2", "teste4");
            $scope.menu4 = new MainMenu("#/proposta3", "teste2");
            $scope.menu5 = new MainMenu("#/proposta4", "teste3");


            $scope.mainMenu = [$scope.menu1, $scope.menu2, $scope.menu4, $scope.menu5, $scope.menu3];

            /*$scope.mainMenu = [$scope.menu1, $scope.menu2, $scope.menu3, $scope.menu4, $scope.menu5, $scope.menu6, $scope.menu7];*/



        }

    ]).factory('Projectos', ['$resource', 'apiAddr', 'project',
        function($resource, apiAddr, project) {
            return $resource(apiAddr + '/project/:id', null, {
                'next': {
                    method: 'get',
                    url: apiAddr + '/project/next/:skip/:limit',
                    isArray: true,
                    transformResponse: function(data, header) {
                        var wrapped = angular.fromJson(data);
                        angular.forEach(wrapped, function(item, idx) {

                            wrapped[idx] = new project(item); //<-- replace each item with an instance of the resource object
                            wrapped[idx].texto = wrapped[idx].texto.replace(/<(?:.|\n)*?>/gm, '');
                        });
                        return wrapped;
                    }
                }
            });
        }
    ]).factory('Remodelacoes', ['$resource', 'apiAddr', 'project',
        function($resource, apiAddr, remodelacoes) {
            return $resource(apiAddr + '/remodelacao/:id', null, {
                'next': {
                    method: 'get',
                    url: apiAddr + '/remodelacao/next/:skip/:limit',
                    isArray: true,
                    transformResponse: function(data, header) {
                        var wrapped = angular.fromJson(data);
                        angular.forEach(wrapped, function(item, idx) {

                            wrapped[idx] = new remodelacoes(item); //<-- replace each item with an instance of the resource object
                            wrapped[idx].texto = wrapped[idx].texto.replace(/<(?:.|\n)*?>/gm, '');
                        });
                        return wrapped;
                    }
                }
            });
        }
    ]).factory('Construcao', ['$resource', 'apiAddr', 'project',
        function($resource, apiAddr, project) {
            return $resource(apiAddr + '/construcao/:id', null, {
                'next': {
                    method: 'get',
                    url: apiAddr + '/construcao/next/:skip/:limit',
                    isArray: true,
                    transformResponse: function(data, header) {
                        var wrapped = angular.fromJson(data);
                        angular.forEach(wrapped, function(item, idx) {

                            wrapped[idx] = new project(item); //<-- replace each item with an instance of the resource object
                            wrapped[idx].texto = wrapped[idx].texto.replace(/<(?:.|\n)*?>/gm, '');
                        });
                        return wrapped;
                    }
                }
            });
        }
    ]).directive('autoHeight', ['$location',
        function($location) {
            return {
                restrict: 'AE',
                link: function(scope, elem, attrs) {
                    scope.$on('$routeChangeSuccess', function() {
                       // elem.removeClass('bigHeader smallHeader');
                     //   elem.addClass('bigHeader');




                        if (($location.path() != "/home") && (screen.width > 768)) {

                            elem.removeClass('bigHeader smallHeader');
                            elem.addClass('smallHeader');
                        }


                    });
                }



            }
        }
    ]);