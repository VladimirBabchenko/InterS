import cardsHtml from "./cards.html";

let cardsComponent = {
    template: cardsHtml,
    controllerAs: "cards",
    controller: function (cardsService) {
        cardsService.getCards("./src/cards/data/cards.json")
            .then(response => {
                this.allCards = response.data.campaigns;
                switch (cardsService.cardsState()) {
                    case "challenge":
                        this.cardsList = this.allCards.filter(card => card.type === "Challenge");
                        document.querySelector(".additional a").hidden = true;
                        break;
                    case "influencer":
                        this.cardsList = this.allCards.filter(card => card.type === "Influencer campaign");
                        document.querySelector(".additional a").hidden = true;
                        break;
                    case "giveaway":
                        this.cardsList = this.allCards.filter(card => card.type === "Giveaway");
                        document.querySelector(".additional a").hidden = true;
                        break;
                    case "dashboard":
                        this.cardsList = this.allCards.splice(0, 7);
                }
            })

        this.hideBtn = function (event) {
            const article = event.target.closest(".card");
            article && (article.hidden = !article.hidden);
        };

        this.addNewCards = function (event) {
            (this.allCards.length > 7 && this.cardsList.length > 7) ?
                this.cardsList = this.cardsList.concat(this.allCards.splice(0, 7)) :
                this.cardsList = this.cardsList.concat(this.allCards.splice(0));
            event.currentTarget.hidden = !event.currentTarget.hidden;
        }
    }
}

export default cardsComponent;