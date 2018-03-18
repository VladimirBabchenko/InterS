function cardsRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
    // $urlRouterProvider.otherwise("/");
    $stateProvider
  
      .state("campaignDetails", {
        url: "/campaigns/:id",
        component: "cardDetail"
      })
  }
  /* @ngInject */
  export default cardsRoutes;