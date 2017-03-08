app.controller('santasShopCtrl', function($scope, santasShopSrv) {


    $scope.getAllProducts = santasShopSrv.getAllProducts()
        .then(function(response) {
          $scope.products = response.data;
      });

     //This adds the red border and gray background when the package is selected.
    //    $scope.activeTemplate = function(index) {
    //        $scope.isSelected = index;
    //    };

});
