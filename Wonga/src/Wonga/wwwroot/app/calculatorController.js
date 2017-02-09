(function () {

    "use strict";

    var app = angular.module("app-wonga");
    
    app.controller("calculator", ["$scope", calculator]);


    function calculator($scope) {
        var vm = this;

        vm.options = {
            // 292% pa == x * 2.92
            apr: 2.92
        };

        vm.monthly = vm.options.apr / 12;
        vm.weeky = vm.options.apr / 52.177457;
        vm.daily = vm.options.apr / 365.242199;

        vm.interest = 0;
        vm.total = 0;

        vm.sliderCash = {
            value: 111,
            options: {
                floor: 50,
                ceil: 400,
                step: 1,
                showSelectionBar: true
            }
        };

        // bind to cash slider change
        // cach input change will automatically trigger vm.sliderCash.value change, so it will be intercepted also
        $scope.$watch(function () {
            return vm.sliderCash.value;
        }, function () {
            // do calulation here
            calulateInterest();
        });

        vm.sliderTime = {
            value: 16,
            options: {
                floor: 1,
                ceil: 35,
                step: 1,
                showSelectionBar: true
            }
        };

        // bind to time slider change
        // time input change will automatically trigger vm.sliderTime.value change, so it will be intercepted also
        $scope.$watch(function () {
            return vm.sliderTime.value;
        }, function () {
            // do calculation here
            calulateInterest();
        });

        

        function calulateInterest() {
            vm.interest = vm.sliderCash.value * vm.daily * vm.sliderTime.value;
            vm.total = vm.sliderCash.value + vm.interest;
        }
    };


})();