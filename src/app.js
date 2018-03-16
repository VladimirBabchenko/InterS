import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import cardsList from "./cards/cards.module";


import "./scss/main.scss";

angular.module("cardsApp", [
    uiRouter,
    "cardsList"
])

