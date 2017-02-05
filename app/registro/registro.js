'use strict';

angular.module('myApp.registro', ['ngRoute'])

// Declared route
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/registro', {
                    templateUrl: 'registro/registro.html',
                    controller: 'RegistroCtrl'
                });
            }])

// Home controller
        .controller('RegistroCtrl', [function ($scope, $http) {
                $scope.submitForm = function () {
                    alert('Nombre: ' + $scope.nombre + ' - Apellido: ' + $scope.apellido);
                };
            }]);
