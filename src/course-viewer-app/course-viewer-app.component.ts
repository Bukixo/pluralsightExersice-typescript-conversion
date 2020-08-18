namespace app.courseViewerApp {

        class CourseViewerAppComponent implements ng.IComponentOptions {
        public templateUrl: string = "src/course-viewer-app/course-viewer-app.component.html";
    }

    angular.module("courseViewer").component("courseViewerAppComponent", new CourseViewerAppComponent());

}