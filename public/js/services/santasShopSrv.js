app.service('santasShopSrv', function($http) {

    this.getAllProducts = function(id) {
      return $http({
        method: 'GET',
        url: 'http://localhost:2000/api/products' // Local only
        // url: '/api/products'
      });
    };

    this.getProduct = function(id) {
      return $http({
        method: 'GET',
        url: `http://localhost:2000/api/products/${id}` // Local only
        // url: `/api/products/${id}`
      });
    };


});
