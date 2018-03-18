function cardsRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider

    .state('dashboard', {
      url: "/dashboard",
      component: 'cardsList'
    })
    .state("challenge", {
      url: "/challenge",
      component: "cardsList"
    })
    .state("influencer", {
      url: "/influencer",
      component: "cardsList"
    })
    .state("giveaway", {
      url: "/giveaway",
      component: "cardsList"
    })
    // .state("campaignDetails", {
    //   url: "/campaigns/:id",
    //   component: "cardDetail"
    // })
}
/* @ngInject */
export default cardsRoutes;
