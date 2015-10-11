/**
 *  Copyright: Third Party Software 2015(c)
 */
define(["require", "exports", "./DataModel", "./ExampleData", "./Provider"], function (require, exports, dm, ed, p) {
    var dataModel = dm.DataModel;
    var exampleData = ed.ExampleData;
    var provider = p.Provider;
    var controllers;
    (function (controllers) {
        console.log("Loading Controllers");
        provider.initialize();
        function init($scope) {
            $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
        }
        angular.module("myapp.controllers", [])
            .controller("appCtrl", ["$scope", function ($scope) {
                init($scope);
            }])
            .controller("helpCtrl", ["$scope", function ($scope) {
                init($scope);
            }])
            .controller("homeCtrl", ["$scope", "$state", function ($scope, $state) {
                init($scope);
            }])
            .controller("chapterCtrl", ["$scope", "$state", "$stateParams", function ($scope, $state, $stateParams) {
                init($scope);
                $scope.entity = provider.ChapterProvider.singleton.get($stateParams.id);
            }])
            .controller("chaptersCtrl", ["$scope", "$state", function ($scope, $state) {
                init($scope);
                $scope.detail = false;
            }])
            .controller("chaptersListCtrl", ["$scope", "$state", function ($scope, $state) {
                $scope.items = provider.ChapterProvider.singleton.list("", true);
            }])
            .controller("characterCtrl", ["$scope", "$state", "$stateParams", function ($scope, $state, $stateParams) {
                init($scope);
                $scope.entity = provider.CharacterProvider.singleton.get($stateParams.id);
            }])
            .controller("charactersCtrl", ["$scope", "$state", function ($scope, $state) {
                init($scope);
                $scope.detail = false;
            }])
            .controller("charactersListCtrl", ["$scope", "$state", function ($scope, $state) {
                $scope.items = provider.CharacterProvider.singleton.list("", true);
            }])
            .controller("noteCtrl", ["$scope", "$state", "$stateParams", function ($scope, $state, $stateParams) {
                init($scope);
                $scope.entity = provider.NoteProvider.singleton.get($stateParams.id);
            }])
            .controller("notesCtrl", ["$scope", "$state", function ($scope, $state) {
                init($scope);
                $scope.detail = false;
            }])
            .controller("notesListCtrl", ["$scope", "$state", function ($scope, $state) {
                $scope.items = provider.NoteProvider.singleton.list("", true);
            }])
            .controller("sceneCtrl", ["$scope", "$state", "$stateParams", function ($scope, $state, $stateParams) {
                init($scope);
                $scope.entity = provider.SceneProvider.singleton.get($stateParams.id);
            }])
            .controller("scenesCtrl", ["$scope", "$state", function ($scope, $state) {
                init($scope);
                $scope.detail = false;
            }])
            .controller("scenesListCtrl", ["$scope", "$state", function ($scope, $state) {
                $scope.items = provider.SceneProvider.singleton.list("", true);
            }])
            .controller("propCtrl", ["$scope", "$state", "$stateParams", function ($scope, $state, $stateParams) {
                init($scope);
                $scope.entity = provider.PropProvider.singleton.get($stateParams.id);
            }])
            .controller("propsCtrl", ["$scope", "$state", function ($scope, $state) {
                init($scope);
                $scope.detail = false;
            }])
            .controller("propsListCtrl", ["$scope", "$state", function ($scope, $state) {
                $scope.items = provider.PropProvider.singleton.list("", true);
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
    })(controllers = exports.controllers || (exports.controllers = {}));
});
//# sourceMappingURL=controllers.js.map