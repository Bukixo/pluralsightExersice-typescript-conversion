(function () {
    'use strict';

    angular.module('courseViewer').component('home', {
        templateUrl: 'course-viewer/home.component.html'
    })
})();

namespace app.courseViewerApp {

    class HomeComponent implements ng.IComponentOptions {

        public templateUrl: string = "/src/home/home.component.html"
    }

    angular.module("courseViewer").component('home', new HomeComponent());
}