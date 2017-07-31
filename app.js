let app = angular.module('app', ['ui.router']);

app.config(function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

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


app.service("userData", function userData() {
  var userData = this;

  // userData.firstName = "";
});