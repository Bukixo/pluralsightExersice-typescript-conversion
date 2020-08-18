namespace app.courseViewerApp {

    class MainNavigatorComponent implements ng.IComponentOptions {
        public templateUrl: string = "/src/main-navigator/main-navigator.component.html"
    }

    angular.module("courseViewer").component("mainNavigator", new MainNavigatorComponent());
}