(function(angular) {

    'use strict';

    angular.module('artemdesign', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/home/home.tmpl.html',
                    controller: 'HomeController'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }])
}).call(this, this.angular);
