app.controller('productDetailsCtrl', function ($scope, $state, santasShopSrv, userCartSrv) {

  // Get Product for Product View
 $scope.getProduct = santasShopSrv.getProduct($state.params.id)
   .then(function(response) {
     $scope.product = response.data;
   });

   $scope.productQty = 1;

   // Send Product to Cart
   $scope.addToCart = (item) => {
     item.productQty = $scope.productQty;
     $scope.cartstorage = userCartSrv.cartStorage(item);
   };

});
