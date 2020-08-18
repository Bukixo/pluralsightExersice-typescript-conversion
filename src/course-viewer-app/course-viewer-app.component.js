var app;
(function (app) {
    var courseViewerApp;
    (function (courseViewerApp) {
        var CourseViewerAppComponent = /** @class */ (function () {
            function CourseViewerAppComponent() {
                this.templateUrl = "src/course-viewer-app/course-viewer-app.component.html";
            }
            return CourseViewerAppComponent;
        }());
        angular.module("courseViewer").component("courseViewerAppComponent", new CourseViewerAppComponent());
    })(courseViewerApp = app.courseViewerApp || (app.courseViewerApp = {}));
})(app || (app = {}));
