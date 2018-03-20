import cardHTML from "./card.template.html";
// import cardService from "../cards/cards.service";

let cardDetailComponent = {
    template: cardHTML,
    controllerAs: "cardDetail",
    controller: function (cardService, $stateParams) {
        var self = this;
        cardService.getData("./src/cards/data/cards.json")
            .then(response => {
                this.allCards = response.data.campaigns;
                let neededCard = Number($stateParams.id);
                this.card = this.allCards.find(card => card.id === neededCard);
            })
        cardService.getData("./src/cards/data/card-detail.json")
            .then(response => {
                this.media = response.data.media;
                console.log(this.media);
            });  
                
        this.keyWords = ["funny", "cocky", "rubbish"];
    }
};

export default cardDetailComponent;