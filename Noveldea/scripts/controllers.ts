/**
 *  Copyright: Third Party Software 2015(c)
 */

import dm = require("./DataModel");
var dataModel = dm.DataModel;
import ed = require("./ExampleData");
var exampleData = ed.ExampleData;
import p = require("./Provider");
var provider = p.Provider;
declare var angular;

export module controllers {
    console.log("Loading Controllers");
    provider.initialize();

    function init($scope) {
        $scope.refresh = () => { $scope.$broadcast("scroll.refreshComplete"); };
    }

    angular.module("myapp.controllers", [])
        .controller("appCtrl", ["$scope", ($scope) => {
            init($scope);
        }])

        .controller("helpCtrl", ["$scope", ($scope) => {
            init($scope);
        }])

    //homeCtrl provides the logic for the home screen
        .controller("homeCtrl", ["$scope", "$state", ($scope, $state) => {
            init($scope);
        }])

    // chapters Controllers
        .controller("chapterCtrl", ["$scope", "$state", "$stateParams", ($scope, $state, $stateParams) => {
            init($scope);
            $scope.entity = provider.ChapterProvider.singleton.get($stateParams.id);
        }])
        .controller("chaptersCtrl", ["$scope", "$state", ($scope, $state) => {
            init($scope);
            $scope.detail = false;
        }])
        .controller("chaptersListCtrl", ["$scope", "$state", ($scope, $state) => {
            $scope.items = provider.ChapterProvider.singleton.list("", true);
        }])

    // Characters Controllers
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

    // Notes Controllers
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

    // Scene Controllers
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

    // Prop Controllers
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
}