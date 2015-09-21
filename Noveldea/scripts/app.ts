declare var angular: any;
declare var cordova: Cordova;
declare var StatusBar: any;


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