(function() {
  "use strict";

  angular
    .module("app")
    .config(appRoutes);

  appRoutes.$inject = ["$urlRouterProvider", "$stateProvider"];

  function appRoutes($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state("property_estimate", {
        url: "/property_estimate",
        templateUrl: "/public/template/property_estimate.html",
        controller: "EstimatePropertyCtrl",
        controllerAs: "vm"
      })
      .state("welcome", {
        url: "/welcome",
        templateUrl: "/public/template/welcome.html"
      });
    $urlRouterProvider.otherwise("/welcome");
  }

})();
