(function () {
    "use strict";

    angular.module("nguyenjacky")
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/home/homeTemplate.html',
                controller: 'HomeCtrl as vm'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/about/aboutTemplate.html',
                controller: 'AboutCtrl as vm'
            })
            .state('project', {
                url: '/project',
                templateUrl: 'app/project/projectTemplate.html',
                controller: 'ProjectCtrl as vm'
            })
            .state('location', {
                url: '/location',
                templateUrl: 'app/location/locationTemplate.html',
                controller: 'LocationCtrl as vm'
            })
    }]);
}());