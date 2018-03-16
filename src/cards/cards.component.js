import cardsHtml from "./cards.html";

let cardsComponent = {
    template: cardsHtml,
    controllerAs: "cards",
    controller: function(cardsService) {
        var self = this;
        cardsService.getCards("./src/cards/data/cards.json")
        .then(response => {
            this.cardsList = response.data.campaigns.splice(0,8);
            this.allCards = response.data.campaigns;
        });


        this.hideBtn = function(event) {
            const article = event.target.closest(".card");
            article && (article.hidden = !article.hidden);
            console.log(this.cardsList.length)
        };

        this.addNewCards = function() {
            this.allCards >=8 ? 
                this.cardsList.push(this.allCards.splice(0, 8)) :
                this.cardsList.push(this.allCards.splice(0))
        }
    } 
}

export default cardsComponent;