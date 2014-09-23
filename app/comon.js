/**
 * Created by ines on 9/8/14.
 */
'use strict;'

//MODULO COMON -- CONTAINS COMON FUNCTIONS AND HELPER FUNCTIONS
angular.module('biarq.comon', [])

    .controller('headerCtrl', ['$scope', '$location', 'Projectos', function ($scope, $location, Projectos) {



        //Links Header
        var MainMenu = function (link, nome) {
            this.link = link;
            this.nome = nome;
        }

        $scope.menu1 = new MainMenu("#/home", "home");
        $scope.menu2 = new MainMenu("#/portfolio", "portefólio");
        $scope.menu3 = new MainMenu("#/", "em construção");
        $scope.menu4 = new MainMenu("#/", "remodelações");
        $scope.menu5 = new MainMenu("#/", "stands");
        $scope.menu6 = new MainMenu("#/about", "biarq");
        $scope.menu7 = new MainMenu("#/contactos", "contactos");


        $scope.mainMenu = [$scope.menu7, $scope.menu6, $scope.menu5, $scope.menu4, $scope.menu3, $scope.menu2, $scope.menu1];


        //CLOSE MENU IN MOBILE
        $scope.closeMenu = function () {
            if (window.innerWidth >= 768) {
                return
            }
            $(".menus").slideToggle();
        }
    }

    ]).factory('Projectos', ['$resource', 'apiAddr', 'project', function ($resource, apiAddr, project) {
        return $resource(apiAddr + '/project/:id', null,
            {
                'all': {
                    method: 'get',
                    url: apiAddr + '/project/all/:number',
                    isArray: true,
                    transformResponse: function (data, header) {
                        var wrapped = angular.fromJson(data);
                        angular.forEach(wrapped, function (item, idx) {

                            wrapped[idx] = new project(item); //<-- replace each item with an instance of the resource object
                        });
                        return wrapped;
                    }}
            });
    }]);


