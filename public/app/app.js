(function(angular) {

    'use strict';

    angular.module('artemdesign', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/pages/home.tmpl.html'
                })
                .when('/contact', {
                    templateUrl: 'app/pages/contact.tmpl.html'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }])
}).call(this, this.angular);
