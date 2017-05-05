app.filter('displayBlankIfNotExist', function ($filter) {
    return function (input, minYear, maxYear, limitTo) {
        var filtered = [];
        var current = maxYear;
        while (current >= minYear) {
            filtered.push($filter('getValueByKey')(input,'year',current,'value'));
            if (filtered.length >= limitTo){
                break;
            }
            current--;
        }
        return filtered;
    };
});