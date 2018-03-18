import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import cardsList from "./cards/cards.module";
import cardDetail from "./cardDetail/card.module";
import "../node_modules/angular-aria";
import "../node_modules/angular-animate";
import "../node_modules/angular-messages";
import "../node_modules/angular-material/angular-material";

/* @ngInject */

import "../node_modules/angular-material/angular-material.css";
import "./scss/main.scss";

angular.module("cardsApp", [
    uiRouter,
    "ngMaterial",
    "ngMessages",
    "cardsList",
    "cardDetail"
])
