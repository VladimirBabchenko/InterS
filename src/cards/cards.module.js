import angular from "angular";
import routing from "./cards.route";
import component from "./cards.component";
import service from "./cards.service";


angular
    .module("cardsList", [])
    .component("cardsList", component)
    .service("cardsService", service)
    .config(routing);