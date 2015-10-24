(function () {
    'use strict';
    angular.module('project')
               .controller('ProjectCtrl', [ProjectCtrl]);
    //.controller('MoviesCtrl', ['moviesResource', MoviesCtrl]); ////Uncomment his one to use $resource

    function ProjectCtrl() {
        var vm = this;
        vm.firstName = "Nhan";
        vm.lastName = "Nguyen";
    }
}());