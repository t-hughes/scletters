app.controller('carouselCtrl', function($scope) {
  $scope.imgSrcs = [
    "https://placeimg.com/900/700/tech",
    "https://placeimg.com/900/700/nature",
    "https://placeimg.com/900/700/tech",
    "https://placeimg.com/900/700/nature"
  ];
  $scope.interval = 3500;
});
app.directive("zaiCarousel", function($interval) {
  return {
    restrict: "E",
    template: "<div class='zai-carousel-container'><img class='zai-carousel-img' ng-src='{{imgSrcs[index]}}'></div>",

    link: function(scope, element, attrs) {
      scope.imgSrcs = JSON.parse(attrs.imgSrcs);
      scope.interval = attrs.interval;
      scope.index = 0;
      scope.imgSrc = scope.imgSrcs[scope.index];
      $interval(function() {
        if (scope.index < scope.imgSrcs.length - 1) {
          scope.index++;
        } else {
          scope.index = 0;
        }
      }, scope.interval);
    }
  };
});
