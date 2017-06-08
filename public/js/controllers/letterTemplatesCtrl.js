app.controller('letterTemplatesCtrl', function($scope, letterTemplatesSrv) {

    $scope.getAllTemplates = letterTemplatesSrv.getAllTemplates().then(function(response) {
        $scope.templates = response.data;
    });

    //Changes tempalte border to red when select button is clicked
    $scope.activeTemplate = function(index) {
        $scope.isSelected = index;
    };

    //Saves users template selection on the service and carries it to the next step - Letter Personalization
    $scope.saveTemplateSelection = function(data) {
        console.log(data);
        letterTemplatesSrv.saveTemplateSelection(data);
    };


    // $scope.saveLetterPersonalizationData = function(data) {
    //     console.log(data);
    //     letterTemplatesSrv.saveLetterPersonalizationData(data);
    // };
});
