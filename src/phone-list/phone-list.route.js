function phoneListRoutes($stateProvider) {

    $stateProvider
        .state("phonelist", {
            url: "",
            component: "phoneList"
        })
        .state("phonelist1", {
            url: "/phonelist",
            component: "phoneList"
        })
}


export default phoneListRoutes;