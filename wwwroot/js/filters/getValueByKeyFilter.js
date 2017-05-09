app.filter('getValueByKey', function () {
    return function (input, keyName, keyValue, propertyName) {
        var value = null;
        if(input!=null)
        {
            for (var i = 0; i < input.length; i++) {
                if (input[i][keyName] == keyValue) {    
                    value = input[i][propertyName];
                    break;
                }
            }
        }else{
            value = 'N/A';
        }
        return value;
    };
});