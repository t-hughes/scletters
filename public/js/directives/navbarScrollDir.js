app.directive("scroll", function ($window) {

    return function(scope, element, attrs) {

      /* header DOM element with md-page-header attribute */
      var header         = document.querySelector('[md-page-header]');
      /* Store header dimensions to initialize header styling */
      var baseDimensions = header.getBoundingClientRect();
      /* DOM element with md-header-title attribute (title in toolbar) */
      var title          = angular.element(document.querySelector('[md-header-title]'));
      /* DOM element with md-header-picture attribute (picture in header) */
      var picture        = angular.element(document.querySelector('[md-header-picture]'));
      /* The height of a toolbar by default in Angular Material */
      var legacyToolbarH = 64;
      /* The zoom scale of the toolbar title when it's placed at the bottom of the header picture */
      var titleZoom      = 0;
      /* The primary color palette used by Angular Material */
      var primaryColor   = [217,83,79];

      function styleInit () {
        title.css('padding-left','16px');
        title.css('position','relative');
        title.css('transform-origin', '24px');
        title.css('color', '#FFF');
      }

      function handleStyle(dim) {
        if ((dim.bottom-baseDimensions.top) > legacyToolbarH) {
          title.css('top', ((dim.bottom-baseDimensions.top)-legacyToolbarH)+'px');
          element.css('height', (dim.bottom-baseDimensions.top)+'px');
          title.css('transform','scale('+((titleZoom-1)*ratio(dim)+1)+','+((titleZoom-1)*ratio(dim)+1)+')');

        } else {
          title.css('top', '0px');
          element.css('height', legacyToolbarH+'px');
          title.css('transform','scale(1,1)');
        }
        element.css('background-color','rgba('+primaryColor[0]+','+primaryColor[1]+','+primaryColor[2]+','+(1-ratio(dim))+')');
        picture.css('background-position','50% '+(ratio(dim)*50)+'%');
      }

      function ratio(dim) {
        var r = (dim.bottom-baseDimensions.top)/dim.height;
        if(r<0) return 0;
        if(r>1) return 1;
        return Number(r.toString().match(/^\d+(?:\.\d{0,2})?/));
      }

      styleInit();
      handleStyle(baseDimensions);

      	/* Scroll event listener */
      angular.element($window).bind("scroll", function() {
        var dimensions = header.getBoundingClientRect();
        handleStyle(dimensions);
        scope.$apply();
      });

      /* Resize event listener */
      angular.element($window).bind('resize',function () {
        baseDimensions = header.getBoundingClientRect();
        var dimensions = header.getBoundingClientRect();
        handleStyle(dimensions);
        scope.$apply();
      });

    };

});
