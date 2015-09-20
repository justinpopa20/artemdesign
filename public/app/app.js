(function(angular) {

    'use strict';

    angular.module('artemdesign', ['ngRoute'])
        .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $routeProvider
                .when('/', {
                    templateUrl: 'app/pages/home.tmpl.html'
                })
                .when('/manifesto', {
                    templateUrl: 'app/pages/manifesto.tmpl.html'
                })
                .when('/contact', {
                    templateUrl: 'app/pages/contact.tmpl.html'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }])
}).call(this, this.angular);
