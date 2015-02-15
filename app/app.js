
var app = angular.module('caregiver', ['ngRoute', 'ui.bootstrap']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/ask',
            {
                controller: 'MedicalAsk',
                templateUrl: '/app/partials/ask.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .otherwise({ redirectTo: '/ask' });
});




