app.service('letterTemplatesSrv', function($http) {

    this.getAllTemplates = function(id) {
        return $http({
            method: 'GET', url: 'http://localhost:2000/api/templates' // Local only
            // url: '/api/products'
        });
    };

    var savedData = [];

    this.saveTemplateSelection = function(data) {
      if(savedData[0]) {
          savedData.splice(0, 1, data);
      } else {
    savedData.push(data);
    }
    return savedData;
    };

});
