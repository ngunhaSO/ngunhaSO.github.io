(function () {
    'use strict';
    angular.module('location')
               .controller('LocationCtrl', [LocationCtrl]);
    //.controller('MoviesCtrl', ['moviesResource', MoviesCtrl]); ////Uncomment his one to use $resource

    function LocationCtrl() {
        var vm = this;
        vm.firstName = "Nhan";
        vm.lastName = "Nguyen";
    }
}());