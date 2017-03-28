app.service('letterTemplatesSrv', function($http) {

    this.getAllTemplates = function(id) {
        return $http({
            method: 'GET', url: 'http://localhost:2000/api/templates' // Local only
            // url: '/api/products'
        });
    };

    var order = [];

    // this.getOrderData = function() {
    //     return order;
    // };

    this.saveTemplateSelection = function(data) {
        if (order[0]) {
            order.splice(0, 1, data);
        } else {
            order.push(data);
        }
        return order;
    };

});
