import angular from "angular";
import routing from "./card.route";
import component from "./card.component";
import service from "./card.service";

angular
    .module("cardDetail", [])
    .component("cardDetail", component)
    .service("cardService", service)
    .config(routing);