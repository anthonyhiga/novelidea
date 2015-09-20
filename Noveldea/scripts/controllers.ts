(function () {
    "use strict";

    angular.module("myapp.controllers", [])

    .controller("appCtrl", ["$scope", function ($scope) {
    }])

    //homeCtrl provides the logic for the home screen
    .controller("homeCtrl", ["$scope", "$state", function ($scope, $state) {
        $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };

        $scope.projects = [{
            id: 'ASDFWSESASDF',
            name: 'Sherlock Holmes',
        }];
    }])

    // Chapters Controllers
    .controller("chapterCtrl", ["$scope", "$state", "$stateParams", function ($scope, $state, $stateParams) {
        $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
        $scope.shortName = "ShortName";
        $scope.fullName = "FullName";
    }])
    .controller("chaptersCtrl", ["$scope", "$state", function ($scope, $state) {
        $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
    }])
    .controller("chaptersListCtrl", ["$scope", "$state", function ($scope, $state) {
        $scope.items = ['Sherlock', 'Watson', 'Bell'];
    }])

    // Characters Controllers
    .controller("characterCtrl", ["$scope", "$state", "$stateParams", function ($scope, $state, $stateParams) {
        $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
        $scope.shortName = "ShortName";
        $scope.fullName = "FullName";
    }])
    .controller("charactersCtrl", ["$scope", "$state", function ($scope, $state) {
        $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
    }])
    .controller("charactersListCtrl", ["$scope", "$state", function ($scope, $state) {
        $scope.items = ['Sherlock', 'Watson', 'Bell'];
    }])

    // Notes Controllers
    .controller("noteCtrl", ["$scope", "$state", "$stateParams", function ($scope, $state, $stateParams) {
        $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
        $scope.shortName = "ShortName";
        $scope.fullName = "FullName";
    }])
    .controller("notesCtrl", ["$scope", "$state", function ($scope, $state) {
        $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
    }])
    .controller("notesListCtrl", ["$scope", "$state", function ($scope, $state) {
        $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
        $scope.items = ['Sherlock', 'Watson', 'Bell'];
    }])

    // Objects Controllers
    .controller("objectCtrl", ["$scope", "$state", "$stateParams", function ($scope, $state, $stateParams) {
        $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
        $scope.shortName = "ShortName";
        $scope.fullName = "FullName";
    }])
    .controller("objectsCtrl", ["$scope", "$state", function ($scope, $state) {
        $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
    }])
    .controller("objectsListCtrl", ["$scope", "$state", function ($scope, $state) {
        $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
        $scope.items = [
            {
                name: 'Death Hammer',
                description: 'Superpowerful hammer'
            },
            {
                name: 'Mythril Crystal',
                description: 'Object of great power'
            },
        ];
    }])

    //errorCtrl managed the display of error messages bubbled up from other controllers, directives, myappService
    .controller("errorCtrl", ["$scope", "myappService", function ($scope, myappService) {
        //public properties that define the error message and if an error is present
        $scope.error = "";
        $scope.activeError = false;

        //function to dismiss an active error
        $scope.dismissError = function () {
            $scope.activeError = false;
        };

        //broadcast event to catch an error and display it in the error section
        $scope.$on("error", function (evt, val) {
            //set the error message and mark activeError to true
            $scope.error = val;
            $scope.activeError = true;

            //stop any waiting indicators (including scroll refreshes)
            myappService.wait(false);
            $scope.$broadcast("scroll.refreshComplete");

            //manually apply given the way this might bubble up async
            $scope.$apply();
        });
    }]);
})();