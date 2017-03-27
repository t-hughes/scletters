app.service('letterTemplatesSrv', function($http) {

    this.getAllTemplates = function(id) {
      return $http({
        method: 'GET',
        url: 'http://localhost:2000/api/templates' // Local only
        // url: '/api/products'
      });
    };

});
