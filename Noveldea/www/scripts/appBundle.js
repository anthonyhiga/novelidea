(function () {
    "use strict";
    angular.module("myapp", ["ionic", "myapp.controllers", "myapp.services"])
        .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && cordova["plugins"] && cordova["plugins"].Keyboard) {
                cordova["plugins"].Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
        .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("app", {
            url: "/app",
            abstract: true,
            templateUrl: "app/templates/view-menu.html",
            controller: "appCtrl"
        })
            .state("app.help", {
            url: "/help",
            templateUrl: "app/templates/view-help.html",
            controller: "helpCtrl"
        })
            .state("app.home", {
            url: "/home",
            templateUrl: "app/templates/view-home.html",
            controller: "homeCtrl"
        })
            .state("app.chapters", {
            url: "/chapters",
            templateUrl: "app/templates/view-chapters.html",
            controller: "chaptersCtrl"
        })
            .state("app.chapter", {
            url: "/chapter/:id",
            templateUrl: "app/templates/view-chapter.html",
            controller: "chapterCtrl"
        })
            .state("app.characters", {
            url: "/characters",
            templateUrl: "app/templates/view-characters.html",
            controller: "charactersCtrl"
        })
            .state("app.character", {
            url: "/character/:id",
            templateUrl: "app/templates/view-character.html",
            controller: "characterCtrl"
        })
            .state("app.notes", {
            url: "/notes",
            templateUrl: "app/templates/view-notes.html",
            controller: "notesCtrl"
        })
            .state("app.note", {
            url: "/note/:id",
            templateUrl: "app/templates/view-note.html",
            controller: "noteCtrl"
        })
            .state("app.objects", {
            url: "/objects",
            templateUrl: "app/templates/view-objects.html",
            controller: "objectsCtrl"
        })
            .state("app.object", {
            url: "/object/:id",
            templateUrl: "app/templates/view-object.html",
            controller: "objectCtrl"
        });
        $urlRouterProvider.otherwise("/app/home");
    });
})();
(function () {
    "use strict";
    angular.module("myapp.controllers", [])
        .controller("appCtrl", ["$scope", function ($scope) {
        }])
        .controller("helpCtrl", ["$scope", function ($scope) {
            $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
        }])
        .controller("homeCtrl", ["$scope", "$state", function ($scope, $state) {
            $scope.refresh = function () { $scope.$broadcast("scroll.refreshComplete"); };
            $scope.projects = [{
                    id: 'ASDFWSESASDF',
                    name: 'Sherlock Holmes',
                }];
        }])
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
// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var Noveldea;
(function (Noveldea) {
    "use strict";
    var Application;
    (function (Application) {
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        Application.initialize = initialize;
        function onDeviceReady() {
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
            // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        }
        function onPause() {
            // TODO: This application has been suspended. Save application state here.
        }
        function onResume() {
            // TODO: This application has been reactivated. Restore application state here.
        }
    })(Application = Noveldea.Application || (Noveldea.Application = {}));
    window.onload = function () {
        Application.initialize();
    };
})(Noveldea || (Noveldea = {}));
(function () {
    "use strict";
    angular.module("myapp.services", []).factory("myappService", ["$rootScope", "$http", function ($rootScope, $http) {
            var myappService = {};
            //starts and stops the application waiting indicator
            myappService.wait = function (show) {
                if (show)
                    $(".spinner").show();
                else
                    $(".spinner").hide();
            };
            return myappService;
        }]);
})();
//# sourceMappingURL=appBundle.js.map