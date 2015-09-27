// contents of main.js:
console.log("Loading Application");

require.config({
    paths: {
    }
});

require(['./app'], function (app) {
    console.log("APP LOADED");
    angular.bootstrap(document, ['myapp']);
})