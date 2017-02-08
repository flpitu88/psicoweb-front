'use strict';

angular.module('myApp.registro', ['ngRoute'])

// Declared route
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/registro', {
                    templateUrl: 'registro/registro.html',
                    controller: 'RegistroCtrl'
                });
            }])

        // Servicio rest para enviar datos al formulario
        .service('registroService', function ($http) {
            this.mandarRegistro = function () {
                $http.post(
                        'http://localhost:9090/psicoweb-server/usuarios',
                        'hola').
                        success(function (data, status, headers, config) {
                            // this callback will be called asynchronously
                            // when the response is available
                            console.log(data);
                        }).
                        error(function (data, status, headers, config) {
                            // called asynchronously if an error occurs
                            // or server returns response with an error status.
                            console.log(status + '-' + data);
                        });
            };
        })

// Home controller
        .controller('RegistroCtrl', function ($scope, registroService) {

            var self = this;

            this.postearRegistro = function () {
                registroService.mandarRegistro(function (response) {
                    self.respuesta = response.data;
                });
            };

        });
