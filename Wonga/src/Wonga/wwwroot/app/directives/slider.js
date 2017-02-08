(function () {

    "use strict";

    angular.module("customControls")
    .directive("asSlider", slider);

    function slider() {

        return {
            scope: {
                value: "=value",
                options: "=options"
            },
            restrict: "E",
            templateUrl: "/app/directives/templates/slider.html",
            controller: function ($scope, $element) {
                $scope.onMinusClick = function () {
                    if ($scope.value > $scope.options.floor) {
                        $scope.value--;
                    }
                };

                $scope.onPlusClick = function () {
                    if ($scope.value < $scope.options.ceil) {
                        $scope.value++;
                    }
                };
            }
        };
    };

})();