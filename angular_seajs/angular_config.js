/**
 * Created by md on 14-8-10.
 */

define(function(require){

    var app = require('angular_main').app;
    var sa = require('sea_angular');

    app.config(function($httpProvider) {
        $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';
    });

    app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
        var routerArr = [
            {
                url:'/main',
                templateUrl: './view/_main.html',
                controller: sa.autoload('mainController')
            },
            {
                url:'/profile',
                templateUrl: './view/_profile.html',
                controller: sa.autoload('profileController')
            },
        ];
        for(var i in routerArr) {
            var router = routerArr[i];
            $routeProvider.when(router.url,router);
        }
        $routeProvider
            .when('/', {
                redirectTo:'/'
            })
            .otherwise({
                templateUrl: './view/_main.html',
                controller: sa.autoload('mainController')
            });
        //$locationProvider.html5Mode(true);
    }]);
});
