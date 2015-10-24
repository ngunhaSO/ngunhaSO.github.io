(function () {
    'use strict';
    angular.module('nguyenjacky')
            .controller('AppCtrl', ['$scope', '$window', '$timeout', '$rootScope',
                function ($scope, $window, $timeout, $rootScope) {

                    $scope.isMenuVisible = true;
                    $scope.isMenuButtonVisible = true;
                    $scope.isMenuVertical = true;

                    $scope.$on('nj-menu-item-selected-event', function (evt, data) {
                        checkWidth();
                        console.log('on received: nj-menu-item-selected-event');
                        broadcastMenuState();
                    });

                    //on receive nj-menu-orientation-changed-event from njMenuController.js
                    $scope.$on('nj-menu-orientation-changed-event', function (evt, data) {
                        $scope.isMenuVertical = data.isMenuVertical;
                    })

                    $($window).on('resize.nguyenjacky', function () {
                        $scope.$apply(function () {
                            checkWidth();
                            broadcastMenuState();
                        });
                    });

                    $scope.$on('$destroy', function () {
                        $($window).off('resize.nguyenjacky');
   
                    });

                    var checkWidth = function () {
                        var width = Math.max($($window).width(), $window.innerWidth);
                        $scope.isMenuVisible = (width >= 980); //a menu visible is when the width >= 768
                        $scope.isMenuButtonVisible = !$scope.isMenuVisible; //a menu button is visble if the menu is not visble
                        $scope.isMenuVertical = !$scope.isMenuButtonVisible;
                        console.log("$($window).width() = " + $($window).width());
                        console.log("$window.innerWidth = " + $window.innerWidth);
                        console.log("ismenubuttonvisible: " + $scope.isMenuButtonVisible);
                        console.log("isMenuVertical: " + $scope.isMenuVertical);
                    }

                    $scope.menuButtonClicked = function () {
                        $scope.isMenuVisible = !$scope.isMenuVisible;
                        broadcastMenuState();
                    };

                    //if the 3 bars button is not visible, we should not allow toggle orientation
                    var broadcastMenuState = function () {
                        $rootScope.$broadcast('nj-menu-show', {
                            show: $scope.isMenuVisible,
                            isVertical: $scope.isMenuVertical,
                            allowHorizontalToggle: !$scope.isMenuButtonVisible 
                        });
                    };

                    $timeout(function () {
                        checkWidth();
                    }, 0);
                }]);
}());