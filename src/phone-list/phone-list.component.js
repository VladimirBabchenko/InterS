import phoneListHtml from "./phone-list.template.html";

const phoneListComponent = {
    template: phoneListHtml,
        controller: function() {
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
}

export default phoneListComponent;