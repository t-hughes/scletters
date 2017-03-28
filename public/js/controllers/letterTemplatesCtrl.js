app.controller('letterTemplatesCtrl', function($scope, letterTemplatesSrv) {

    $scope.getAllTemplates = letterTemplatesSrv.getAllTemplates().then(function(response) {
        $scope.templates = response.data;
    });

    //Changes tempalte border to red when select button is clicked
    $scope.activeTemplate = function(index) {
        $scope.isSelected = index;
    };


});
