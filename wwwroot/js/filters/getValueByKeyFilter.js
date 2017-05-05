app.filter('getValueByKey', function () {
    return function (input, keyName, keyValue, propertyName) {
        var value = null;
        for (var i = 0; i < input.length; i++) {
            if (input[i][keyName] == keyValue) {    
                value = input[i][propertyName];
                break;
            }
        }
        return value;
    };
});