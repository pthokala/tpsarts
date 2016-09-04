/**
 * Created by PardhuThokala on 12/21/14.
 */
app.config(['$routeProvider', '$locationProvider', '$provide',
    function ($routeProvider, $locationProvider, $provide) {

        $routeProvider
            .when('/',
            {
                templateUrl: 'modules/home/home.html',
                controller: "homeController",
                caseInsensitiveMatch: true
            })
            .when('/portraiture',
            {
                templateUrl: 'modules/portraiture/portraiture.html',
                controller: "portraitureController",
                caseInsensitiveMatch: true
            })
            .when('/nature',
            {
                templateUrl: 'modules/nature/nature.html',
                controller: "natureController",
                caseInsensitiveMatch: true
            })
            .when('/contact',
            {
                templateUrl: 'modules/contact/contact.html',
                controller: "contactController",
                caseInsensitiveMatch: true
            })
            .otherwise({ redirectTo: '/' });
}]);
