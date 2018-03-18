function CardsService($http, $state, $stateParams) {
    this.getCards = function (url) {
        return $http.get(url)
        // return $http({
        //     url: url,
        //     method: "get",
        //     params: {id: $routeParams.id}
        // })
    };

    this.getId = function() {
        return $stateParams.id;
    }
}

export default CardsService;