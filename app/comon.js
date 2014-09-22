/**
 * Created by ines on 9/8/14.
 */
'use strict;'

//MODULO COMON -- CONTAINS COMON FUNCTIONS AND HELPER FUNCTIONS
angular.module('myApp.comon', [])

    .controller('headerCtrl', ['$scope','$location',function($scope,$location) {


        //Links Header
        var MainMenu = function(link, nome) {
            this.link = link;
            this.nome = nome;
        }

        $scope.menu1 = new MainMenu();
        $scope.menu1.link="#/home";
        $scope.menu1.nome="home";

        $scope.menu2 = new MainMenu();
        $scope.menu2.link="#/portfolio";
        $scope.menu2.nome="portefólio";

        $scope.menu3 = new MainMenu();
        $scope.menu3.link="#/";
        $scope.menu3.nome="em construção";

        $scope.menu4 = new MainMenu();
        $scope.menu4.link="#/";
        $scope.menu4.nome="remodelações";

        $scope.menu5 = new MainMenu();
        $scope.menu5.link="#/";
        $scope.menu5.nome="stands";

        $scope.menu6 = new MainMenu();
        $scope.menu6.link="#/about";
        $scope.menu6.nome="biarq";

        $scope.menu7 = new MainMenu();
        $scope.menu7.link="#/contactos";
        $scope.menu7.nome="contactos";

        $scope.mainMenu = [$scope.menu7,$scope.menu6,$scope.menu5,$scope.menu4,$scope.menu3,$scope.menu2,$scope.menu1];



        //CLOSE MENU IN MOBILE
        $scope.closeMenu =  function(){
            if (window.innerWidth >= 768){
                return
            }
            $(".menus").slideToggle();
        }
    }

    ]);



 /*   .directive('slider', ['$timeout',function ($timeout) {
        return {
            restrict: 'AE',
            replace: true,
            scope:{
               // images: '='
            },
            link: function (scope, elem, attrs) {
                scope.images = [{
                    src: 'image-slider-3.jpg',
                    title: 'Agora é que foi finalmententemente'
                }, {
                    src: 'image-slider-5.jpg',
                    title: 'ESteve difícil ... '
                }];

                scope.currentIndex=0;

                elem.css('background-image', 'url(img/' +scope.images[scope.currentIndex].src  +')');


                var homeImgTitle = scope.images[scope.currentIndex].title;
                $("#homeImgTitleArea").text(homeImgTitle);

                elem.toggleClass('foda');


                scope.next=function(){

                    scope.currentIndex<scope.images.length-1?scope.currentIndex++:scope.currentIndex=0;
                    elem.css('background-image', 'url(img/' +scope.images[scope.currentIndex].src  +')');

                    elem.toggleClass('foda');


                    var homeImgTitle = scope.images[scope.currentIndex].title;
                    $("#homeImgTitleArea").text(homeImgTitle);



                };

                *//* Start: For Automatic slideshow*//*
                var timer;

                var sliderFunc=function(){
                    timer=$timeout(function(){
                        scope.next();
                        timer=$timeout(sliderFunc,5000);
                    },5000);
                };

                sliderFunc();

                scope.$on('$destroy',function(){
                    $timeout.cancel(timer);
                });

                *//* End : For Automatic slideshow*//*

            }
            //templateUrl:'homeslider/templateurl.html'
        }
    }]);*/
