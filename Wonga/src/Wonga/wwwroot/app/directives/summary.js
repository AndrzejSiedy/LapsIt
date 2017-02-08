(function () {

    "use strict";

    angular.module("customControls")
    .directive("asSummary", summary);

    function summary() {
        return {
            scope: {
                borrowing: "=borrowing",
                interest: "=interest",
                total: "=total"
            },
            restrict: "E",
            templateUrl: "/app/directives/templates/summary.html"
        };
    };

})();