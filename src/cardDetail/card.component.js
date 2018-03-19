import cardHTML from "./card.template.html";

let cardDetailComponent = {
    template: cardHTML,
    controllerAs: "cardDetail",
    controller: function(cardService) {
        cardService.getCards("./src/cards/data/cards.json")
            .then(response => {
                this.allCards = response.data.campaigns;
                let neededCard = cardService.getId();
                this.card = this.allCards.find(card => card.id === neededCard);
                console.log(this.card);
            });
            this.keyWords = ["funny", "cocky", "rubbish"];
    }
}

export default cardDetailComponent;