app.controller('productDetailsCtrl', function ($scope, $state, santasShopSrv) {

  // Get Product for Product View
  $scope.getProduct = santasShopSrv.getProduct($state.params.id)
    .then(function(response) {
      $scope.product = response.data;
    });

});
