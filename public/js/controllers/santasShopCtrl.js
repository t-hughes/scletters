app.controller('santasShopCtrl', function($scope, $state, santasShopSrv, userCartSrv) {

    $scope.getAllProducts = santasShopSrv.getAllProducts()
          .then(function(response) {
            $scope.products = response.data;
        });

        $scope.productQty = 1;

        // Send Product to Cart
        $scope.addToCart = (item) => {
          item.productQty = $scope.productQty;
          $scope.cartstorage = userCartSrv.cartStorage(item);
        };


});
