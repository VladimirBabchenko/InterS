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
}
/* @ngInject */
export default cardsRoutes;
