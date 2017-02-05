'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'myApp.registro'
])

        .config(['$routeProvider', function ($routeProvider) {
                // Routes will be here
                $routeProvider.otherwise({
                    redirectTo: '/home'
                });
            }]);