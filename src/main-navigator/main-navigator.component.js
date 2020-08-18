var app;
(function (app) {
    var courseViewerApp;
    (function (courseViewerApp) {
        var MainNavigatorComponent = /** @class */ (function () {
            function MainNavigatorComponent() {
                this.templateUrl = "/src/main-navigator/main-navigator.component.html";
            }
            return MainNavigatorComponent;
        }());
        angular.module("courseViewer").component("mainNavigator", new MainNavigatorComponent());
    })(courseViewerApp = app.courseViewerApp || (app.courseViewerApp = {}));
})(app || (app = {}));
