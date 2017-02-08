(function () {

    "use strict";

    angular.module("customControls")
    .directive("asCash", cash);

    function cash() {
        return {
            scope: {
                cash: "=cash"
            },
            restrict: "E",
            templateUrl: "/app/directives/templates/cash.html"
        };
    };

})();