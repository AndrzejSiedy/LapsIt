(function () {

    "use strict";

    angular.module("customControls")
    .directive("asTime", time);

    function time() {
        return {
            scope: {
                time: "=time"
            },
            restrict: "E",
            templateUrl: "/app/directives/templates/time.html"
        };
    };

})();