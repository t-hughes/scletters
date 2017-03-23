var app = angular.module('santaLettersApp', ['ui.router', 'ngMaterial', 'ngAnimate', 'ngSanitize', 'ngMessages', 'md-steppers']);

app.config(function($urlRouterProvider, $stateProvider, $mdThemingProvider) {

    // ANGULAR MATERIAL CUSTOM THEME COLOR //
    var myRedColor = $mdThemingProvider.extendPalette('red', {'500': '#D9534F'});
    // Register the new color palette map with the name <code>myRedColor</code>
    $mdThemingProvider.definePalette('myRedColor', myRedColor);
    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default').primaryPalette('myRedColor');

    // ANGULAR MATERIAL CUSTOM THEME COLOR END//

    // UI ROUTER //

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    .state('home', {
        url: '/home',
        templateUrl: 'partials/home.html',
        controller: 'carouselCtrl'
    })

    .state('letterTemplates', {
        url: '/letterTemplates',
        templateUrl: 'partials/letterTemplates.html',
        controller: 'letterTemplatesCtrl'
    })

    .state('santasShop', {
        url: '/santasShop',
        templateUrl: 'partials/santasShop.html',
        controller: 'santasShopCtrl'
    })

    .state('about', {
        url: '/about',
        templateUrl: 'partials/about.html'
    })

    .state('contact', {
        url: '/contact',
        templateUrl: 'partials/contact.html'
    });

    // UI ROUTER END//


});
