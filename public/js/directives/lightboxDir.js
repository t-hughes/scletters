app.directive('mdLightbox', ['$mdDialog', function($mdDialog){
    return {
        link: function($scope, elem, attrs){

            elem.on('click',function(){
                var image = attrs.lbimage;
                var title = attrs.mdLightboxTitle;
                showLightboxModal(image, title);

            });

            //Lightbox Modal
            function showLightboxModal(image, title) {
                var confirm = $mdDialog.confirm({
                    templateUrl: './templates/lightbox.html',
                    clickOutsideToClose: true,
                    controller: lightboxCtrl
                });

                $mdDialog.show(confirm);

                function lightboxCtrl($scope, $mdDialog) {
                    $scope.image = image;
                    $scope.title = title;

                    $scope.cancel = function() {
                        $mdDialog.cancel();
                    };

                }

            }


        }
    }
}]);
