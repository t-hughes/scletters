var app = angular.module('santaLettersApp', ['ui.router', 'ngMaterial', 'ngAnimate', 'ngSanitize', 'jkAngularCarousel']);

app.config(function($urlRouterProvider, $stateProvider) {

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
            }
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

        .state('letterCreate', {
            url: '/letterWorkshop',
            views: {
                nav: {
                    templateUrl: 'templates/nav.html'
                },
                footer: {
                    templateUrl: 'templates/footer.html'
                },
                content: {
                    templateUrl: 'partials/letterCreate.html'
                }
            },
            controller: 'letterCreateCtrl'
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
                    templateUrl: 'partials/letterApproval.html'
                }
            },
            controller: 'letterWorkshopCtrl'
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

});
