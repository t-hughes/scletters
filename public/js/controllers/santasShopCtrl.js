app.controller('santasShopCtrl', function($scope, santasShopSrv, userCartSrv) {

    $scope.getAllProducts = santasShopSrv.getAllProducts()
        .then(function(response) {
          $scope.products = response.data;
      });

});
