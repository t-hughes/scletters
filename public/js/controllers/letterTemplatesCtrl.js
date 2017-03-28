app.controller('letterTemplatesCtrl', function($scope, letterTemplatesSrv) {

    $scope.getAllTemplates = letterTemplatesSrv.getAllTemplates().then(function(response) {
        $scope.templates = response.data;
    });

    //Changes tempalte border to red when select button is clicked
    $scope.activeTemplate = function(index) {
        $scope.isSelected = index;
    };

    //Saves users template selection on the service and carries it to the next step - Letter Personalization
    $scope.getOrderData = function() {
        console.log('Fetching order data from service...');
        $scope.order = letterTemplatesSrv.getOrderData();

        if ($scope.order[0] != null) {
            console.log('letterData:', $scope.order[0]);
            $scope.letterData = $scope.order[0].letterData;
        }
        if ($scope.order[1] != null) {
            console.log('customerData:', $scope.order[1]);
            $scope.customerData = $scope.order[1].customerData;
        }

    };

    $scope.saveTemplateSelection = function(data) {
        console.log(data);
        letterTemplatesSrv.saveTemplateSelection(data);
    };

    // $scope.saveLetterPersonalizationData = function(data) {
    //     console.log(data);
    //     letterTemplatesSrv.saveLetterPersonalizationData(data);
    // };

    $scope.saveOrderData = function(data) {
        console.log('SENDING TO SERVICE....', data);
        letterTemplatesSrv.saveOrderData(data);
    };

    $scope.getOrderData();

});
