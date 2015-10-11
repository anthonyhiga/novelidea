/**
 *  Copyright: Third Party Software 2015(c)
 */
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
        //Application.initialize();
    };
})(Noveldea || (Noveldea = {}));
//# sourceMappingURL=index.js.map