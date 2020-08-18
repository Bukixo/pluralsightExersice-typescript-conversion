(function () {
    'use strict';
    angular.module('courseViewer').component('home', {
        templateUrl: 'course-viewer/home.component.html'
    });
})();
var app;
(function (app) {
    var courseViewerApp;
    (function (courseViewerApp) {
        var HomeComponent = /** @class */ (function () {
            function HomeComponent() {
                this.templateUrl = "/src/home/home.component.html";
            }
            return HomeComponent;
        }());
        angular.module("courseViewer").component('home', new HomeComponent());
    })(courseViewerApp = app.courseViewerApp || (app.courseViewerApp = {}));
})(app || (app = {}));
