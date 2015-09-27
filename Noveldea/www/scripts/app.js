define(["require", "exports", "./controllers", "./services"], function (require, exports, c, s) {
    var controllers = c.controllers;
    var services = s.services;
    var app;
    (function (app) {
        console.log("Loading myapp");
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
                .state("app.props", {
                url: "/props",
                templateUrl: "app/templates/view-props.html",
                controller: "propsCtrl"
            })
                .state("app.prop", {
                url: "/prop/:id",
                templateUrl: "app/templates/view-prop.html",
                controller: "propCtrl"
            });
            $urlRouterProvider.otherwise("/app/home");
        });
    })(app = exports.app || (exports.app = {}));
});
//# sourceMappingURL=app.js.map