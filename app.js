let app = angular.module('app', ['ui.router']);

app.config(function config($stateProvider, $urlRouterProvider) {
 
//otherwise defaults to the home screen when there is no valid url
  $urlRouterProvider.otherwise('/home');
//state determines what is displayed on each view.
  $stateProvider.state("home", {
    url: "/home",
    controller: "FirstCtrl as first",
    templateUrl: "templates/first.html"
  })
  .state("second", {
    url: "/second",
    controller: "SecondCtrl as second",
    templateUrl: "templates/second.html"
  })
  .state("finished", {
    url: "/third",
    controller: "ThirdCtrl as third",
    templateUrl: "templates/third.html"
  })
});

//this is pulling in the user input from the first and second Ctrls to fill out the third state
app.service("userData", function userData() {
  var userData = this;
});