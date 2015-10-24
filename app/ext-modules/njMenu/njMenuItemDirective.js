(function () {
    'use strict';

    angular.module('njMenu').directive('njMenuItem', function () {
        return {
            require: '^njMenu',
            scope: {
                label: '@',
                icon: '@',
                route: '@'
            },
            templateUrl: 'app/ext-modules/njMenu/njMenuItemTemplate.html',
            link: function (scope, el, attr, ctrl) {
                scope.isActive = function () {
                    return el === ctrl.getActiveElement();
                };

                scope.isVertical = function () {
                    return ctrl.isVertical() || el.parents('.nj-subitem-selection').length > 0;
                }

                el.on('click', function (evt) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    scope.$apply(function () {
                        ctrl.setActiveElement(el); //call setter from njMenuController
                        ctrl.setRoute(scope.route); //call setter from njMenuController. scope.route value comes from scope above
                    });
                })
            }
        }
    })
}());