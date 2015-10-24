(function () {
    'use strict';
    angular.module('about')
               .controller('AboutCtrl', [AboutCtrl]);
    //.controller('MoviesCtrl', ['moviesResource', MoviesCtrl]); ////Uncomment his one to use $resource

    function AboutCtrl() {
        var vm = this;
        vm.firstName = "Nhan";
        vm.lastName = "Nguyen";
    }
}());