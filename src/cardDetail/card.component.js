import cardHTML from "./card.template.html";

let cardDetailComponent = {
    template: cardHTML,
    controllerAs: "cardDetail",
    controller: function(cardService) {
        cardService.getCards("./src/cards/data/cards.json")
            .then(response => {
                this.allCards = response.data.campaign;
                let neededCard = cardService.getId();
                console.log("sdfsaf");
                this.card = this.allCards.find(card => card.id === neededCard);
            });

            console.log(this.card);
    }
}

export default cardDetailComponent;