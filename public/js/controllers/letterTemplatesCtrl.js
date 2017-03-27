app.controller('letterTemplatesCtrl', function($scope, letterTemplatesSrv) {

    $scope.getAllTemplates = letterTemplatesSrv.getAllTemplates().then(function(response) {
        $scope.templates = response.data;
    });

    //Changes tempalte border to red when select button is clicked
    $scope.activeTemplate = function(index) {
        $scope.isSelected = index;
    };

    // Truncated letter template content
    $scope.longText1 = "Dear (name), Ho Ho Ho! Merry Christmas! The Elves and I are busy making presents for all of the good boys and girls around the world. You have been such a good (boy/girl) this year, so I wanted to take a minute to write you a letter. I’ve made my Naughty and Nice list, and I’ve checked it twice. You are on my Nice List! I am so happy that you have been such a good (boy/girl) this year.I heard from my secret messenger that you want (What do they want for Christmas?) for Christmas this year. Because you have been so good, the Elves and I have prepared a special present for you to open on Christmas Morning. Can you do me a favor? I want you to try really hard to (insert something that the child needs to work on). If you can do that for me, then I will be very happy and might bring you an extra treat on Christmas Morning. By the time I get to your house in (location), I am going to be very hungry. Would you leave some cookies and milk out for me? Chocolate Chip cookies are my favorite, but I love all kinds of cookies! Well I need to get back to my workshop and help the Elves. Keep up the good work (Name) and have a Very Merry Christmas! Ho Ho Ho, Santa Claus";

});
