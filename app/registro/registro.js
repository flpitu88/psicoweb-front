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
        .controller('RegistroCtrl', function ($scope, $http) {
            $scope.registrar = function () {
                $http.post({
                    method: "POST",
                    url: "http://localhost:8080/psicoweb/usuarios"
                }).then(function mySuccess(response) {

                }, function myError(response) {

                });
            };
        });
