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

//                var parameter = JSON.stringify(
//                        {type: "Usuario",
//                            nombre: $scope.nombre,
//                            apellido: $scope.apellido,
//                            dni: $scope.dni,
//                            email: $scope.email,
//                            password: $scope.password
//                        });

                var jsonDatos = "'nombre':'flavio','apellido':'pietrolati','dni':324324,'email':'asdasd@gsg','password':'234234'";

                var postConfig = {
                    headers: {
                        "MYAPP-DOMAIN": "http://localhost:8000",
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                    withCredentials: true
                };

                $http.post(
                        'http://localhost:8080/psicoweb-server/usuarios',
//                        parameter,
                        jsonDatos,
                        postConfig).
                        success(function (data, status, headers, config) {
                            // this callback will be called asynchronously
                            // when the response is available
                            console.log(data);
                        }).
                        error(function (data, status, headers, config) {
                            // called asynchronously if an error occurs
                            // or server returns response with an error status.
                            console.log(data);
                        });

            };
        });
