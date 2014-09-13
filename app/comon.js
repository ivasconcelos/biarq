/**
 * Created by ines on 9/8/14.
 */
'use strict;'

//MODULO COMON -- CONTAINS COMON FUNCTIONS AND HELPER FUNCTIONS
angular.module('myApp.comon', [])
    .controller('headerCtrl', ['$scope','$location',function($scope,$location) {


/*        if ($location.$$path == '/home'){

        }
        else {
            console.log("false")
        }*/

       var menulinks = [
           {
               "nome":"biarq",
               "url":"#/"

           }
       ];
        $scope.closeMenu =  function(){
            if (window.innerWidth >= 768){
                return
            }
            $(".menus").slideToggle();
        }


        $scope.images = [{
            src: 'bruno.jpg',
            title: 'Pic 1'
        }, {
            src: 'footerLogo.png',
            title: 'Pic 2'
        }, {
            src: 'headerBg.jpg',
            title: 'Pic 3'
        }, {
            src: 'headerLogo.png',
            title: 'Pic 4'
        }, {
            src: '8888.jpg',
            title: 'Pic 5'
        }];







    }]).directive('changeHeader', ['$location',function ($location) {
        return {
            restrict: 'A',                 // The Directive is with Attribute
            link: function (scope, elem, $attrs) {


            }}}
    ])
