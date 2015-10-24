(function () {
    'use strict';
    angular.module('home')
               .controller('HomeCtrl', [HomeCtrl]);
    //.controller('MoviesCtrl', ['moviesResource', MoviesCtrl]); ////Uncomment his one to use $resource

    function HomeCtrl() {
        var vm = this;
        vm.firstName = "Nhan";
        vm.lastName = "Nguyen";
    }
}());