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
      // .state("welcome", {
      //   url: "/welcome",
      //   templateUrl: "/public/template/welcome.html"
      // })
      // .state("main", {
      //   url: "/main",
      //   templateUrl: "public/template/mainView.html"
      // })
      // .state("main.gross_rent", {
      //   url: "/gross_rent",
      //   templateUrl: "public/template/grossRent.html",
      //   controller: "EstimatePropertyCtrl",
      //   controllerAs: "vm"
      // })
      // .state("main.range", {
      //   url: "/property_range",
      //   templateUrl: "public/template/range.html",
      //   controller: "EstimatePropertyCtrl",
      //   controllerAs: "vm"
      // })
      // .state("main.cashOrList", {
      //   url: "/cin_list",
      //   templateUrl: "public/template/cashOrList.html",
      //   controller: "EstimatePropertyCtrl",
      //   controllerAs: "vm"
      // })
      // .state("main.confirmationSellNow", {
      //   url: "/confirmation/sell_now",
      //   templateUrl: "public/template/confirmationSellNow.html",
      //   controller: "EstimatePropertyCtrl",
      //   controllerAs: "vm"
      // })
      // .state("main.confirmationListingAgent", {
      //   url: "/confirmation/listing_agent",
      //   templateUrl: "public/template/confirmationListingAgent.html",
      //   controller: "EstimatePropertyCtrl",
      //   controllerAs: "vm"
      // });
    $urlRouterProvider.otherwise("/welcome");
  }

})();
