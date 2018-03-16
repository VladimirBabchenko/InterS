import cardsHtml from "./cards.html";

let cardsComponent = {
    template: cardsHtml,
    controllerAs: "cards",
    controller: function(cardsService) {
        cardsService.getCards("./src/cards/data/cards.json")
        .then(response => this.cardsList = response.data.campaigns);
    },
    hideBtn: function(cardsService) {
        return cardsService.hideCard()
    },

    sayHello: function() {
        console.log("sdfsfd");
    }
}

export default cardsComponent;