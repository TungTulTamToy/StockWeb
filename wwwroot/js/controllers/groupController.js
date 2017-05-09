'use strict';

app.controller('groupController', function ($scope, Group,$filter) {
    $scope.show = {
        PE: true,
        Growth: true,
        NetProfit: false,
        Price3MCal: false,
        Price6MCal: true,
        Price1YCal: false,
        PEG: false,
        PEDiff:false,
        MACD: true,
    };
    $scope.debug = function (msg) {
        alert(msg);
    }
    $scope.selectGroup = function(groupID)
    {
        Group.get({ id: groupID }).$promise.then(
            function (data) {
                $scope.content = data.content.stockCollection;
                $scope.summary = data.content.stockSummary;
            });
    }
    $scope.determineColor = function(value,levels,colors)
    {
        var color = colors[0];
        if (value < levels[0]) {
            color = colors[0];
        }

        if (value > levels[levels.length - 1]) {
            color = colors[colors.length - 1];
        }

        for (var i = 1; i < levels.length; i++) {
            if (value >= levels[i - 1] && value <= levels[i]) {
                color = colors[i];
                break;
            }
        }

        return color;
    }
    $scope.setBorder = function () {
        return 'border-left';
    }
    $scope.getPriceCal = function (priceCals, propertyKey, propertyName) {
        return $filter('getValueByKey')(priceCals, 'name', propertyKey, propertyName);
    }
    Group.get(function (data)
    {
        $scope.groups = data.content.name;
    });
    $scope.selectGroup('All');
});