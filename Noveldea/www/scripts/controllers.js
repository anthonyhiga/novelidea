define(["require", "exports", "./DataModel"], function (require, exports, dm) {
    var dataModel = dm.DataModel;
    console.log("RUNNING!!!!!!!!!!!!!!!!!!!!!!!!!");
    angular.module("myapp.controllers", [])
        .controller("appCtrl", ["$scope", function ($scope) {
            $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
        }])
        .controller("helpCtrl", ["$scope", function ($scope) {
            $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
        }])
        .controller("homeCtrl", ["$scope", "$state", function ($scope, $state) {
            $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
        }])
        .controller("chapterCtrl", ["$scope", "$state", "$stateParams", function ($scope, $state, $stateParams) {
            $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
            // Test Entity
            $scope.entity = new dataModel.Chapter();
        }])
        .controller("chaptersCtrl", ["$scope", "$state", function ($scope, $state) {
            $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
        }])
        .controller("chaptersListCtrl", ["$scope", "$state", function ($scope, $state) {
            $scope.items = [];
            // Test Entity
            $scope.items.push(new dataModel.Chapter());
        }])
        .controller("characterCtrl", ["$scope", "$state", "$stateParams", function ($scope, $state, $stateParams) {
            $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
            // Test Entity
            $scope.entity = new dataModel.Character();
        }])
        .controller("charactersCtrl", ["$scope", "$state", function ($scope, $state) {
            $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
        }])
        .controller("charactersListCtrl", ["$scope", "$state", function ($scope, $state) {
            $scope.items = [];
            // Test Entity
            $scope.items.push(new dataModel.Character());
        }])
        .controller("noteCtrl", ["$scope", "$state", "$stateParams", function ($scope, $state, $stateParams) {
            $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
            // Test Entity
            $scope.entity = new dataModel.Note();
        }])
        .controller("notesCtrl", ["$scope", "$state", function ($scope, $state) {
            $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
        }])
        .controller("notesListCtrl", ["$scope", "$state", function ($scope, $state) {
            $scope.items = [];
            // Test Entity
            $scope.items.push(new dataModel.Note());
        }])
        .controller("sceneCtrl", ["$scope", "$state", "$stateParams", function ($scope, $state, $stateParams) {
            $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
            // Test Entity
            $scope.entity = new dataModel.Scene();
        }])
        .controller("scenesCtrl", ["$scope", "$state", function ($scope, $state) {
            $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
        }])
        .controller("scenesListCtrl", ["$scope", "$state", function ($scope, $state) {
            $scope.items = [];
            // Test Entity
            $scope.items.push(new dataModel.Scene());
        }])
        .controller("propCtrl", ["$scope", "$state", "$stateParams", function ($scope, $state, $stateParams) {
            $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
            // Test Entity
            $scope.entity = new dataModel.Prop();
        }])
        .controller("propCtrl", ["$scope", "$state", function ($scope, $state) {
            $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
            $scope.items = [];
            $scope.detail = false;
        }])
        .controller("propsListCtrl", ["$scope", "$state", function ($scope, $state) {
            $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
            $scope.items = [];
            // Test Entity
            $scope.items.push(new dataModel.Prop());
        }])
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
});
//# sourceMappingURL=controllers.js.map