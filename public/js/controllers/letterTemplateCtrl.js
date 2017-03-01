(function () {
  'use strict';
      app.controller('letterTemplateCtrl', letterTemplateCtrl);

  function letterTemplateCtrl ($scope, $log, letterTemplateSrv) {
    var tabs = [
          {
              title: 'Template 1',

              letterHeader: "Dear (name),",

              paragraphOne: "Ho Ho Ho! Merry Christmas! The Elves and I are busy making presents for all of the good boys and girls around the world. You have been such a good (boy/girl) this year, so I wanted to take a minute to write you a letter.",

              paragraphTwo: "I’ve made my Naughty and Nice list, and I’ve checked it twice. You are on my Nice List! I am so happy that you have been such a good (boy/girl) this year. I heard from my secret messenger that you want (What do they want for Christmas?) for Christmas this year. Because you have been so good, the Elves and I have prepared a special present for you to open on Christmas Morning.",

              paragraphThree: "Can you do me a favor? I want you to try really hard to (insert something that the child needs to work on). If you can do that for me, then I will be very happy and might bring you an extra treat on Christmas Morning.",

              paragraphFour: "By the time I get to your house in (location), I am going to be very hungry. Would you leave some cookies and milk out for me? Chocolate Chip cookies are my favorite, but I love all kinds of cookies! Well I need to get back to my workshop and help the Elves. Keep up the good work (Name) and have a Very Merry Christmas!",

              letterFooter: "Ho Ho Ho,",

              letterSigning: "Santa Claus"
        },

        {
             title: 'Template 2',

             letterHeader: "Dear (name),",

             paragraphOne: "Ho Ho Ho! Merry Christmas! The Elves and I are busy making presents for all of the good boys and girls around the world. You have been such a good (boy/girl) this year, so I wanted to take a minute to write you a letter.",

             paragraphTwo: "I’ve made my Naughty and Nice list, and I’ve checked it twice. You are on my Nice List! I am so happy that you have been such a good (boy/girl) this year. I heard from my secret messenger that you want (What do they want for Christmas?) for Christmas this year. Because you have been so good, the Elves and I have prepared a special present for you to open on Christmas Morning.",

             paragraphThree: "Can you do me a favor? I want you to try really hard to (insert something that the child needs to work on). If you can do that for me, then I will be very happy and might bring you an extra treat on Christmas Morning.",

             paragraphFour: "By the time I get to your house in (location), I am going to be very hungry. Would you leave some cookies and milk out for me? Chocolate Chip cookies are my favorite, but I love all kinds of cookies! Well I need to get back to my workshop and help the Elves. Keep up the good work (Name) and have a Very Merry Christmas!",

             letterFooter: "Ho Ho Ho,",

             letterSigning: "Santa Claus"
        },

         {
             title: 'Template 3',

             letterHeader: "Dear (name),",

             paragraphOne: "Ho Ho Ho! Merry Christmas! The Elves and I are busy making presents for all of the good boys and girls around the world. You have been such a good (boy/girl) this year, so I wanted to take a minute to write you a letter.",

             paragraphTwo: "I’ve made my Naughty and Nice list, and I’ve checked it twice. You are on my Nice List! I am so happy that you have been such a good (boy/girl) this year. I heard from my secret messenger that you want (What do they want for Christmas?) for Christmas this year. Because you have been so good, the Elves and I have prepared a special present for you to open on Christmas Morning.",

             paragraphThree: "Can you do me a favor? I want you to try really hard to (insert something that the child needs to work on). If you can do that for me, then I will be very happy and might bring you an extra treat on Christmas Morning.",

             paragraphFour: "By the time I get to your house in (location), I am going to be very hungry. Would you leave some cookies and milk out for me? Chocolate Chip cookies are my favorite, but I love all kinds of cookies! Well I need to get back to my workshop and help the Elves. Keep up the good work (Name) and have a Very Merry Christmas!",

             letterFooter: "Ho Ho Ho,",

             letterSigning: "Santa Claus"
        },

        {
            title: 'Template 4',

            letterHeader: "Dear (name),",

            paragraphOne: "Ho Ho Ho! Merry Christmas! The Elves and I are busy making presents for all of the good boys and girls around the world. You have been such a good (boy/girl) this year, so I wanted to take a minute to write you a letter.",

            paragraphTwo: "I’ve made my Naughty and Nice list, and I’ve checked it twice. You are on my Nice List! I am so happy that you have been such a good (boy/girl) this year. I heard from my secret messenger that you want (What do they want for Christmas?) for Christmas this year. Because you have been so good, the Elves and I have prepared a special present for you to open on Christmas Morning.",

            paragraphThree: "Can you do me a favor? I want you to try really hard to (insert something that the child needs to work on). If you can do that for me, then I will be very happy and might bring you an extra treat on Christmas Morning.",

            paragraphFour: "By the time I get to your house in (location), I am going to be very hungry. Would you leave some cookies and milk out for me? Chocolate Chip cookies are my favorite, but I love all kinds of cookies! Well I need to get back to my workshop and help the Elves. Keep up the good work (Name) and have a Very Merry Christmas!",

            letterFooter: "Ho Ho Ho,",

            letterSigning: "Santa Claus"
        }],
        selected = null,
        previous = null;
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
    $scope.$watch('selectedIndex', function(current, old){
      previous = selected;
      selected = tabs[current];
      if ( old && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
      if ( current )                $log.debug('Hello ' + selected.title + '!');
    });
    // $scope.addTab = function (title, view) {
    //   view = view || title + " Content View";
    //   tabs.push({ title: title, content: view, disabled: false});
    // };
    // $scope.removeTab = function (tab) {
    //   var index = tabs.indexOf(tab);
    //   tabs.splice(index, 1);
    // };
  }
})();
