'use strict';

angular.module('myApp.contactos', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contactos', {
    templateUrl: 'contactos/contactos.html',
    controller: 'contactosCtrl'
  });
}])

.controller('contactosCtrl', ['$scope',function($scope) {
        $scope.map = {
            center: {
                latitude: 40.134295,
                longitude: -8.393010
            },

            zoom: 18
        };

}]);