import cardHTML from "./card.template.html";

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
                this.postsTotalLength = this.media.length;
            });
        this.showSocial = function (social, event) {
            cardService.getData("./src/cards/data/card-detail.json")
                .then(response => {
                    [].forEach.call(document.querySelectorAll(".md-raised.socials"), elem => elem.classList.remove("active"))
                    event.target.classList.add("active");
                    this.media = response.data.media.filter(value => value.social_network === social);
                })
        };

        this.approvedPost = function (event) {
            let postBlock = event.target.closest(".posts__item");
            document.querySelector(".posts-approved").appendChild(postBlock);
            event.target.remove();
        };

        this.rejectedPost = function (event) {
            let postBlock = event.target.closest(".posts__item");
            document.querySelector(".posts-rejected").appendChild(postBlock);
            postBlock.querySelector(".post__approved-btn").remove();
        };

        this.filterByKeyWords = function () {
            cardService.getData("./src/cards/data/card-detail.json")
                .then(response => {
                    this.media = this.keyWords.length ?
                        response.data.media.filter(value =>
                            this.keyWords.some(coincidence => new RegExp(`${coincidence}`, "i").test(value.caption))
                        ) :
                        response.data.media;

                })
        };

        this.showCaption = function (event) {
            let postBlock = event.target.closest(".posts__item");
            let postCaption = postBlock.querySelector(".post__caption");
            for (var i = 0; i < postBlock.parentNode.children.length; i++) {
                if (postBlock.parentNode.children[i] === postBlock) break;
            }
        
            cardService.getData("./src/cards/data/card-detail.json")
                .then(response => postCaption.innerHTML = response.data.media[i].caption);
        };

        this.removeCaption = function(event) {
            let postBlock = event.target.closest(".posts__item");
            let postCaption = postBlock.querySelector(".post__caption");
            for (var i = 0; i < postBlock.parentNode.children.length; i++) {
                if (postBlock.parentNode.children[i] === postBlock) break;
            }
        
            cardService.getData("./src/cards/data/card-detail.json")
                .then(response => postCaption.innerHTML = response.data.media[i].caption.substring(0, 100));
        };

        this.keyWords = ["stuck"];
    }
};

export default cardDetailComponent;
