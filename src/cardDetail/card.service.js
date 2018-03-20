function CardService($http, $state, $stateParams) {
    this.getData = function (url) {
        return $http.get(url)
    };
}

export default CardService;