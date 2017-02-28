var app = angular.module('santaLettersApp', ['ui.router', 'ngMaterial', 'ngAnimate', 'ngSanitize', 'ngMessages']);

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
        views: {
            content: {
                templateUrl: 'partials/home.html'
            },

            footer: {
                templateUrl: 'templates/footer.html'
            }
        },
        controller: 'carouselCtrl'
    })

    .state('letterTemplates', {
        url: '/letterTemplates',
        views: {
            nav: {
                templateUrl: 'templates/nav.html'
            },
            footer: {
                templateUrl: 'templates/footer.html'
            },
            content: {
                templateUrl: 'partials/letterTemplates.html'
            }
        },
        controller: 'letterTemplateCtrl'
    })

    .state('letterPersonalization', {
        url: '/letterWorkshop',
        views: {
            nav: {
                templateUrl: 'templates/nav.html'
            },
            footer: {
                templateUrl: 'templates/footer.html'
            },
            content: {
                templateUrl: 'partials/letterPersonalization.html'
            }
        },
        controller: 'letterPersonalizationCtrl'
    })

    .state('letterApproval', {
        url: '/letterApproval',
        views: {
            nav: {
                templateUrl: 'templates/nav.html'
            },
            footer: {
                templateUrl: 'templates/footer.html'
            },
            content: {
                templateUrl: 'partials/letterPersonalization.html'
            }
        },
        // controller: 'letterWorkshopCtrl'
    })

    .state('santasShop', {
        url: '/santasShop',
        views: {
            nav: {
                templateUrl: 'templates/nav.html'
            },
            footer: {
                templateUrl: 'templates/footer.html'
            },
            content: {
                templateUrl: 'partials/santasShop.html'
            }
        },
        controller: 'santasShopCtrl'
    })

    .state('productDetails', {
        url: '/productDetails/:id',
        views: {
            nav: {
                templateUrl: 'templates/nav.html'
            },
            footer: {
                templateUrl: 'templates/footer.html'
            },
            content: {
                templateUrl: 'partials/productDetails.html'
            }
        },
        controller: 'productDetailsCtrl'
    })

    .state('userCart', {
        url: '/userCart',
        views: {
            nav: {
                templateUrl: 'templates/nav.html'
            },
            footer: {
                templateUrl: 'templates/footer.html'
            },
            content: {
                templateUrl: 'partials/userCart.html'
            }
        },
        controller: 'userCartCtrl'
    })

    .state('userCheckout', {
        url: '/userCheckout',
        views: {
            nav: {
                templateUrl: 'templates/nav.html'
            },
            footer: {
                templateUrl: 'templates/footer.html'
            },
            content: {
                templateUrl: 'partials/userCheckout.html'
            }
        },
        controller: 'letterWorkshopCtrl'
    })

    .state('about', {
        url: '/about',
        views: {
            nav: {
                templateUrl: 'templates/nav.html'
            },
            footer: {
                templateUrl: 'templates/footer.html'
            },
            content: {
                templateUrl: 'partials/about.html'
            }
        }
    })

    .state('contact', {
        url: '/contact',
        views: {
            nav: {
                templateUrl: 'templates/nav.html'
            },
            footer: {
                templateUrl: 'templates/footer.html'
            },
            content: {
                templateUrl: 'partials/contact.html'
            }
        }
    })

    .state('howItWorks', {
        url: '/howItWorks',
        views: {
            nav: {
                templateUrl: 'templates/nav.html'
            },
            footer: {
                templateUrl: 'templates/footer.html'
            },
            content: {
                templateUrl: 'partials/howItWorks.html'
            }
        }
    });

    // UI ROUTER END//

});
