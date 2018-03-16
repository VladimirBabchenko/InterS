function cardsRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      // .state('cards', {
      //   url: "",
      //   component: 'cardsList'
      // })
      .state('cards', {
        url: "/dashboard",
        component: 'cardsList'
      })
  }
  /* @ngInject */
  export default cardsRoutes;