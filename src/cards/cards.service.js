function CardsService($http, $state) {
    this.getCards = function (url) {
        return $http.get(url)
    };
    this.hideCard = function (event) {
        const article = event.target.closest(".card");
        article && article.hidden !== hidden;
    };

    this.cardsState = function () {
        return $state.current.name;
    }
}

export default CardsService;