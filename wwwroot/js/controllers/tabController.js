app.controller('tabController', function ($scope) {
    $scope.activeTab = "group";
    $scope.tabTemplates = {
        group: '/views/group.html',
        about: '/views/about.html'
    };
});