(function () {
    'use strict';

    angular.module('njMenu').controller('njMenuController', ['$scope', '$rootScope','$state',
        function ($scope, $rootScope, $state) {

            $scope.isVertical = true;
            //$scope.openMenuScope = null;
            $scope.allowHorizontalToggle = true;
            $scope.showMenu = true;
            
            this.getActiveElement = function () {
                return $scope.activeElement;
            }

            this.setActiveElement = function (el) {
                $scope.activeElement = el;
            }

            this.isVertical = function () {
                return $scope.isVertical;
            }

            //this.setOpenMenuScope = function (scope) {
            //    $scope.openMenuScope = scope;
            //}

            this.setRoute = function (route) {
                $rootScope.$broadcast('nj-menu-item-selected-event', { }); //broadcast to appController know that an item has been selected
                $state.go(route);         //go to that state     
            }

            //handling click event to toggle the menu in njMenuTemplate.html
            $scope.toggleMenuOrientation = function () {
                //close any open menu
                //if ($scope.openMenuScope)
                //    $scope.openMenuScope.closeMenu();

                $scope.isVertical = !$scope.isVertical;
                //broadcast to appController.js know that a click event to change orientation has been fired
                $rootScope.$broadcast('nj-menu-orientation-changed-event', { isMenuVertical: $scope.isVertical });
            }

            angular.element(document).bind('click', function (e) {
                if ($scope.openMenuScope && !$scope.isVertical) {
                    if ($(e.target).parent().hasClass('nj-selectable-item'))
                        return;
                    //$scope.$apply(function () {
                    //    $scope.openMenuScope.closeMenu();
                    //});
                    e.preventDefault();
                    e.stopPropagation();
                }
            });

            $scope.$on('nj-menu-show', function (evt, data) {
                $scope.showMenu = data.show;
                $scope.isVertical = data.isVertical;
                $scope.allowHorizontalToggle = data.allowHorizontalToggle;
            });
        }
    ])
}());