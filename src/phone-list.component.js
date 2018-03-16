angular
    .module("phonecatApp")
    .component("phoneList", {
        template:`<div id="app-wrapper">
        <ul>
            <li ng-repeat="${phone in $ctrl.phones}">
                <span>{{phone.name}}</span>
                <p>{{phone.snippet}}</p>
            </li>
        </ul>
    </div>`,
        controller: function PhonelistController() {
            this.phones = [
                {
                    name: "Nexus S",
                    snippet: "Fast just go."
                }, {
                    name: "Motorolla XOOM",
                    snippet: "The Next, Next Generation tablet."
                }, {
                    name: "Motorolla BOOM",
                    snippet: "The Next, Next Generation tablet."
                }
            ]
        }
    })