function CardsService($http) {
    this.getCards = function(url) {
        return $http.get(url)
    };
    this.hideCard = function(event) {
        const article = event.target.closest(".card");
        article && article.hidden !== hidden;
    }
}

export default CardsService;