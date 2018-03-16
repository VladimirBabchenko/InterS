import angular from "angular";
import routing from "./phone-list.route";
import phoneListComponent from "./phone-list.component";

angular
    .module("phoneList", [])
    .component("phoneList", phoneListComponent)
    .config(routing); 