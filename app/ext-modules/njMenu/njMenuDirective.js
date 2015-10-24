(function () {
    'use strict';

    angular.module('njMenu').directive('njMenu', ['$timeout', function ($timeout) {
        return {
            scope: {

            },
            transclude: true,
            templateUrl: 'app/ext-modules/njMenu/njMenuTemplate.html',
            controller: 'njMenuController',
            link: function (scope, el, attr) {
                var item = el.find('.nj-selectable-item:first');
                $timeout(function () {
                    item.trigger('click');
                });
            }
        }
    }]);
}());